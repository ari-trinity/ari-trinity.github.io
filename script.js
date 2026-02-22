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
  ],
  codes: [
    "DAYUM, that's a nice piece of @$$",
    "You are the cutest, ever. I want to squish your cheeks",
    "Give me a kiss. Or die.",
    "I'm writing extra ones for you, BECAUSE UR THAT CUTE",
    "Orange sherbet GOT NOTHIN' ON U",
    "COLY-ROLY-POLY ! Y o U A r E aDoRaBlE.",
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
  ],
  demond: [
    "DAMN you're fine",
    "Are you a fireman? If so, MY HOUSE IS ON FIRE!",
    "Serving looks, no delivery fee.",
    "You are a walking masterpiece. *catches breath*",
  ],
  stephen: [
    "You're my FaVoRiTe Psycho Murdering Bug Buddy",
    "DANG SHAWTY, you ARE the gif master !!!!!!",
    "I ain't never seen such beautiful blueberry nipples",
    "You are amazing in so many ways…. I adore you!",
    "Thank you…. For being you.",
    "You are such a KOOL KID!",
    "That brain of yours… gimme",
  ],
  snewby: [
    "You're my FaVoRiTe Psycho Murdering Bug Buddy",
    "DANG SHAWTY, you ARE the gif master !!!!!!",
    "I ain't never seen such beautiful blueberry nipples",
    "You are amazing in so many ways…. I adore you!",
    "Thank you…. For being you.",
    "You are such a KOOL KID!",
    "That brain of yours… gimme",
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

function generateCompliment() {
  const name = document.getElementById("nameInput").value.trim().toLowerCase();
  const complimentsToUse = personalizedCompliments[name] || generalCompliments;

  if (complimentsToUse !== lastComplimentList) {
    complimentIndex = 0;
    lastComplimentList = complimentsToUse;
  }

  lastGeneratedCompliment = complimentsToUse[complimentIndex % complimentsToUse.length];
  complimentIndex++;

  const box = document.getElementById("complimentBox");
  const wrap = document.getElementById("complimentWrap");
  if (box) {
    box.textContent = lastGeneratedCompliment;
    if (wrap) {
      wrap.style.opacity = "";
      wrap.classList.add("visible");
    }
  }
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
  ],
  savvy: [
    "If you were a candle, you'd be the expensive one nobody wants to light.",
    "You make lemonade? Girl, you make the WHOLE lemonade stand.",
    "Even sunshine called and said 'tone it down, Sav.'",
  ],
  stephen: [
    "You're a psycho murdering bug buddy and I mean that with LOVE.",
    "The gif master has entered the chat. Everyone else, go home.",
    "Your brain is so big it needs its own zip code.",
  ],
  snewby: [
    "You're a psycho murdering bug buddy and I mean that with LOVE.",
    "The gif master has entered the chat. Everyone else, go home.",
    "Your brain is so big it needs its own zip code.",
  ],
  demond: [
    "You're so fine, even mirrors do a double take.",
    "The fire department called — they said YOU'RE the fire.",
    "You don't serve looks, you serve entire BUFFETS.",
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
  const name = document.getElementById("nameInput").value.trim().toLowerCase();
  const jokesToUse = personalizedJokes[name] || generalJokes;

  if (jokesToUse !== lastLaughList) {
    laughIndex = 0;
    lastLaughList = jokesToUse;
  }

  const joke = jokesToUse[laughIndex % jokesToUse.length];
  laughIndex++;

  const box = document.getElementById("complimentBox");
  const wrap = document.getElementById("complimentWrap");
  if (box) {
    box.textContent = joke;
    if (wrap) {
      wrap.style.opacity = "";
      wrap.classList.add("visible");
    }
  }
}

// ===== NAVIGATE: PAGE 1 → PAGE 2 =====
function goToPage2() {
  const name = document.getElementById("nameInput").value.trim();
  if (!name) {
    shakeInput();
    return;
  }

  // Update the love label with their name
  document.getElementById("loveLabel").textContent =
    "I'm so happy you're here!";

  // Transition pages
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
  const name = document.getElementById("nameInput").value.trim();

  document.getElementById("bombText").textContent = name
    ? `Go Seize the Day, ${name}!`
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
