// ===== BUBBLE GENERATOR =====
function createBubbles(containerId) {
  const container = document.getElementById(containerId);
  const colors = [
    "#ff6ec7",
    "#60a5fa",
    "#a78bfa",
    "#34d399",
    "#ffe66d",
    "#ff6b35",
  ];

  for (let i = 0; i < 18; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    const size = Math.random() * 80 + 20;
    bubble.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      animation-duration: ${Math.random() * 10 + 8}s;
      animation-delay: ${Math.random() * 8}s;
    `;
    container.appendChild(bubble);
  }
}

createBubbles("bubbles1");
createBubbles("bubbles2");

let storedName = "";

// ===== PERSONALIZED COMPLIMENTS DATABASE =====
const personalizedCompliments = {
  avery: [
    "You are the strongest person I've ever known. I love you, Avi.",
    "DAMN she's 19 with a HOUSE? That is so impressive…",
    "You are sassy, blunt, and so funny. I love those things about you.",
  ],
  avi: [
    "You are the strongest person I've ever known. I love you, Avi.",
    "DAMN she's 19 with a HOUSE? That is so impressive…",
    "You are sassy, blunt, and so funny. I love those things about you.",
  ],
  angel: [
    "You are a SHOP-A-HOLIC, slow down ya crazy woman! Oh wait.. I get free clothes.. Nevermind 😉",
    "I love you very much, but I don't think you'll ever know HOW much.",
    "I love when people say I look like you because you are GORGEOUS!!!!",
    "A MILF CLICKED THE BUTTON",
  ],
  mom: [
    "You are a SHOP-A-HOLIC, slow down ya crazy woman! Oh wait.. I get free clothes.. Nevermind 😉",
    "I love you very much, but I don't think you'll ever know HOW much.",
    "I love when people say I look like you because you are GORGEOUS!!!!",
    "A MILF CLICKED THE BUTTON",
  ],
  cody: [
    "DAYUM, that's a nice piece of @$$",
    "You are the cutest, ever. I want to squish your cheeks",
    "Give me a kiss. Or die.",
    "I'm writing extra ones for you, BECAUSE UR THAT CUTE",
    "Orange sherbet GOT NOTHIN' ON U",
    "COLY-ROLY-POLY ! Y o U A r E aDoRaBlE.",
    "Cody, you see how things work and figure out how to make them better. That's a gift most people don't have.",
    "The world needs more people who actually do the thing instead of just talking about it. You do the thing.",
    "Cody, the way you show up every day knowing what you're dealing with is genuinely inspiring.",
    "You've never let the hard stuff make you hard. That takes real strength.",
    "Being around you just feels good. That's not nothing — that's everything.",
    "You're the kind of funny that makes people feel included, not excluded. Best kind.",
  ],
  codes: [
    "DAYUM, that's a nice piece of @$$",
    "You are the cutest, ever. I want to squish your cheeks",
    "Give me a kiss. Or die.",
    "I'm writing extra ones for you, BECAUSE UR THAT CUTE",
    "Orange sherbet GOT NOTHIN' ON U",
    "COLY-ROLY-POLY ! Y o U A r E aDoRaBlE.",
    "Cody, you see how things work and figure out how to make them better. That's a gift most people don't have.",
    "The world needs more people who actually do the thing instead of just talking about it. You do the thing.",
    "Cody, the way you show up every day knowing what you're dealing with is genuinely inspiring.",
    "You've never let the hard stuff make you hard. That takes real strength.",
    "Being around you just feels good. That's not nothing — that's everything.",
    "You're the kind of funny that makes people feel included, not excluded. Best kind.",
  ],
  alyssa: [
    "Avery & I agreed that you're the prettiest sister. ENJOY THAT TITLE hahah",
    "You are silly and unique - you should start a podcast or channel! MONAAAYY $$",
    "I'm blessed to have you as my sister.",
    "DANG GURL U A BADDIE",
    "You are ridiculously gorgeous… like whaaaattttt",
    "Avery & I love you SO much",
    "You are so much cooler than you think (*seriously!*)",
    "You are an absolute queen and deserve the world.",
  ],
  belle: [
    "Avery & I agreed that you're the prettiest sister. ENJOY THAT TITLE hahah",
    "You are silly and unique - you should start a podcast or channel! MONAAAYY $$",
    "I'm blessed to have you as my sister.",
    "DANG GURL U A BADDIE",
    "You are ridiculously gorgeous… like whaaaattttt",
    "Avery & I love you SO much",
    "You are so much cooler than you think (*seriously!*)",
    "You are an absolute queen and deserve the world.",
  ],
  sav: [
    "Your perspective on life is refreshing. Shiiitt, you make the BEST lemonade out of those lemons.",
    "But seriously. How are you so gorgeous?....",
    'I have never met anyone who reminds me of the word "sunshine". You light up so many lives.',
    "You are SO loved that you could do something really bad and I would STILL support. Run over someone? I'll call 911.",
    "Hey, do you know Sav? As in THE Savvy Sav? Omg ikr shes so cool",
    "You've got a friend in me\nIf you've got troubles, I've got 'em too\nThere isn't anything I wouldn't do for you\nWe stick together and can see it through… -Randy Newman, 1995",
    "True friends are like diamonds — bright, beautiful, valuable, and always in style. – Nicole Richie",
    "You are the strongest woman I've ever met",
    "Wait… are you like, an angel or something?",
    "O M G U R SO KOOL",
    "You truly change the lives around you. The light in the world's darkness.",
    "I would choose you as my friend in any life",
    "Sav is the kind of person you meet and immediately think — oh, so that's what genuine looks like.",
    "Sav loves so loudly and so colorfully that being around her makes the whole world feel brighter.",
    "Savvy Sav shows up for people in ways most people don't even think to. That's rare and that's everything.",
    "Sav is the friend who makes you feel seen, heard, and hyped up all at the same time.",
    "Sav loves extra and lives extra and that's not too much — that's exactly enough.",
    "She's raising Phoenix and loving David and caring for her whole little world with so much heart it's honestly overwhelming in the best way.",
    "Sav has every quality you could ever want in a person and she doesn't even seem to know it. That's the most Sav thing about her.",
    "Phoenix is growing up watching someone who leads with kindness every single day. That's the greatest gift a parent can give.",
  ],
  savvy: [
    "Your perspective on life is refreshing. Shiiitt, you make the BEST lemonade out of those lemons.",
    "But seriously. How are you so gorgeous?....",
    'I have never met anyone who reminds me of the word "sunshine". You light up so many lives.',
    "You are SO loved that you could do something really bad and I would STILL support. Run over someone? I'll call 911.",
    "Hey, do you know Sav? As in THE Savvy Sav? Omg ikr shes so cool",
    "You've got a friend in me\nIf you've got troubles, I've got 'em too\nThere isn't anything I wouldn't do for you\nWe stick together and can see it through… -Randy Newman, 1995",
    "True friends are like diamonds — bright, beautiful, valuable, and always in style. – Nicole Richie",
    "You are the strongest woman I've ever met",
    "Wait… are you like, an angel or something?",
    "O M G U R SO KOOL",
    "You truly change the lives around you. The light in the world's darkness.",
    "I would choose you as my friend in any life",
    "Sav is the kind of person you meet and immediately think — oh, so that's what genuine looks like.",
    "Sav loves so loudly and so colorfully that being around her makes the whole world feel brighter.",
    "Savvy Sav shows up for people in ways most people don't even think to. That's rare and that's everything.",
    "Sav is the friend who makes you feel seen, heard, and hyped up all at the same time.",
    "Sav loves extra and lives extra and that's not too much — that's exactly enough.",
    "She's raising Phoenix and loving David and caring for her whole little world with so much heart it's honestly overwhelming in the best way.",
    "Sav has every quality you could ever want in a person and she doesn't even seem to know it. That's the most Sav thing about her.",
    "Phoenix is growing up watching someone who leads with kindness every single day. That's the greatest gift a parent can give.",
  ],
  savanna: [
    "Your perspective on life is refreshing. Shiiitt, you make the BEST lemonade out of those lemons.",
    "But seriously. How are you so gorgeous?....",
    'I have never met anyone who reminds me of the word "sunshine". You light up so many lives.',
    "You are SO loved that you could do something really bad and I would STILL support. Run over someone? I'll call 911.",
    "Hey, do you know Sav? As in THE Savvy Sav? Omg ikr shes so cool",
    "You've got a friend in me\nIf you've got troubles, I've got 'em too\nThere isn't anything I wouldn't do for you\nWe stick together and can see it through… -Randy Newman, 1995",
    "True friends are like diamonds — bright, beautiful, valuable, and always in style. – Nicole Richie",
    "You are the strongest woman I've ever met",
    "Wait… are you like, an angel or something?",
    "O M G U R SO KOOL",
    "You truly change the lives around you. The light in the world's darkness.",
    "I would choose you as my friend in any life",
    "Sav is the kind of person you meet and immediately think — oh, so that's what genuine looks like.",
    "Sav loves so loudly and so colorfully that being around her makes the whole world feel brighter.",
    "Savvy Sav shows up for people in ways most people don't even think to. That's rare and that's everything.",
    "Sav is the friend who makes you feel seen, heard, and hyped up all at the same time.",
    "Sav loves extra and lives extra and that's not too much — that's exactly enough.",
    "She's raising Phoenix and loving David and caring for her whole little world with so much heart it's honestly overwhelming in the best way.",
    "Sav has every quality you could ever want in a person and she doesn't even seem to know it. That's the most Sav thing about her.",
    "Phoenix is growing up watching someone who leads with kindness every single day. That's the greatest gift a parent can give.",
  ],
  demond: [
    "DAMN you're fine",
    "Are you a fireman? If so, MY HOUSE IS ON FIRE!",
    "Serving looks, no delivery fee.",
    "You are a walking masterpiece. *catches breath*",
  ],
  carrie: [
    "Carrie brings the kind of energy that makes people feel lighter just by being in the room.",
    "If sunshine became a therapist, it would probably look a lot like Carrie.",
    "She has that rare mix of wisdom and humor that makes tough conversations feel safe.",
    "Carrie somehow makes psychology feel less like a science class and more like a hopeful adventure.",
    "Her kindness isn't just a trait-it's basically her superpower.",
    "She's the kind of person who remembers the little things that make people feel seen.",
    "Her charisma could probably convince even the most stubborn brain to try a new perspective.",
    "Carrie gives off strong everything is going to be okay energy.",
    "Blonde hair, bright spirit, and a mind full of psychology wisdom-quite the combination.",
    "Her positivity feels less like motivation and more like a warm cup of tea for the soul.",
    "Carrie has the special talent of turning deep conversations into moments of growth and encouragement.",
    "If encouragement were an Olympic sport, Carrie would have multiple gold medals.",
    "She reminds people that self-understanding can actually be fun.",
    "Carrie's warmth makes people feel comfortable being their real selves.",
    "Her joy is contagious in the best possible way.",
    "The world definitely benefits from having a therapist who leads with so much heart.",
    "Smart, funny, kind, and basically a walking ray of sunshine.",
  ],
  stephen: [
    "You're my FaVoRiTe Psycho Murdering Bug Buddy",
    "DANG SHAWTY, you ARE the gif master !!!!!!",
    "I ain't never seen such beautiful blueberry nipples",
    "You are amazing in so many ways…. I adore you!",
    "Thank you…. For being you.",
    "You are such a KOOL KID!",
    "That brain of yours… gimme",
    "Living with you meant always having someone who actually knew what they were talking about. Rare.",
    "You're the kind of person who makes a house feel like a home without even trying.",
    "Stephen, you have this quiet way of making everyone around you feel smarter and more interesting.",
    "I shall take thee as my spouse in the year of our Lord 2049, should we both remain unbetrothed.",
  ],
  snewby: [
    "You're my FaVoRiTe Psycho Murdering Bug Buddy",
    "DANG SHAWTY, you ARE the gif master !!!!!!",
    "I ain't never seen such beautiful blueberry nipples",
    "You are amazing in so many ways…. I adore you!",
    "Thank you…. For being you.",
    "You are such a KOOL KID!",
    "That brain of yours… gimme",
    "Living with you meant always having someone who actually knew what they were talking about. Rare.",
    "You're the kind of person who makes a house feel like a home without even trying.",
    "Stephen, you have this quiet way of making everyone around you feel smarter and more interesting.",
    "I shall take thee as my spouse in the year of our Lord 2049, should we both remain unbetrothed.",
  ],
  olga: [
    "Running your own company takes serious courage — you've got it.",
    "Olga, you built something most people only dream about.",
    "Not everyone can code AND run a business. You do both.",
    "The drive it takes to get where you are is genuinely inspiring.",
    "You didn't wait for someone to give you a seat — you built the table.",
    "You make hard things look effortless.",
    "You're proof that vision and hard work actually work.",
    "Whatever room you walk into, you clearly belong there.",
  ],
  shawn: [
    "Shawn, you don't just use technology — you bend it to your will.",
    "You see a problem and you've already built the solution before most people finish the sentence.",
    "You have the rare ability to see what's possible before anyone else does.",
    "Most people use AI. You build the AI. That's a different level.",
    "You think in systems while everyone else is still thinking in steps.",
    "The agents you build today will outlast any single product. That's legacy work.",
  ],
  max: [
    "The patterns? Immaculate. The colors? Unapologetic. Max woke up like this — and shipped three apps before breakfast.",
    "Max didn't walk into the room. They arrived. Hair reinvented. Outfit intentional. Energy: fully debugged and flawlessly deployed. 🌈",
    "Why pick one hair color when you can pick ALL of them? Max applied that same energy to teaching — every concept, every student, every time. ✨",
    "Ask the same question five times? Max explains it six. They don't just meet you where you are — they decorate the spot. 🏳️‍🌈💖",
    "New hair. New era. New lesson dropping. Max proves you can reinvent yourself daily and still be the most reliable person in the room.",
  ],
};

// ===== GENERAL COMPLIMENTS (Fallback) =====
const generalCompliments = [
  "You light up the room",
  "You're an awesome friend",
  "You're a gift to those around you",
  "You're a smart cookie",
  "You are awesome",
  "You have impeccable manners",
  "How did I get so lucky to know you?",
  "You're more helpful than you realize",
  "You're like sunshine on a rainy day",
  "You deserve a hug right now",
  "You should be proud of yourself",
  "You're a joy to be around",
  "You make people smile",
  "You bring out the best in other people",
  "You're a great listener",
];

// ===== COMPLIMENT GENERATOR =====
let complimentIndex = 0;
let lastComplimentList = null;

function showInComplimentBox(text) {
  const box = document.getElementById("complimentBox");
  const wrap = document.getElementById("complimentWrap");
  if (!box || !wrap) return;

  box.textContent = text;
  wrap.classList.add("visible");
}

function generateCompliment() {
  const complimentsToUse = personalizedCompliments[storedName] || generalCompliments;

  if (complimentsToUse !== lastComplimentList) {
    complimentIndex = 0;
    lastComplimentList = complimentsToUse;
  }

  lastGeneratedCompliment = complimentsToUse[complimentIndex % complimentsToUse.length];
  complimentIndex++;

  showInComplimentBox(lastGeneratedCompliment);
}

let lastGeneratedCompliment = "";

// ===== PERSONALIZED JOKES DATABASE =====
const personalizedJokes = {
  avery: [
    "Avery's filter is set to 'off' and honestly it's everyone else's problem.",
    "Avery is the person who makes you laugh so hard you forget she just roasted you.",
    "Avery in a meeting: professionally charming. Avery at home: aggressively building a Lego set at midnight for no reason.",
    "Avery is in sales which means she could convince you the sky is green and you'd thank her for it.",
    "Avery has a fish, 3 cats, wants a lizard, and owns a house. She is one bad day away from a full wildlife sanctuary.",
    "Avery creating beautiful art while a cat knocks her supplies off the table one by one. Every single time.",
    "She bought a house and immediately filled it with dependents. The cats pay no rent. The fish contributes nothing.",
    "Avery's house tour: here's the kitchen, here's the cat room, here's the art room that the cats also use, here's the fish who lives in fear, and over here is where the lizard is going to go once I convince myself it's a good idea.",
    "The cats aren't even fully employed yet and she's already hiring a lizard.",
    "Three cats. A fish. A lizard on the way. At what point does she just open a zoo and charge admission.",
    "Avery's cats have their own room and her guests sleep on the couch. Priorities are clear.",
    "She looked at her three cats and a fish and thought 'you know what this needs? A reptile.'",
    "Avery could sell a space heater to someone in Arizona and make them feel good about it.",
    "Nobody checked on the middle child and she came back a homeowner. Lesson learned.",
    "Avery in sales means she's professionally persuasive. In real life that just means she always wins arguments.",
    "Avery was the middle child which explains both the sassiness AND the overachieving.",
    "The middle sister energy is strong with this one — unbothered, unstoppable, and slightly passive aggressive.",
    "Avery decorates with rainbows and Legos which means her house looks amazing and also your feet are not safe.",
    "She built her life the same way she builds Legos — one piece at a time, no instructions, somehow perfect.",
    "She's the funniest person in the room and she absolutely knows it.",
  ],
  avi: [
    "Avery's filter is set to 'off' and honestly it's everyone else's problem.",
    "Avery is the person who makes you laugh so hard you forget she just roasted you.",
    "Avery in a meeting: professionally charming. Avery at home: aggressively building a Lego set at midnight for no reason.",
    "Avery is in sales which means she could convince you the sky is green and you'd thank her for it.",
    "Avery has a fish, 3 cats, wants a lizard, and owns a house. She is one bad day away from a full wildlife sanctuary.",
    "Avery creating beautiful art while a cat knocks her supplies off the table one by one. Every single time.",
    "She bought a house and immediately filled it with dependents. The cats pay no rent. The fish contributes nothing.",
    "Avery's house tour: here's the kitchen, here's the cat room, here's the art room that the cats also use, here's the fish who lives in fear, and over here is where the lizard is going to go once I convince myself it's a good idea.",
    "The cats aren't even fully employed yet and she's already hiring a lizard.",
    "Three cats. A fish. A lizard on the way. At what point does she just open a zoo and charge admission.",
    "Avery's cats have their own room and her guests sleep on the couch. Priorities are clear.",
    "She looked at her three cats and a fish and thought 'you know what this needs? A reptile.'",
    "Avery could sell a space heater to someone in Arizona and make them feel good about it.",
    "Nobody checked on the middle child and she came back a homeowner. Lesson learned.",
    "Avery in sales means she's professionally persuasive. In real life that just means she always wins arguments.",
    "Avery was the middle child which explains both the sassiness AND the overachieving.",
    "The middle sister energy is strong with this one — unbothered, unstoppable, and slightly passive aggressive.",
    "Avery decorates with rainbows and Legos which means her house looks amazing and also your feet are not safe.",
    "She built her life the same way she builds Legos — one piece at a time, no instructions, somehow perfect.",
    "She's the funniest person in the room and she absolutely knows it.",
  ],
  angel: [
    "Angel's love language is 'add to cart.'",
    "Angel's Amazon driver knows her by name. And her dog's name.",
    "Her credit card has separation anxiety when it leaves her hand.",
    "Angel's food pyramid has wine as its own group.",
    "Angel doesn't have a shopping problem. She has a storage problem.",
    "Angel's stress relief plan: kids to bed, wine in hand, nobody talk to me.",
    "A glass of wine a day keeps Angel from making the news.",
    "Angel is professionally trained to stay calm. Her kids are determined to undo that.",
    "Angel's Yorkie has a better wardrobe than her kids. And probably a better budget.",
    "Angel spent $80 on a Yorkie Halloween costume and her kids got trash bags with holes cut out.",
  ],
  mom: [
    "Angel's love language is 'add to cart.'",
    "Angel's Amazon driver knows her by name. And her dog's name.",
    "Her credit card has separation anxiety when it leaves her hand.",
    "Angel's food pyramid has wine as its own group.",
    "Angel doesn't have a shopping problem. She has a storage problem.",
    "Angel's stress relief plan: kids to bed, wine in hand, nobody talk to me.",
    "A glass of wine a day keeps Angel from making the news.",
    "Angel is professionally trained to stay calm. Her kids are determined to undo that.",
    "Angel's Yorkie has a better wardrobe than her kids. And probably a better budget.",
    "Angel spent $80 on a Yorkie Halloween costume and her kids got trash bags with holes cut out.",
  ],
  cody: [
    "Cody's body said 'no gluten, no sugar, yes weed' and honestly that's a lifestyle.",
    "Cody reads every food label like it personally wronged him. Because it might.",
    "There are TWO of him. The world was not consulted on this decision.",
    "Cody's relationship with food is basically: does this want to kill me? Cool, moving on.",
    "Cody loves cats because they're also judgy, do whatever they want, and have no explanation for their behavior. He found his people.",
    "Imagine being Cody's twin and watching him read a menu for 45 minutes at every restaurant.",
    "Cody has done more research on strains than he has on gluten free recipes and we respect the priorities.",
    "Teacher mom raised him which explains why he knows the rules and chooses chaos anyway.",
    "Cody stoned at the grocery store reading ingredients is the most focused he's ever been in his life.",
    "Cody and cats have the same energy: unbothered, slightly chaotic, and napping when possible.",
    "Cody is 30 going on 11 and nobody is doing anything about it.",
    "His mom taught kids all day and came home to Cody. She deserves a pension and a trophy.",
    "He has the medical history of a 60 year old and the maturity of a golden retriever puppy.",
    "His immune system said no. He said hold my gluten free beer.",
  ],
  codes: [
    "Cody's body said 'no gluten, no sugar, yes weed' and honestly that's a lifestyle.",
    "Cody reads every food label like it personally wronged him. Because it might.",
    "There are TWO of him. The world was not consulted on this decision.",
    "Cody's relationship with food is basically: does this want to kill me? Cool, moving on.",
    "Cody loves cats because they're also judgy, do whatever they want, and have no explanation for their behavior. He found his people.",
    "Imagine being Cody's twin and watching him read a menu for 45 minutes at every restaurant.",
    "Cody has done more research on strains than he has on gluten free recipes and we respect the priorities.",
    "Teacher mom raised him which explains why he knows the rules and chooses chaos anyway.",
    "Cody stoned at the grocery store reading ingredients is the most focused he's ever been in his life.",
    "Cody and cats have the same energy: unbothered, slightly chaotic, and napping when possible.",
    "Cody is 30 going on 11 and nobody is doing anything about it.",
    "His mom taught kids all day and came home to Cody. She deserves a pension and a trophy.",
    "He has the medical history of a 60 year old and the maturity of a golden retriever puppy.",
    "His immune system said no. He said hold my gluten free beer.",
  ],
  alyssa: [
    "You're the prettiest sister and I will NOT be taking questions.",
    "You should start a podcast — people need to hear this chaos.",
    "You're so cool, ice cubes are taking notes.",
  ],
  belle: [
    "You're the prettiest sister and I will NOT be taking questions.",
    "You should start a podcast — people need to hear this chaos.",
    "You're so cool, ice cubes are taking notes.",
  ],
  sav: [
    "If you were a candle, you'd be the expensive one nobody wants to light.",
    "You make lemonade? Girl, you make the WHOLE lemonade stand.",
    "Even sunshine called and said 'tone it down, Sav.'",
    "Sav said 'favorite color pink' and then proceeded to make her entire personality match. Committed. Unhinged. Iconic.",
    "The dogs and the cat have a meeting every morning about how to be the most extra in the house. Sav trained them well.",
    "Savvy Sav does the most on purpose and has zero apologies about it. Honestly a power move.",
    "She's into hippie things and colorful everything and arts and crafts — her house looks like a Pinterest board had a baby with a farmer's market.",
    "Savvy Sav's love language is doing the absolute most and making it look effortless and we are ALL benefiting from it.",
    "Sav at the craft store: enters for one thing, leaves 45 minutes later with $80 of supplies for a project she just invented in aisle 4.",
    "Savvy Sav loves sunflowers so much that somewhere a sunflower feels personally known and appreciated.",
    "David living with Sav means David is surrounded by color, creativity, sunflowers, animals, and pure chaotic love 24/7. He is the luckiest man alive and he knows it.",
    "She's extra by nature, extra by choice, and extra as a lifestyle. The rest of us are just trying to keep up.",
    "December 5th, 2025. 9:07 PM. Juicy-Gucci. Juicy-Couchie. Savvy Sav knows what she did and so do we. Iconic moment. Never forgotten. Framed in the hall of legends.",
  ],
  savvy: [
    "If you were a candle, you'd be the expensive one nobody wants to light.",
    "You make lemonade? Girl, you make the WHOLE lemonade stand.",
    "Even sunshine called and said 'tone it down, Sav.'",
    "Sav said 'favorite color pink' and then proceeded to make her entire personality match. Committed. Unhinged. Iconic.",
    "The dogs and the cat have a meeting every morning about how to be the most extra in the house. Sav trained them well.",
    "Savvy Sav does the most on purpose and has zero apologies about it. Honestly a power move.",
    "She's into hippie things and colorful everything and arts and crafts — her house looks like a Pinterest board had a baby with a farmer's market.",
    "Savvy Sav's love language is doing the absolute most and making it look effortless and we are ALL benefiting from it.",
    "Sav at the craft store: enters for one thing, leaves 45 minutes later with $80 of supplies for a project she just invented in aisle 4.",
    "Savvy Sav loves sunflowers so much that somewhere a sunflower feels personally known and appreciated.",
    "David living with Sav means David is surrounded by color, creativity, sunflowers, animals, and pure chaotic love 24/7. He is the luckiest man alive and he knows it.",
    "She's extra by nature, extra by choice, and extra as a lifestyle. The rest of us are just trying to keep up.",
    "December 5th, 2025. 9:07 PM. Juicy-Gucci. Juicy-Couchie. Savvy Sav knows what she did and so do we. Iconic moment. Never forgotten. Framed in the hall of legends.",
  ],
  savanna: [
    "If you were a candle, you'd be the expensive one nobody wants to light.",
    "You make lemonade? Girl, you make the WHOLE lemonade stand.",
    "Even sunshine called and said 'tone it down, Sav.'",
    "Sav said 'favorite color pink' and then proceeded to make her entire personality match. Committed. Unhinged. Iconic.",
    "The dogs and the cat have a meeting every morning about how to be the most extra in the house. Sav trained them well.",
    "Savvy Sav does the most on purpose and has zero apologies about it. Honestly a power move.",
    "She's into hippie things and colorful everything and arts and crafts — her house looks like a Pinterest board had a baby with a farmer's market.",
    "Savvy Sav's love language is doing the absolute most and making it look effortless and we are ALL benefiting from it.",
    "Sav at the craft store: enters for one thing, leaves 45 minutes later with $80 of supplies for a project she just invented in aisle 4.",
    "Savvy Sav loves sunflowers so much that somewhere a sunflower feels personally known and appreciated.",
    "David living with Sav means David is surrounded by color, creativity, sunflowers, animals, and pure chaotic love 24/7. He is the luckiest man alive and he knows it.",
    "She's extra by nature, extra by choice, and extra as a lifestyle. The rest of us are just trying to keep up.",
    "December 5th, 2025. 9:07 PM. Juicy-Gucci. Juicy-Couchie. Savvy Sav knows what she did and so do we. Iconic moment. Never forgotten. Framed in the hall of legends.",
  ],
  carrie: [
    "Somewhere at home there's a cat who absolutely knows it lives with a world-class human.",
    "Carrie probably explains emotional breakthroughs to her cat like a proud professor.",
    "Her cat has likely heard more psychology insights than most college students.",
    "Carrie probably can't turn off therapist mode... even the cat might get asked, and how did that make you feel?",
    "If charisma were a measurable therapy tool, Carrie would break the scale.",
    "Her laugh is the kind that spreads through the room like a happy chain reaction.",
    "Carrie probably sees a plot twist in every TV show and says, Ah yes, unresolved childhood dynamics.",
    "Her cat is probably the most emotionally self-aware cat in the neighborhood.",
    "If optimism were sunshine, Carrie would be a full summer day.",
    "Somewhere there's a couch that has witnessed both deep breakthroughs and a lot of laughter thanks to Carrie.",
    "My therapist told me to embrace my mistakes... so I gave her a hug.",
    "I told my therapist I have trouble opening up. She said, That's a good place to start.",
    "I asked my therapist if I'm indecisive. She said, Well... how do you feel about that?",
    "Therapy is basically paying someone to say, and how did that make you feel? in 47 different ways.",
    "I told my therapist I procrastinate a lot. She said we'd work on it... eventually.",
    "I told my therapist I have a fear of commitment. She said we should meet weekly forever to talk about it.",
    "I asked my therapist if I overthink things. She said, Why do you think that? and now we've been stuck there for 30 minutes.",
    "My therapist said I should practice positive self-talk. So now when I mess up I say, Well, that was a learning opportunity... probably.",
    "I told my therapist I feel like nobody listens to me. She said, That's interesting... please continue.",
    "Therapy is the only place where saying I had a breakthrough means you cried for 45 minutes and now feel slightly better.",
    "My therapist says I need stronger boundaries. So now when my problems show up, I politely ask them to schedule an appointment.",
    "I tried journaling my feelings. Now my notebook needs therapy.",
    "My therapist asked me to describe my emotions. I said, Imagine a browser with 47 tabs open and music playing somewhere.",
    "I told my therapist I worry too much about what people think. She said, Most people are too busy worrying about what you think.",
    "My therapist says awareness is the first step. Unfortunately, my problems brought snacks and decided to stay awhile.",
    "Therapy: where you spend half the session explaining your week and the other half realizing your childhood started it.",
    "I asked my therapist how to stop overanalyzing things. She said, Let's unpack that.",
    "I told my therapist I'm emotionally exhausted. She said, That tracks.",
    "Therapy is basically emotional detective work, except the suspect is usually your past self.",
  ],
  stephen: [
    "You're a psycho murdering bug buddy and I mean that with LOVE.",
    "The gif master has entered the chat. Everyone else, go home.",
    "Your brain is so big it needs its own zip code.",
    "Stephen graduated from Carnegie Mellon, drives a Tesla, and plays D&D on weekends. He is simultaneously the most and least intimidating person alive.",
    "Went to one of the best computer science schools in the country and his most-used app is probably a dice roller.",
    "Stephen used to play music but gave it up, presumably because the lute wasn't meta enough.",
    "He works in software by day and builds medieval dynasties by night. His work-life balance is technically a different century.",
    "Lived with him for years and can confirm: the tea collection is out of control and the allergy list is longer than the One Ring inscription.",
  ],
  snewby: [
    "You're a psycho murdering bug buddy and I mean that with LOVE.",
    "The gif master has entered the chat. Everyone else, go home.",
    "Your brain is so big it needs its own zip code.",
    "Stephen graduated from Carnegie Mellon, drives a Tesla, and plays D&D on weekends. He is simultaneously the most and least intimidating person alive.",
    "Went to one of the best computer science schools in the country and his most-used app is probably a dice roller.",
    "Stephen used to play music but gave it up, presumably because the lute wasn't meta enough.",
    "He works in software by day and builds medieval dynasties by night. His work-life balance is technically a different century.",
    "Lived with him for years and can confirm: the tea collection is out of control and the allergy list is longer than the One Ring inscription.",
  ],
  demond: [
    "You're so fine, even mirrors do a double take.",
    "The fire department called — they said YOU'RE the fire.",
    "You don't serve looks, you serve entire BUFFETS.",
  ],
  max: [
    "A SQL query walks into a bar, walks up to two tables and asks... \"Can I join you?\"",
    "Why did the programmer quit their job? Because they didn't get arrays. (a raise)",
    "What do you call a programmer from Finland? Nerdic.",
    "Why do Java developers wear glasses? Because they don't C#.",
    "There are 10 types of people in the world: Those who understand binary, and those who don't.",
    "Why was the JavaScript developer sad? Because they didn't know how to null their feelings.",
    "A dentist drills your mouth for bugs. A programmer drills their code for the same thing. Neither finds them on the first try. 😂",
  ],
  shawn: [
    "A SQL query walks into a bar, walks up to two tables and asks... \"Can I join you?\"",
    "Why did the programmer quit their job? Because they didn't get arrays. (a raise)",
    "What do you call a programmer from Finland? Nerdic.",
    "Why do Java developers wear glasses? Because they don't C#.",
    "There are 10 types of people in the world: Those who understand binary, and those who don't.",
    "Why was the JavaScript developer sad? Because they didn't know how to null their feelings.",
    "A dentist drills your mouth for bugs. A programmer drills their code for the same thing. Neither finds them on the first try. 😂",
    "AI didn't choose Shawn. Shawn chose AI first. The bots just confirmed it. Smart bots. Excellent taste. 🤖",
    "Shawn never gets lost. They already trained a model on every wrong turn. The AI whispers: 'Recalculating... still Shawn.'",
    "Shawn's bots after training: 'We learned logic and reasoning.' Shawn: 'Good.' Bots: '...And your coffee order.' Shawn: 'Outstanding. You pass.' ✅",
  ],
};

const generalJokes = [
  "You're the reason the gene pool needs a lifeguard.",
  "If you were a vegetable, you'd be a CUTE-cumber.",
  "You're like a cloud — everything brightens up when you leave. JK, you're great.",
  "You're proof that even the universe plays favorites sometimes.",
  "You're so cool, penguins are taking notes.",
  "If being awesome was a job, you'd be a billionaire.",
  "You're not a snack, you're the whole meal deal.",
  "I'd share my fries with you. That's how much I like you.",
  "You're the WiFi signal everyone's been searching for.",
  "Plot twist: you were the main character all along.",
];

let laughIndex = 0;
let lastLaughList = null;

function generateLaugh() {
  const jokesToUse = personalizedJokes[storedName] || generalJokes;

  if (jokesToUse !== lastLaughList) {
    laughIndex = 0;
    lastLaughList = jokesToUse;
  }

  const joke = jokesToUse[laughIndex % jokesToUse.length];
  laughIndex++;

  showInComplimentBox(joke);
}

// ===== NAVIGATE: PAGE 1 → PAGE 2 =====
function goToPage2() {
  const name = document.getElementById("nameInput").value.trim();
  if (!name) {
    shakeInput();
    return;
  }

  storedName = name.toLowerCase();

  document.getElementById("loveLabel").textContent =
    "I'm so happy you're here!";

  document.getElementById("page1").classList.remove("active");
  const p2 = document.getElementById("page2");
  p2.classList.add("active");
}

// ===== SHAKE INPUT ANIMATION =====
function shakeInput() {
  const input = document.getElementById("nameInput");
  input.style.animation = "none";
  input.style.borderColor = "#ff4444";
  input.style.boxShadow = "0 0 20px rgba(255,68,68,0.5)";

  // Add shake via keyframes
  input.animate(
    [
      { transform: "translateX(0)" },
      { transform: "translateX(-10px)" },
      { transform: "translateX(10px)" },
      { transform: "translateX(-8px)" },
      { transform: "translateX(8px)" },
      { transform: "translateX(0)" },
    ],
    { duration: 400, easing: "ease-in-out" },
  );

  setTimeout(() => {
    input.style.borderColor = "";
    input.style.boxShadow = "";
  }, 1500);
}

// ===== NAVIGATE: PAGE 2 → PAGE 3 =====
function goToPage3() {
  const raw = document.getElementById("nameInput").value.trim();
  const displayName = raw || storedName;

  document.getElementById("bombText").textContent = displayName
    ? `Go Seize the Day, ${displayName}!`
    : "Go Seize the Day!";

  document.getElementById("page2").classList.remove("active");
  const p3 = document.getElementById("page3");
  p3.classList.add("active");

  startConfetti();
}

// ===== CONFETTI CANVAS (Page 3) =====
function startConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  const colors = [
    "#ff6ec7",
    "#ffe66d",
    "#60a5fa",
    "#34d399",
    "#a78bfa",
    "#ff6b35",
    "#fff",
  ];
  const pieces = [];

  for (let i = 0; i < 200; i++) {
    const burstAngle = Math.random() * Math.PI * 2;
    const burstSpeed = Math.random() * 12 + 4;
    pieces.push({
      x: cx,
      y: cy,
      vx: Math.cos(burstAngle) * burstSpeed,
      vy: Math.sin(burstAngle) * burstSpeed,
      size: Math.random() * 10 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      spin: Math.random() * 0.2 - 0.1,
      angle: Math.random() * Math.PI * 2,
      gravity: 0.04 + Math.random() * 0.02,
      friction: 0.985,
      shape: Math.random() > 0.5 ? "rect" : "circle",
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pieces.forEach((p) => {
      p.vx *= p.friction;
      p.vy *= p.friction;
      p.vy += p.gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.angle += p.spin;

      if (p.y > canvas.height + 20) {
        p.y = -20;
        p.x = Math.random() * canvas.width;
        p.vx = Math.random() * 2 - 1;
        p.vy = Math.random() * 1.5 + 0.5;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;

      if (p.shape === "rect") {
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.5);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    });

    requestAnimationFrame(draw);
  }

  draw();
}

// ===== RESTART =====
function restart() {
  document.getElementById("nameInput").value = "";
  document.getElementById("page3").classList.remove("active");
  document.getElementById("page1").classList.add("active");
}
