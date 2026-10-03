// =====================================================================
// FALA CARIOCA — all lesson content lives in this file.
//
// Phrase fields:
//   pt    = standard Portuguese        en   = meaning
//   ipa   = phonetic (Rio accent)      full = careful pronunciation (CAPS = stress)
//   cw    = how it's said casually     coll = how that casual version sounds
//   note  = usage tip
// Word fields:
//   pt, en, full, cw/coll (leave "" when there's no casual shortcut),
//   alt  = alternatives / synonyms (optional)
//   ex   = example sentence            exEn = translation
// To add a level: copy a { name: ..., phrases: [...], words: [...] } block.
// =====================================================================

export const LEVELS = [
// ---------------------------------------------------------------- 1
{
  name:"Iniciante 1", desc:"First steps: greet, introduce yourself, be polite.",
  phrases:[
    { pt:"E aí, beleza?", en:"Hey, what's up? / All good?", ipa:"[i aˈi beˈlezɐ]",
      full:"ee ah-EE, beh-LEH-zah?", cw:"Iaí, beleza?", coll:"yah-EE, b'LEH-zah?",
      note:"The go-to greeting. Answer with “Beleza!” or “Tranquilo!”." },
    { pt:"Muito prazer!", en:"Nice to meet you!", ipa:"[ˈmũjtu pɾaˈzeʁ]",
      full:"MWEEN-too prah-ZEHR!", cw:"Prazer!", coll:"prah-ZEH!",
      note:"Most people just say “Prazer!”, often with a kiss on the cheek (one in Rio)." },
    { pt:"Como você se chama?", en:"What's your name?", ipa:"[ˈkomu voˈse si ˈʃɐ̃mɐ]",
      full:"KOH-moo voh-SEH see SHAH-mah?", cw:"Cumé qui cê chama?", coll:"koo-MEH kee seh SHAH-mah?",
      note:"“Como é que” melts into “cumé que”. Answer: “Me chamo…” or “Meu nome é…”." },
    { pt:"Obrigado!", en:"Thank you!", ipa:"[obɾiˈɡadu]",
      full:"oh-bree-GAH-doo!", cw:"Brigado!", coll:"bree-GAH-doo!",
      note:"Women say “obrigada”. The first O often disappears. Even more casual: “Valeu!”." },
    { pt:"Com licença.", en:"Excuse me (to pass / get attention).", ipa:"[kõ liˈsẽsɐ]",
      full:"kohng lee-SEHN-sah", cw:"Licença.", coll:"lee-SEHN-sah",
      note:"Use it on a crowded bus or to get past someone. The “com” is usually dropped." }
  ],
  words:[
    { pt:"oi", en:"hi", full:"OY", cw:"", coll:"", alt:"olá (more formal), e aí (casual)",
      ex:"Oi, tudo bem?", exEn:"Hi, how are you?" },
    { pt:"tchau", en:"bye", full:"CHOW", cw:"", coll:"", alt:"falou! (casual), até mais",
      ex:"Tchau, até amanhã!", exEn:"Bye, see you tomorrow!" },
    { pt:"sim", en:"yes", full:"SEENG", cw:"é", coll:"EH", alt:"Brazilians often repeat the verb instead: “Sou!”, “Quero!”",
      ex:"Você é holandês? — Sou, sim.", exEn:"Are you Dutch? — Yes, I am." },
    { pt:"não", en:"no / not", full:"NOWNG", cw:"num", coll:"NOONG", alt:"",
      ex:"Não, obrigado.", exEn:"No, thanks." },
    { pt:"por favor", en:"please", full:"poor fah-VOHR", cw:"pur favô", coll:"poo fah-VOH", alt:"",
      ex:"Uma água, por favor.", exEn:"A water, please." },
    { pt:"desculpa", en:"sorry", full:"djeesh-KOOL-pah", cw:"", coll:"", alt:"foi mal (casual: my bad)",
      ex:"Desculpa, não entendi.", exEn:"Sorry, I didn't understand." },
    { pt:"eu", en:"I", full:"EH-oo", cw:"", coll:"", alt:"",
      ex:"Eu sou da Holanda.", exEn:"I'm from the Netherlands." },
    { pt:"você", en:"you", full:"voh-SEH", cw:"cê", coll:"SEH", alt:"tu (very common in Rio)",
      ex:"Você é daqui?", exEn:"Are you from here?" },
    { pt:"nome", en:"name", full:"NOH-mee", cw:"", coll:"", alt:"",
      ex:"Meu nome é Ana.", exEn:"My name is Ana." },
    { pt:"amigo", en:"friend", full:"ah-MEE-goo", cw:"", coll:"", alt:"parceiro, brother, cara",
      ex:"Ele é meu amigo.", exEn:"He's my friend." }
  ]
},
// ---------------------------------------------------------------- 2
{
  name:"Iniciante 2", desc:"Getting by: understanding, asking, reacting.",
  phrases:[
    { pt:"Não sei.", en:"I don't know.", ipa:"[nɐ̃w ˈsej]",
      full:"nowng SAY", cw:"Num sei.", coll:"noong SAY",
      note:"Before a verb, “não” often shrinks to “num”. Very casual: “Sei lá” (dunno)." },
    { pt:"Está bom.", en:"Okay. / Fine.", ipa:"[iʃˈta ˈbõ]",
      full:"eesh-TAH BOHNG", cw:"Tá bom.", coll:"tah BOHNG",
      note:"Nobody says “está bom” in conversation. You'll hear “Tá bom” or just “Tá” all day." },
    { pt:"Não entendi.", en:"I didn't understand.", ipa:"[nɐ̃w ẽtẽˈdʒi]",
      full:"nowng een-tehn-DJEE", cw:"Num entendi.", coll:"noong een-tehn-DJEE",
      note:"Your most useful phrase as a beginner. “De” and “di” sound like “dji” in Rio." },
    { pt:"Pode repetir?", en:"Can you repeat that?", ipa:"[ˈpɔdʒi ʁepeˈtʃiʁ]",
      full:"POH-djee heh-peh-CHEER?", cw:"Pó repeti?", coll:"POH heh-peh-CHEE?",
      note:"The R in “repetir” is a breathy H. The final R disappears in casual speech." },
    { pt:"Fala mais devagar.", en:"Speak more slowly.", ipa:"[ˈfalɐ majʒ dʒivaˈɡaʁ]",
      full:"FAH-lah maizh djee-vah-GAHR", cw:"Fala mais devagá.", coll:"FAH-lah maizh djee-vah-GAH",
      note:"Add “por favor” to be polite. The S in “mais” becomes “zh” before a D." }
  ],
  words:[
    { pt:"aqui", en:"here", full:"ah-KEE", cw:"", coll:"", alt:"cá (less common)",
      ex:"Eu moro aqui perto.", exEn:"I live near here." },
    { pt:"ali", en:"over there (nearby)", full:"ah-LEE", cw:"", coll:"", alt:"lá (further away)",
      ex:"O banheiro é ali.", exEn:"The bathroom is over there." },
    { pt:"onde", en:"where", full:"OHN-djee", cw:"", coll:"", alt:"cadê (where is…?)",
      ex:"Onde fica a praia?", exEn:"Where's the beach?" },
    { pt:"quando", en:"when", full:"KWAHN-doo", cw:"", coll:"", alt:"",
      ex:"Quando você chega?", exEn:"When do you arrive?" },
    { pt:"quanto", en:"how much", full:"KWAHN-too", cw:"", coll:"", alt:"",
      ex:"Quanto custa?", exEn:"How much does it cost?" },
    { pt:"agora", en:"now", full:"ah-GOH-rah", cw:"", coll:"", alt:"já (right away)",
      ex:"Tô ocupado agora.", exEn:"I'm busy right now." },
    { pt:"hoje", en:"today", full:"OH-zhee", cw:"", coll:"", alt:"",
      ex:"Hoje tá calor demais.", exEn:"It's way too hot today." },
    { pt:"bom", en:"good", full:"BOHNG", cw:"", coll:"", alt:"bacana, maneiro",
      ex:"O açaí aqui é muito bom.", exEn:"The açaí here is really good." },
    { pt:"legal", en:"cool / nice", full:"leh-GOW", cw:"", coll:"", alt:"maneiro, bacana",
      ex:"Que legal!", exEn:"How cool!" },
    { pt:"também", en:"also / too", full:"tahng-BAYNG", cw:"tamém", coll:"tah-MAYNG", alt:"",
      ex:"Eu também!", exEn:"Me too!" }
  ]
},
// ---------------------------------------------------------------- 3
{
  name:"Iniciante 3", desc:"Food & drink: ordering at the boteco and the beach.",
  phrases:[
    { pt:"Me vê um chope, por favor.", en:"Can I get a draft beer, please?", ipa:"[mi ˈve ũ ˈʃopi poʁ faˈvoʁ]",
      full:"mee VEH oong SHOH-pee, poor fah-VOHR", cw:"Me vê um chopinho!", coll:"mee VEH oong shoh-PEE-nyoo!",
      note:"Cariocas order with “me vê” or “me dá”. Diminutives (-inho) sound friendlier." },
    { pt:"Quanto é?", en:"How much is it?", ipa:"[ˈkwɐ̃tu ˈɛ]",
      full:"KWAHN-too EH?", cw:"Quant'é?", coll:"KWAHN-teh?",
      note:"Use it at the beach kiosk or the feira. “Quanto custa?” also works." },
    { pt:"A conta, por favor.", en:"The bill, please.", ipa:"[a ˈkõtɐ poʁ faˈvoʁ]",
      full:"ah KOHN-tah, poor fah-VOHR", cw:"A conta, pur favô.", coll:"ah KOHN-tah, poo fah-VOH",
      note:"Or just catch the waiter's eye and mime writing. The 10% service is usually included." },
    { pt:"Estou com fome.", en:"I'm hungry.", ipa:"[iʃˈtow kõ ˈfɔmi]",
      full:"eesh-TOH kohng FOH-mee", cw:"Tô cum fome.", coll:"toh koong FOH-mee",
      note:"Same pattern: “tô com sede” (thirsty), “tô com sono” (sleepy), “tô com calor” (hot)." },
    { pt:"Está gostoso!", en:"It's delicious!", ipa:"[iʃˈta ɡoʃˈtozu]",
      full:"eesh-TAH goosh-TOH-zoo!", cw:"Tá gostoso!", coll:"tah goosh-TOH-zoo!",
      note:"Note the Carioca “sh” in gostoso. Stronger: “Tá uma delícia!”." }
  ],
  words:[
    { pt:"comida", en:"food", full:"koo-MEE-dah", cw:"", coll:"", alt:"rango (slang)",
      ex:"A comida daqui é ótima.", exEn:"The food here is great." },
    { pt:"cerveja", en:"beer", full:"sehh-VEH-zhah", cw:"", coll:"", alt:"chope (draft), gelada (a cold one)",
      ex:"Uma cerveja bem gelada, por favor.", exEn:"A really cold beer, please." },
    { pt:"água", en:"water", full:"AH-gwah", cw:"", coll:"", alt:"",
      ex:"Uma água de coco, por favor.", exEn:"A coconut water, please." },
    { pt:"café", en:"coffee", full:"kah-FEH", cw:"", coll:"", alt:"cafezinho (small black coffee)",
      ex:"Vamos tomar um café?", exEn:"Shall we get a coffee?" },
    { pt:"conta", en:"the bill", full:"KOHN-tah", cw:"", coll:"", alt:"",
      ex:"Deixa que eu pago a conta.", exEn:"Let me pay the bill." },
    { pt:"dinheiro", en:"money / cash", full:"djee-NYAY-roo", cw:"dinhero", coll:"djee-NYEH-roo", alt:"grana (slang)",
      ex:"Aceita cartão ou só dinheiro?", exEn:"Do you take card or only cash?" },
    { pt:"caro", en:"expensive", full:"KAH-roo", cw:"", coll:"", alt:"salgado (slang: pricey)",
      ex:"Nossa, que caro!", exEn:"Wow, that's expensive!" },
    { pt:"barato", en:"cheap", full:"bah-RAH-too", cw:"", coll:"", alt:"",
      ex:"Na feira é mais barato.", exEn:"It's cheaper at the market." },
    { pt:"gostoso", en:"tasty", full:"goosh-TOH-zoo", cw:"", coll:"", alt:"delícia",
      ex:"Esse pastel tá gostoso demais!", exEn:"This pastel is so tasty!" },
    { pt:"fome", en:"hunger", full:"FOH-mee", cw:"", coll:"", alt:"",
      ex:"Tô morrendo de fome!", exEn:"I'm starving!" }
  ]
},
// ---------------------------------------------------------------- 4
{
  name:"Básico 1", desc:"Making plans: when, where, let's go.",
  phrases:[
    { pt:"Onde você está?", en:"Where are you?", ipa:"[ˈõdʒi voˈse iʃˈta]",
      full:"OHN-djee voh-SEH eesh-TAH?", cw:"Cê tá onde?", coll:"seh TAH OHN-djee?",
      note:"Two classic shortcuts: você → cê, está → tá. Speakers also move “onde” to the end." },
    { pt:"Vamos embora!", en:"Let's go!", ipa:"[ˈvɐ̃muʃ ẽˈbɔɾɐ]",
      full:"VAH-moosh ehm-BOH-rah!", cw:"Bora!", coll:"BOH-rah!",
      note:"Hear the Carioca “sh” on the final S of vamos. In speech it collapses to “Bora!”." },
    { pt:"Estou chegando.", en:"I'm almost there. / On my way.", ipa:"[iʃˈtow ʃeˈɡɐ̃du]",
      full:"eesh-TOH sheh-GAHN-doo", cw:"Tô chegano.", coll:"toh sheh-GAH-noo",
      note:"Estou → tô, and -ndo often becomes -no. Classic text while still at home." },
    { pt:"Pode deixar!", en:"Leave it to me! / I've got it.", ipa:"[ˈpɔdʒi dejˈʃaʁ]",
      full:"POH-djee day-SHAHR!", cw:"Pó deixá!", coll:"POH day-SHAH!",
      note:"“De” sounds like “djee” in Rio. The final R of verbs is usually dropped." },
    { pt:"Vamos marcar!", en:"Let's set something up!", ipa:"[ˈvɐ̃muʃ maʁˈkaʁ]",
      full:"VAH-moosh mahh-KAHR!", cw:"Bora marcá!", coll:"BOH-rah mahh-KAH!",
      note:"Said all the time. Warning: it doesn't always mean a real plan is coming." }
  ],
  words:[
    { pt:"amanhã", en:"tomorrow", full:"ah-mah-NYAHNG", cw:"", coll:"", alt:"",
      ex:"A gente se vê amanhã.", exEn:"See you tomorrow." },
    { pt:"depois", en:"later / after", full:"deh-POISH", cw:"dipois", coll:"djee-POISH", alt:"mais tarde",
      ex:"Depois te ligo.", exEn:"I'll call you later." },
    { pt:"cedo", en:"early", full:"SEH-doo", cw:"", coll:"", alt:"",
      ex:"Amanhã eu acordo cedo.", exEn:"I'm waking up early tomorrow." },
    { pt:"tarde", en:"late / afternoon", full:"TAHH-djee", cw:"", coll:"", alt:"",
      ex:"Já tá tarde, vou nessa.", exEn:"It's late already, I'm off." },
    { pt:"noite", en:"night / evening", full:"NOY-chee", cw:"", coll:"", alt:"",
      ex:"Hoje à noite tem samba na Lapa.", exEn:"Tonight there's samba in Lapa." },
    { pt:"casa", en:"house / home", full:"KAH-zah", cw:"", coll:"", alt:"",
      ex:"Vou pra casa.", exEn:"I'm going home." },
    { pt:"praia", en:"beach", full:"PRAI-ah", cw:"", coll:"", alt:"orla (beachfront)",
      ex:"Bora pra praia?", exEn:"Shall we go to the beach?" },
    { pt:"rua", en:"street", full:"HOO-ah", cw:"", coll:"", alt:"",
      ex:"Qual é o nome dessa rua?", exEn:"What's this street called?" },
    { pt:"perto", en:"near", full:"PEHH-too", cw:"", coll:"", alt:"",
      ex:"Fica perto do metrô.", exEn:"It's near the metro." },
    { pt:"longe", en:"far", full:"LOHN-zhee", cw:"", coll:"", alt:"",
      ex:"Copacabana é longe daqui?", exEn:"Is Copacabana far from here?" }
  ]
},
// ---------------------------------------------------------------- 5
{
  name:"Básico 2", desc:"On the street: buses, directions, asking for help.",
  phrases:[
    { pt:"Para onde você vai?", en:"Where are you going?", ipa:"[ˈpaɾɐ ˈõdʒi voˈse ˈvaj]",
      full:"PAH-rah OHN-djee voh-SEH VAI?", cw:"Pronde cê vai?", coll:"PROHN-djee seh VAI?",
      note:"Para → pra, and “pra onde” melts into “pronde”. Half the syllables disappear." },
    { pt:"Onde fica o metrô?", en:"Where's the metro?", ipa:"[ˈõdʒi ˈfikɐ u meˈtɾo]",
      full:"OHN-djee FEE-kah oo meh-TROH?", cw:"Cadê o metrô?", coll:"kah-DEH oo meh-TROH?",
      note:"“Cadê” is the casual way to ask where something (or someone) is." },
    { pt:"Estou perdido.", en:"I'm lost.", ipa:"[iʃˈtow peʁˈdʒidu]",
      full:"eesh-TOH pehh-DJEE-doo", cw:"Tô perdidão.", coll:"toh pehh-djee-DOWNG",
      note:"The -ão ending makes it bigger: “perdidão” = totally lost. Women: “perdida”." },
    { pt:"Pode me ajudar?", en:"Can you help me?", ipa:"[ˈpɔdʒi mi aʒuˈdaʁ]",
      full:"POH-djee mee ah-zhoo-DAHR?", cw:"Pó me ajudá?", coll:"POH mee ah-zhoo-DAH?",
      note:"“Me” before the verb is normal in Brazil (in Portugal it would be “ajudar-me”)." },
    { pt:"Vou descer aqui!", en:"I'm getting off here!", ipa:"[vow deˈseʁ aˈki]",
      full:"VOH deh-SEHR ah-KEE!", cw:"Vô descê aqui!", coll:"voh deh-SEH ah-KEE!",
      note:"Shout it to the bus driver. Or press the button and say “Motorista, vou descer!”." }
  ],
  words:[
    { pt:"para", en:"for / to", full:"PAH-rah", cw:"pra", coll:"PRAH", alt:"",
      ex:"Vou pra Copacabana.", exEn:"I'm going to Copacabana." },
    { pt:"está", en:"is (right now)", full:"eesh-TAH", cw:"tá", coll:"TAH", alt:"",
      ex:"A praia tá cheia hoje.", exEn:"The beach is packed today." },
    { pt:"estou", en:"I am (right now)", full:"eesh-TOH", cw:"tô", coll:"TOH", alt:"",
      ex:"Tô cansado.", exEn:"I'm tired." },
    { pt:"ônibus", en:"bus", full:"OH-nee-boosh", cw:"", coll:"", alt:"busão (slang)",
      ex:"Esse ônibus vai pro centro?", exEn:"Does this bus go downtown?" },
    { pt:"metrô", en:"metro / subway", full:"meh-TROH", cw:"", coll:"", alt:"",
      ex:"É melhor ir de metrô.", exEn:"It's better to go by metro." },
    { pt:"esquerda", en:"left", full:"eesh-KEHH-dah", cw:"", coll:"", alt:"",
      ex:"Vira à esquerda.", exEn:"Turn left." },
    { pt:"direita", en:"right", full:"djee-RAY-tah", cw:"", coll:"", alt:"",
      ex:"É a segunda à direita.", exEn:"It's the second on the right." },
    { pt:"reto", en:"straight ahead", full:"HEH-too", cw:"", coll:"", alt:"toda vida (Rio: straight on)",
      ex:"Segue reto toda vida.", exEn:"Just keep going straight." },
    { pt:"cadê", en:"where is…?", full:"kah-DEH", cw:"", coll:"", alt:"onde está",
      ex:"Cadê meu celular?", exEn:"Where's my phone?" },
    { pt:"lá", en:"there (further away)", full:"LAH", cw:"", coll:"", alt:"ali (nearby)",
      ex:"Te encontro lá.", exEn:"I'll meet you there." }
  ]
},
// ---------------------------------------------------------------- 6
{
  name:"Intermediário 1", desc:"Real conversation: fillers and shortcuts.",
  phrases:[
    { pt:"Deixa eu ver.", en:"Let me see.", ipa:"[ˈdejʃɐ ew ˈveʁ]",
      full:"DAY-shah EH-oo VEHR", cw:"Xô vê.", coll:"SHOH VEH",
      note:"“Deixa eu” fuses into “xô” (sounds like “show”), and the R of ver disappears." },
    { pt:"Nada a ver!", en:"No way! / That makes no sense.", ipa:"[ˈnadɐ a ˈveʁ]",
      full:"NAH-dah ah VEHR!", cw:"Nada a vê!", coll:"NAH-dah VEH!",
      note:"Used when something is irrelevant or untrue. The two A's merge into one." },
    { pt:"Fica tranquilo.", en:"Don't worry. / Relax.", ipa:"[ˈfikɐ tɾɐ̃ˈkwilu]",
      full:"FEE-kah trahn-KWEE-loo", cw:"Fica de boa!", coll:"FEE-kah djee BOH-ah!",
      note:"“De boa” = chill, no stress. You'll also hear “Relaxa!”." },
    { pt:"Com certeza!", en:"Definitely! / For sure!", ipa:"[kõ seʁˈtezɐ]",
      full:"kohng sehh-TEH-zah!", cw:"Certeza!", coll:"sehh-TEH-zah!",
      note:"The R before T is a soft breathy H in Rio." },
    { pt:"É verdade, não é?", en:"It's true, isn't it?", ipa:"[ɛ veʁˈdadʒi nɐ̃w ˈɛ]",
      full:"EH vehh-DAH-djee, nowng EH?", cw:"É verdade, né?", coll:"EH vehh-DAH-djee, NEH?",
      note:"“Não é” → “né”. Brazilians end half their sentences with “né?” (right?)." }
  ],
  words:[
    { pt:"a gente", en:"we (lit. the people)", full:"ah ZHEN-chee", cw:"", coll:"", alt:"nós (more formal)",
      ex:"A gente vai na praia amanhã.", exEn:"We're going to the beach tomorrow." },
    { pt:"cara", en:"dude / man / guy", full:"KAH-rah", cw:"", coll:"", alt:"mermão, paizão, parceiro, brother, amigo",
      ex:"Cara, que dia!", exEn:"Man, what a day!" },
    { pt:"tipo", en:"like (filler) / kind of", full:"CHEE-poo", cw:"", coll:"", alt:"",
      ex:"Ele chegou tipo às dez.", exEn:"He showed up at, like, ten." },
    { pt:"então", en:"so / then", full:"ehn-TOWNG", cw:"tão", coll:"TOWNG", alt:"aí (and then…)",
      ex:"Então, bora?", exEn:"So, shall we go?" },
    { pt:"mesmo", en:"really / same", full:"MEZH-moo", cw:"", coll:"", alt:"",
      ex:"Sério mesmo?", exEn:"Seriously? / For real?" },
    { pt:"porque", en:"because", full:"poor-KEH", cw:"purquê", coll:"poo-KEH", alt:"",
      ex:"Não fui porque choveu.", exEn:"I didn't go because it rained." },
    { pt:"coisa", en:"thing", full:"KOY-zah", cw:"", coll:"", alt:"parada, bagulho (slang)",
      ex:"Que coisa boa!", exEn:"What a nice thing!" },
    { pt:"nada", en:"nothing", full:"NAH-dah", cw:"", coll:"", alt:"",
      ex:"De nada!", exEn:"You're welcome!" },
    { pt:"demais", en:"too much / awesome", full:"djee-MAISH", cw:"", coll:"", alt:"",
      ex:"Esse lugar é bom demais!", exEn:"This place is so good!" },
    { pt:"muito", en:"very / a lot", full:"MWEEN-too", cw:"mó", coll:"MOH", alt:"",
      ex:"Tá mó calor hoje.", exEn:"It's super hot today." }
  ]
},
// ---------------------------------------------------------------- 7
{
  name:"Intermediário 2", desc:"Feelings & opinions.",
  phrases:[
    { pt:"Valeu, meu irmão!", en:"Thanks, bro!", ipa:"[vaˈlew mew iʁˈmɐ̃w]",
      full:"vah-LEH-oo, MEH-oo eehh-MOWNG!", cw:"Valeu, mermão!", coll:"vah-LEW, mehh-MOWNG!",
      note:"“Mermão” is pure Rio. The R before M is a breathy H, almost silent." },
    { pt:"Estou muito cansado.", en:"I'm really tired.", ipa:"[iʃˈtow ˈmũjtu kɐ̃ˈsadu]",
      full:"eesh-TOH MWEEN-too kahn-SAH-doo", cw:"Tô morto!", coll:"toh MOHH-too!",
      note:"Literally “I'm dead!”. Also: “Tô quebrado” (I'm broken)." },
    { pt:"Que saudade!", en:"I miss it / you so much!", ipa:"[ki sawˈdadʒi]",
      full:"kee sow-DAH-djee!", cw:"Qui saudade!", coll:"kee sow-DAH-djee!",
      note:"Saudade = longing for someone or something. “Tô com saudade de você” = I miss you." },
    { pt:"Não aguento mais.", en:"I can't take it anymore.", ipa:"[nɐ̃w aˈɡwẽtu majʃ]",
      full:"nowng ah-GWEHN-too MAISH", cw:"Num aguento mais!", coll:"noong ah-GWEHN-too MAISH!",
      note:"For the heat, the traffic, your boss… Hear the “sh” at the end of mais." },
    { pt:"Eu acho que sim.", en:"I think so.", ipa:"[ew ˈaʃu ki ˈsĩ]",
      full:"EH-oo AH-shoo kee SEENG", cw:"Acho qui sim.", coll:"AH-shoo kee SEENG",
      note:"The opposite: “Acho que não”. The “eu” is usually dropped." }
  ],
  words:[
    { pt:"achar", en:"to think / to find", full:"ah-SHAHR", cw:"achá", coll:"ah-SHAH", alt:"",
      ex:"Acho que vai chover.", exEn:"I think it's going to rain." },
    { pt:"gostar", en:"to like", full:"goosh-TAHR", cw:"gostá", coll:"goosh-TAH", alt:"curtir (to enjoy)",
      ex:"Gosto muito do Rio.", exEn:"I really like Rio." },
    { pt:"saudade", en:"longing / missing someone", full:"sow-DAH-djee", cw:"", coll:"", alt:"",
      ex:"Tô com saudade de você.", exEn:"I miss you." },
    { pt:"feliz", en:"happy", full:"feh-LEESH", cw:"", coll:"", alt:"",
      ex:"Tô muito feliz aqui.", exEn:"I'm very happy here." },
    { pt:"cansado", en:"tired", full:"kahn-SAH-doo", cw:"", coll:"", alt:"morto, quebrado (slang)",
      ex:"Tô cansado demais.", exEn:"I'm way too tired." },
    { pt:"chato", en:"annoying / boring", full:"SHAH-too", cw:"", coll:"", alt:"mala (an annoying person)",
      ex:"Que chato, cara!", exEn:"That's annoying, man!" },
    { pt:"bonito", en:"pretty / beautiful", full:"boo-NEE-too", cw:"", coll:"", alt:"lindo, gato / gata (attractive person)",
      ex:"Que vista bonita!", exEn:"What a beautiful view!" },
    { pt:"sério", en:"serious / seriously", full:"SEH-ree-oo", cw:"", coll:"", alt:"",
      ex:"Sério? Não acredito!", exEn:"Seriously? I don't believe it!" },
    { pt:"verdade", en:"truth / true", full:"vehh-DAH-djee", cw:"", coll:"", alt:"",
      ex:"Fala a verdade!", exEn:"Tell the truth!" },
    { pt:"ótimo", en:"great", full:"OH-chee-moo", cw:"", coll:"", alt:"show, beleza",
      ex:"Ótimo, combinado!", exEn:"Great, it's a deal!" }
  ]
},
// ---------------------------------------------------------------- 8
{
  name:"Avançado 1", desc:"Rio slang you'll hear every day.",
  phrases:[
    { pt:"Caraca, que maneiro!", en:"Wow, that's so cool!", ipa:"[kaˈɾakɐ ki maˈnejɾu]",
      full:"kah-RAH-kah, kee mah-NAY-roo!", cw:"Caraca, qui manêro!", coll:"kah-RAH-kah, kee mah-NEH-roo!",
      note:"“Caraca” = wow, “maneiro” = cool. Both are very Rio." },
    { pt:"Estou bolado.", en:"I'm upset / annoyed.", ipa:"[iʃˈtow boˈladu]",
      full:"eesh-TOH boh-LAH-doo", cw:"Tô bolado.", coll:"toh boh-LAH-doo",
      note:"Rio slang. “Bolado com você” = upset with you. Can also mean impressed." },
    { pt:"Partiu praia!", en:"Let's hit the beach!", ipa:"[paʁˈtʃiw ˈpɾajɐ]",
      full:"pahh-CHEE-oo PRAI-ah!", cw:"Partiu praia!", coll:"pah-CHEW PRAI-ah!",
      note:"“Partiu + place” = let's go there now. Works with anything: “Partiu almoço!”." },
    { pt:"Vou dar um pulo lá.", en:"I'll pop over there.", ipa:"[vow daʁ ũ ˈpulu ˈla]",
      full:"VOH dahh oong POO-loo LAH", cw:"Vô dá um pulo lá.", coll:"voh DAHM POO-loo LAH",
      note:"Literally “I'll give a jump there”. “Dar um” glides into one sound." },
    { pt:"O que é isso!", en:"No way! / Don't mention it!", ipa:"[u ki ˈɛ ˈisu]",
      full:"oo kee EH EE-soo!", cw:"Qué isso!", coll:"KEH EE-soo!",
      note:"Reaction to surprise, or a modest reply when someone thanks or compliments you." }
  ],
  words:[
    { pt:"maneiro", en:"cool", full:"mah-NAY-roo", cw:"manêro", coll:"mah-NEH-roo", alt:"irado, show, bacana",
      ex:"Teu tênis é maneiro!", exEn:"Your sneakers are cool!" },
    { pt:"bolado", en:"annoyed / upset", full:"boh-LAH-doo", cw:"", coll:"", alt:"puto (vulgar)",
      ex:"Ele ficou bolado comigo.", exEn:"He got upset with me." },
    { pt:"caraca", en:"wow!", full:"kah-RAH-kah", cw:"", coll:"", alt:"caramba, nossa",
      ex:"Caraca, olha o tamanho dessa onda!", exEn:"Wow, look at the size of that wave!" },
    { pt:"mané", en:"fool / idiot", full:"mah-NEH", cw:"", coll:"", alt:"otário, bobão",
      ex:"Para de ser mané!", exEn:"Stop being an idiot!" },
    { pt:"parada", en:"thing / stuff", full:"pah-RAH-dah", cw:"", coll:"", alt:"coisa, bagulho",
      ex:"Que parada é essa?", exEn:"What is this thing?" },
    { pt:"sinistro", en:"insane (good or bad)", full:"see-NEESH-troo", cw:"", coll:"", alt:"",
      ex:"O show foi sinistro!", exEn:"The show was insane!" },
    { pt:"irado", en:"awesome", full:"ee-RAH-doo", cw:"", coll:"", alt:"maneiro, show",
      ex:"Esse lugar é irado!", exEn:"This place is awesome!" },
    { pt:"vacilar", en:"to mess up / let someone down", full:"vah-see-LAHR", cw:"vacilá", coll:"vah-see-LAH", alt:"",
      ex:"Pô, tu vacilou comigo.", exEn:"Man, you let me down." },
    { pt:"zoar", en:"to tease / mess around", full:"zoh-AHR", cw:"zoá", coll:"zoh-AH", alt:"",
      ex:"Tô só zoando contigo.", exEn:"I'm just messing with you." },
    { pt:"galera", en:"the crowd / the gang", full:"gah-LEH-rah", cw:"", coll:"", alt:"pessoal",
      ex:"A galera vai pro bar depois.", exEn:"The gang's going to the bar later." }
  ]
},
// ---------------------------------------------------------------- 9
{
  name:"Avançado 2", desc:"Talk like a local.",
  phrases:[
    { pt:"Eu não estou nem aí.", en:"I don't care at all.", ipa:"[ew nɐ̃w iʃˈtow nẽj aˈi]",
      full:"EH-oo nowng eesh-TOH nayng ah-EE", cw:"Tô nem aí!", coll:"toh nayng ah-EE!",
      note:"The “não” disappears completely. Can sound rude, so watch your tone." },
    { pt:"Falou, até mais!", en:"Later! / Bye!", ipa:"[faˈlow aˈtɛ majʃ]",
      full:"fah-LOH, ah-TEH MAISH!", cw:"Falou!", coll:"fah-LOH!",
      note:"Literally “(you) said”. The standard casual goodbye between friends." },
    { pt:"Eu vou embora agora.", en:"I'm heading off now.", ipa:"[ew vow ẽˈbɔɾɐ aˈɡɔɾɐ]",
      full:"EH-oo VOH ehm-BOH-rah ah-GOH-rah", cw:"Vou nessa!", coll:"voh NEH-sah!",
      note:"“Vou nessa” = I'm out. Often followed by “Falou!”." },
    { pt:"Você está entendendo?", en:"You know? / Get it?", ipa:"[voˈse iʃˈta ẽtẽˈdẽdu]",
      full:"voh-SEH eesh-TAH een-tehn-DEHN-doo?", cw:"Tá ligado?", coll:"tah lee-GAH-doo?",
      note:"“Ligado” = switched on. Tagged onto sentences like “you know?”." },
    { pt:"Está muito quente.", en:"It's really hot.", ipa:"[iʃˈta ˈmũjtu ˈkẽtʃi]",
      full:"eesh-TAH MWEEN-too KEHN-chee", cw:"Tá um calor do cão!", coll:"tah oong kah-LOH doo KOWNG!",
      note:"Literally “a dog's heat” (the devil's heat). Rio summer in one sentence." }
  ],
  words:[
    { pt:"pô", en:"man! / come on!", full:"POH", cw:"", coll:"", alt:"",
      ex:"Pô, cara, sério?", exEn:"Come on, man, seriously?" },
    { pt:"mermão", en:"bro", full:"mehh-MOWNG", cw:"", coll:"", alt:"cara, paizão, parceiro, brother",
      ex:"Fala, mermão!", exEn:"What's up, bro!" },
    { pt:"coé", en:"what's up (from “qual é”)", full:"koh-EH", cw:"", coll:"", alt:"e aí, fala aí",
      ex:"Coé, mermão, tudo certo?", exEn:"What's up, bro, all good?" },
    { pt:"valeu", en:"thanks / cheers", full:"vah-LEW", cw:"", coll:"", alt:"obrigado (neutral)",
      ex:"Valeu pela ajuda!", exEn:"Thanks for the help!" },
    { pt:"de boa", en:"chill / no worries", full:"djee BOH-ah", cw:"", coll:"", alt:"tranquilo, suave",
      ex:"Tô de boa hoje.", exEn:"I'm just chilling today." },
    { pt:"ligado", en:"aware / in the know", full:"lee-GAH-doo", cw:"", coll:"", alt:"",
      ex:"Tá ligado no que eu tô falando?", exEn:"You get what I'm saying?" },
    { pt:"bagulho", en:"thing / stuff", full:"bah-GOO-lyoo", cw:"", coll:"", alt:"parada, treco",
      ex:"Que bagulho é esse?", exEn:"What's this thing?" },
    { pt:"treta", en:"fight / drama", full:"TREH-tah", cw:"", coll:"", alt:"confusão",
      ex:"Deu treta no bar ontem.", exEn:"There was drama at the bar yesterday." },
    { pt:"rolê", en:"outing / hangout", full:"hoh-LEH", cw:"", coll:"", alt:"passeio",
      ex:"Bora dar um rolê na orla?", exEn:"Shall we take a stroll along the beachfront?" },
    { pt:"biscoito", en:"cookie (Rio word)", full:"beesh-KOY-too", cw:"", coll:"", alt:"bolacha (São Paulo word)",
      ex:"Biscoito Globo na praia é tradição.", exEn:"Globo biscuits at the beach are a tradition." }
  ]
}
];

