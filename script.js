// ===== BUBBLE GENERATOR (Page 1) =====
function createBubbles() {
  const container = document.getElementById("bubbles1");
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

createBubbles();

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
function generateCompliment() {
  const name = document.getElementById("nameInput").value.trim().toLowerCase();

  // Check if there are personalized compliments for this name
  let complimentsToUse = personalizedCompliments[name] || generalCompliments;

  const randomCompliment =
    complimentsToUse[Math.floor(Math.random() * complimentsToUse.length)];
  const el = document.getElementById("complimentInput");
  el.value = randomCompliment;
  autoResizeCompliment(el);
}

function autoResizeCompliment(el) {
  el.style.height = "auto";
  el.style.height = el.scrollHeight + "px";
}

// Initialize with one compliment on page load
window.addEventListener("DOMContentLoaded", () => {
  generateCompliment();
});

// ===== NAVIGATE: PAGE 1 → PAGE 2 =====
function goToPage2() {
  const name = document.getElementById("nameInput").value.trim();
  if (!name) {
    shakeInput();
    return;
  }

  // Update the love label with their name
  document.getElementById("loveLabel").textContent =
    `${name}, I love you because...`;

  // Generate initial compliment
  generateCompliment();

  // Transition pages
  document.getElementById("page1").classList.remove("active");
  const p2 = document.getElementById("page2");
  p2.classList.add("active");

  // Start rainbow swirl canvas
  startRainbowSwirl();
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

// ===== RAINBOW SWIRL CANVAS =====
function startRainbowSwirl() {
  const canvas = document.getElementById("rainbowCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  let angle = 0;

  function drawSwirl() {
    ctx.fillStyle = "rgba(0,0,0,0.04)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    for (let i = 0; i < 6; i++) {
      const hue = (angle * 2 + i * 60) % 360;
      const radius = 120 + i * 40;
      const x = cx + Math.cos((angle + i * 1.05) * 0.02 * Math.PI) * radius;
      const y = cy + Math.sin((angle + i * 1.05) * 0.02 * Math.PI) * radius;

      const grad = ctx.createRadialGradient(x, y, 0, x, y, 80 + i * 15);
      grad.addColorStop(0, `hsla(${hue}, 100%, 70%, 0.9)`);
      grad.addColorStop(1, `hsla(${hue}, 100%, 50%, 0)`);

      ctx.beginPath();
      ctx.arc(x, y, 80 + i * 15, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
    }

    // Extra spiraling dots
    for (let j = 0; j < 120; j++) {
      const hue = (angle + j * 3) % 360;
      const r = j * 2.5;
      const spin = angle * 0.04 + j * 0.15;
      const x = cx + Math.cos(spin) * r;
      const y = cy + Math.sin(spin) * r;
      const size = Math.max(0.5, 3 - j * 0.02);

      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${hue}, 100%, 65%, 0.8)`;
      ctx.fill();
    }

    angle++;
    requestAnimationFrame(drawSwirl);
  }

  drawSwirl();
}

// ===== NAVIGATE: PAGE 2 → PAGE 3 =====
function goToPage3() {
  const name = document.getElementById("nameInput").value.trim();

  document.getElementById("bombName").textContent = name ? `✨ ${name} ✨` : "";
  document.getElementById("bombReason").textContent = "";

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

  for (let i = 0; i < 160; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 10 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 4 + 2,
      spin: Math.random() * 0.2 - 0.1,
      angle: Math.random() * Math.PI * 2,
      drift: Math.random() * 2 - 1,
      shape: Math.random() > 0.5 ? "rect" : "circle",
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pieces.forEach((p) => {
      p.y += p.speed;
      p.x += p.drift;
      p.angle += p.spin;

      if (p.y > canvas.height + 20) {
        p.y = -20;
        p.x = Math.random() * canvas.width;
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
