// Vercel serverless function: turns app text into natural Carioca speech with OpenAI.
// Needs the environment variable OPENAI_API_KEY (set in Vercel → Settings → Environment Variables).
// Optional: TTS_MODEL (default gpt-4o-mini-tts) and TTS_VOICE (default coral).
import { allSpeakable, speakable } from "../content.js";

const norm = s => speakable(s).toLowerCase().replace(/\s+/g, " ");
const ALLOWED = new Set(allSpeakable().map(norm)); // only app text, so nobody can misuse your key

const BASE = "You are a friendly native Carioca from Rio de Janeiro speaking Brazilian Portuguese. " +
  "Use an authentic Rio accent: S before consonants and at the end of words sounds like 'sh', " +
  "T and D before an 'i' sound become 'tch' and 'dj', initial R and RR are a breathy 'h'. " +
  "Put the word stress exactly where a native speaker would. Warm, relaxed, human intonation — never robotic.";

const STYLE = {
  slow:   "Speak slowly and clearly for a language learner, but keep a natural melody. Do not spell anything out.",
  natural:"Speak casually at a natural conversational pace, like chatting with a friend at the beach. " +
          "Pronounce slang and contractions exactly as written (e.g. 'tô', 'cê', 'pra', 'mermão')."
};

export default async function handler(req, res) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) return res.status(501).json({ error: "OPENAI_API_KEY not set" });

  const text = speakable(req.query.text).slice(0, 200);
  const mode = req.query.mode === "slow" ? "slow" : "natural";
  if (!text || !ALLOWED.has(norm(text))) return res.status(400).json({ error: "text not allowed" });

  try {
    const r = await fetch("https://api.openai.com/v1/audio/speech", {
      method: "POST",
      headers: { "Authorization": `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: process.env.TTS_MODEL || "gpt-4o-mini-tts",
        voice: process.env.TTS_VOICE || "coral",
        input: text,
        instructions: BASE + " " + STYLE[mode],
        response_format: "mp3"
      })
    });
    if (!r.ok) return res.status(502).json({ error: await r.text() });
    const audio = Buffer.from(await r.arrayBuffer());
    res.setHeader("Content-Type", "audio/mpeg");
    // Cache on Vercel's CDN for a year: each sentence is only generated (and paid for) once.
    res.setHeader("Cache-Control", "public, max-age=86400, s-maxage=31536000, immutable");
    return res.status(200).send(audio);
  } catch (e) {
    return res.status(500).json({ error: String(e) });
  }
}