// =====================================================================
// PALAVRÕES (swear words). lvl: 1 = mild, 2 = medium, 3 = strong
// =====================================================================
export const SWEARS = [
  { pt:"pô", en:"damn / man!", lvl:1, full:"POH",
    ex:"Pô, que saco!", exEn:"Damn, what a drag!", note:"Softened “porra”. Fine almost anywhere." },
  { pt:"droga", en:"damn it / crap", lvl:1, full:"DROH-gah",
    ex:"Droga, perdi o ônibus!", exEn:"Damn, I missed the bus!", note:"Safe to say in front of anyone." },
  { pt:"que saco", en:"what a pain", lvl:1, full:"kee SAH-koo",
    ex:"Que saco, essa fila!", exEn:"This line is such a pain!", note:"Literally “what a sack”. Very common." },
  { pt:"caramba", en:"wow / damn", lvl:1, full:"kah-RAHM-bah",
    ex:"Caramba, que susto!", exEn:"Damn, you scared me!", note:"Polite version of “caralho”." },
  { pt:"cacete", en:"hell / damn", lvl:2, full:"kah-SEH-chee",
    ex:"Cacete, tá muito caro!", exEn:"Hell, that's way too expensive!", note:"Also used as intensifier: “bom pra cacete” = damn good." },
  { pt:"merda", en:"shit", lvl:2, full:"MEHH-dah",
    ex:"Deu merda.", exEn:"It all went to shit.", note:"“Que merda!” = what a mess." },
  { pt:"bosta", en:"crap", lvl:2, full:"BOSH-tah",
    ex:"Esse filme é uma bosta.", exEn:"This movie is crap.", note:"" },
  { pt:"babaca", en:"jerk / idiot", lvl:2, full:"bah-BAH-kah",
    ex:"Que cara babaca!", exEn:"What a jerk!", note:"" },
  { pt:"otário", en:"sucker / idiot", lvl:2, full:"oh-TAH-ree-oo",
    ex:"Não sou otário, não.", exEn:"I'm no sucker.", note:"Someone who's easily fooled." },
  { pt:"porra", en:"fuck / damn", lvl:3, full:"POH-hah",
    ex:"Porra, mermão, tu demorou!", exEn:"Fuck, bro, you took forever!", note:"Cariocas use it constantly, almost as punctuation. Still not for your boss." },
  { pt:"caralho", en:"fuck! / fucking (intensifier)", lvl:3, full:"kah-RAH-lyoo",
    ex:"É bom pra caralho!", exEn:"It's fucking good!", note:"Can express surprise, anger or admiration." },
  { pt:"puta que pariu", en:"holy shit / fuck me", lvl:3, full:"POO-tah kee pah-ree-OO",
    ex:"Puta que pariu, que calor!", exEn:"Holy shit, it's hot!", note:"Written as “PQP” in texts." },
  { pt:"foda-se", en:"fuck it / who cares", lvl:3, full:"FOH-dah-see",
    ex:"Foda-se, vou assim mesmo.", exEn:"Fuck it, I'm going like this.", note:"" },
  { pt:"vai se foder", en:"fuck off", lvl:3, full:"VAI see foo-DEH",
    ex:"Vai se foder, cara!", exEn:"Fuck off, man!", note:"Only jokingly with close friends, or in a real fight." },
  { pt:"filho da puta", en:"son of a bitch", lvl:3, full:"FEE-lyoo dah POO-tah",
    ex:"Aquele filho da puta me roubou!", exEn:"That son of a bitch robbed me!", note:"" },
  { pt:"vai tomar no cu", en:"up yours / screw you", lvl:3, full:"VAI toh-MAH noo KOO",
    ex:"Ah, vai tomar no cu!", exEn:"Oh, screw you!", note:"Very strong. Heard a lot at football matches." }
];

// Text sent to the voice: removes apostrophes so it reads naturally.
export const speakable = s => String(s || "").replace(/[’']/g, "").trim();

// Everything the app may ask the AI voice to say (used by api/tts.js).
export function allSpeakable(){
  const out = [];
  for (const l of LEVELS){
    for (const p of l.phrases) out.push(p.pt, p.cw);
    for (const w of l.words) out.push(w.pt, w.cw, w.ex);
  }
  for (const s of SWEARS) out.push(s.pt, s.ex);
  return out.filter(Boolean).map(speakable);
}
