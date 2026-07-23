/* ===================================================
   MeeshuVerse Ultimate
   script.js - Part 1
=================================================== */

// ============================
// Elements
// ============================

const pages = document.querySelectorAll(".page");
const loader = document.getElementById("loader");

const progressBar = document.getElementById("progressBar");

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const funnyText = document.getElementById("funnyText");

// ============================
// Variables
// ============================

let currentPage = 0;
let musicPlaying = false;

// ============================
// Funny Messages
// ============================

const funnyMessages = [

"😂 Nice try!",

"🤭 Only Meeshu can enter!",

"🥹 Access Denied!",

"😏 Wrong answer!",

"👑 Birthday Queen only!",

"❤️ Princess detected only!",

"🤣 Try again!",

"🌸 Identity not accepted!"

];

// ============================
// Loader
// ============================

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },800);

    },1800);

});

// ============================
// Show Page
// ============================

function showPage(pageNumber){

    pages.forEach(page=>{

        page.classList.remove("active");

    });

    pages[pageNumber].classList.add("active");

    currentPage = pageNumber;

    updateProgress();

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

// ============================
// Progress Bar
// ============================

function updateProgress(){

    const progress =

    (currentPage/(pages.length-1))*100;

    progressBar.style.width = progress+"%";

}

// ============================
// Music
// ============================

musicBtn.addEventListener("click",()=>{

    if(!musicPlaying){

        bgMusic.play().catch(()=>{});

        musicPlaying=true;

        musicBtn.innerHTML="🔊";

    }else{

        bgMusic.pause();

        musicPlaying=false;

        musicBtn.innerHTML="🎵";

    }

});

// Auto play after first click anywhere

document.body.addEventListener("click",()=>{

    if(!musicPlaying){

        bgMusic.play().catch(()=>{});

        musicPlaying=true;

        musicBtn.innerHTML="🔊";

    }

},{once:true});

// ============================
// Entrance Buttons
// ============================

yesBtn.addEventListener("click",()=>{

    createHeartExplosion();

    setTimeout(()=>{

        showPage(1);

    },900);

});

noBtn.addEventListener("mouseenter",moveButton);

noBtn.addEventListener("click",moveButton);

function moveButton(){

    const x=Math.random()*220-110;

    const y=Math.random()*140-70;

    noBtn.style.transform=

    `translate(${x}px,${y}px)
     rotate(${Math.random()*30-15}deg)`;

    funnyText.innerHTML=

    funnyMessages[
    Math.floor(Math.random()*funnyMessages.length)
    ];

}

// ============================
// Heart Explosion
// ============================

function createHeartExplosion(){

    for(let i=0;i<35;i++){

        const heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";

        heart.style.left=
        Math.random()*window.innerWidth+"px";

        heart.style.top=
        Math.random()*window.innerHeight+"px";

        heart.style.fontSize=
        (18+Math.random()*18)+"px";

        heart.style.pointerEvents="none";

        heart.style.zIndex="9999";

        document.body.appendChild(heart);

        heart.animate([

            {
                transform:"translateY(0) scale(1)",
                opacity:1
            },

            {
                transform:`translate(
                ${(Math.random()-0.5)*300}px,
                ${-250-Math.random()*200}px)
                scale(0)`,
                opacity:0
            }

        ],{

            duration:1800,

            easing:"ease-out"

        });

        setTimeout(()=>{

            heart.remove();

        },1800);

    }

      }
/* ===================================================
   MeeshuVerse Ultimate
   script.js - Part 2
   Love Letter & Typewriter
=================================================== */

// ============================
// Elements
// ============================

const envelope = document.getElementById("envelope");
const openLetter = document.getElementById("openLetter");
const typewriter = document.getElementById("typewriter");
const toCake = document.getElementById("toCake");

// ============================
// Love Letter
// ============================

const letter = `My Dearest Meeshu ❤️,

Happy Birthday, Meri Jaana!

Today is not just another day...

Today is the day Allah blessed this world with someone truly special.

Your smile is beautiful.
Your kindness is beautiful.
Your heart is beautiful.

May Allah bless you with endless happiness,
good health,
success,
peace,
and countless beautiful moments.

May every dream in your heart come true.

Thank you for being such an amazing person.

Never stop smiling,
because your smile makes the whole world brighter.

Happy Birthday once again,
Princess ❤️

Forever wishing the best for you...

❤️ Zain ❤️`;

// ============================
// Open Envelope
// ============================

let typingStarted = false;

openLetter.addEventListener("click", () => {

    envelope.classList.add("open");

    openLetter.classList.add("hidden");

    if (!typingStarted) {

        typingStarted = true;

        setTimeout(startTyping, 900);

    }

});

// ============================
// Typewriter
// ============================

let letterIndex = 0;

function startTyping() {

    typewriter.innerHTML = "";

    letterIndex = 0;

    typeLetter();

}

function typeLetter() {

    if (letterIndex < letter.length) {

        typewriter.innerHTML += letter.charAt(letterIndex);

        letterIndex++;

        typewriter.scrollTop = typewriter.scrollHeight;

        setTimeout(typeLetter, 30);

    } else {

        setTimeout(() => {

            toCake.classList.remove("hidden");

            createHeartExplosion();

        }, 500);

    }

}

// ============================
// Continue To Cake
// ============================

toCake.addEventListener("click", () => {

    createHeartExplosion();

    setTimeout(() => {

        showPage(2);

    }, 700);

});

// ============================
// Letter Sparkles
// ============================

setInterval(() => {

    if (!envelope.classList.contains("open")) return;

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";
    sparkle.style.left = Math.random() * window.innerWidth + "px";
    sparkle.style.top = Math.random() * window.innerHeight + "px";
    sparkle.style.fontSize = "22px";
    sparkle.style.pointerEvents = "none";
    sparkle.style.zIndex = "999";

    document.body.appendChild(sparkle);

    sparkle.animate([
        {
            opacity: 0,
            transform: "scale(0)"
        },
        {
            opacity: 1,
            transform: "scale(1.4)"
        },
        {
            opacity: 0,
            transform: "scale(0)"
        }
    ], {
        duration: 1500
    });

    setTimeout(() => {
        sparkle.remove();
    }, 1500);

}, 700);
/* ===================================================
   MeeshuVerse Ultimate
   script.js - Part 3
   Birthday Cake & Celebration
=================================================== */

// ============================
// Elements
// ============================

const blowBtn = document.getElementById("blowBtn");
const giftPageBtn = document.getElementById("giftPageBtn");
const flames = document.querySelectorAll(".flame");

// ============================
// Blow Candles
// ============================

let candlesBlown = false;

blowBtn.addEventListener("click", () => {

    if (candlesBlown) return;

    candlesBlown = true;

    // Turn off flames one by one
    flames.forEach((flame, index) => {

        setTimeout(() => {

            flame.style.opacity = "0";
            flame.style.transform = "translateX(-50%) scale(0)";

        }, index * 180);

    });

    blowBtn.innerHTML = "🎉 Wish Made!";
    blowBtn.disabled = true;

    startCelebration();

    setTimeout(() => {

        giftPageBtn.classList.remove("hidden");

        createHeartExplosion();

    }, 2500);

});

// ============================
// Continue To Gifts
// ============================

giftPageBtn.addEventListener("click", () => {

    createHeartExplosion();

    setTimeout(() => {

        showPage(3);

    }, 700);

});

// ============================
// Celebration Effects
// ============================

function startCelebration() {

    createHeartExplosion();
    launchFireworks();
    launchConfetti();
    launchBalloons();

}

// ============================
// Fireworks
// ============================

function launchFireworks() {

    for (let i = 0; i < 18; i++) {

        setTimeout(() => {

            const fw = document.createElement("div");

            fw.innerHTML = "🎆";

            fw.style.position = "fixed";
            fw.style.left = Math.random() * window.innerWidth + "px";
            fw.style.top = Math.random() * (window.innerHeight * 0.5) + "px";
            fw.style.fontSize = "70px";
            fw.style.pointerEvents = "none";
            fw.style.zIndex = "9999";

            document.body.appendChild(fw);

            fw.animate([
                { transform: "scale(0)", opacity: 0 },
                { transform: "scale(1.4)", opacity: 1 },
                { transform: "scale(2)", opacity: 0 }
            ], {
                duration: 900,
                easing: "ease-out"
            });

            setTimeout(() => fw.remove(), 900);

        }, i * 180);

    }

}

// ============================
// Confetti
// ============================

function launchConfetti() {

    const emojis = ["🎊","🎉","✨","💖"];

    for (let i = 0; i < 120; i++) {

        const piece = document.createElement("div");

        piece.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

        piece.style.position = "fixed";
        piece.style.left = Math.random() * window.innerWidth + "px";
        piece.style.top = "-50px";
        piece.style.fontSize = (18 + Math.random() * 16) + "px";
        piece.style.pointerEvents = "none";
        piece.style.zIndex = "9998";

        document.body.appendChild(piece);

        piece.animate([
            {
                transform: "translateY(0) rotate(0deg)"
            },
            {
                transform: `translateY(${window.innerHeight + 120}px) rotate(${Math.random()*720}deg)`
            }
        ], {
            duration: 3500 + Math.random() * 1500,
            easing: "linear"
        });

        setTimeout(() => piece.remove(), 5000);

    }

}

// ============================
// Balloons
// ============================

function launchBalloons() {

    for (let i = 0; i < 25; i++) {

        const balloon = document.createElement("div");

        balloon.innerHTML = "🎈";

        balloon.style.position = "fixed";
        balloon.style.left = Math.random() * window.innerWidth + "px";
        balloon.style.bottom = "-80px";
        balloon.style.fontSize = (35 + Math.random() * 18) + "px";
        balloon.style.pointerEvents = "none";
        balloon.style.zIndex = "9997";

        document.body.appendChild(balloon);

        balloon.animate([
            {
                transform: "translateY(0)"
            },
            {
                transform: `translateY(-${window.innerHeight + 250}px)`
            }
        ], {
            duration: 7000 + Math.random() * 2000,
            easing: "linear"
        });

        setTimeout(() => balloon.remove(), 9000);

    }

}
/* ===================================================
   MeeshuVerse Ultimate
   script.js - Part 4 (Final)
   Gift Universe • Gallery • Finale
=================================================== */

// ============================
// Elements
// ============================

const giftBoxes = document.querySelectorAll(".giftBox");
const giftMessage = document.getElementById("giftMessage");
const galleryBtn = document.getElementById("galleryBtn");
const finalPageBtn = document.getElementById("finalPageBtn");
const restartBtn = document.getElementById("restartBtn");

// ============================
// Gift Messages
// ============================

const giftTexts = [

"🌹 Happy Birthday Meri Jaana ❤️<br><br>You deserve every happiness in the world.",

"🤲 May Allah bless you with health, success, peace and endless smiles. Ameen.",

"💖 Your smile is my favourite view.",

"🥹 Thank you for being such a wonderful person.",

"✨ Every heartbeat whispers your name.",

"🌙 I pray every dream in your heart comes true.",

"🌸 'apki muskurahat meri duniya ki sabse khoobsurat cheez hai.' ❤️",

"💌 You make ordinary days feel magical.",

"👑 Today and always, you'll be the Birthday Queen.",

"🎂 May every year bring you more joy than the last one.",

"❤️ I'll always pray for your happiness and success.",

"🎉 Final Gift ❤️<br><br>Forever wishing you love, laughter, peace and countless beautiful memories.<br><br>— Zain ❤️"

];

// ============================
// Open Gifts
// ============================

let opened = 0;

giftBoxes.forEach((gift, index) => {

    gift.addEventListener("click", () => {

        if (gift.classList.contains("open")) return;

        gift.classList.add("open");

        gift.innerHTML = "💖";

        giftMessage.innerHTML = giftTexts[index];

        opened++;

        createHeartExplosion();

        gift.animate([
            { transform: "scale(.6) rotate(-15deg)" },
            { transform: "scale(1.2) rotate(10deg)" },
            { transform: "scale(1)" }
        ], {
            duration: 600
        });

        if (opened === giftBoxes.length) {

            setTimeout(() => {

                galleryBtn.classList.remove("hidden");

                createHeartExplosion();

            }, 700);

        }

    });

});

// ============================
// Gallery Page
// ============================

galleryBtn.addEventListener("click", () => {

    showPage(4);

});

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        img.animate([
            { transform: "scale(1)" },
            { transform: "scale(1.15)" },
            { transform: "scale(1)" }
        ], {
            duration: 500
        });

    });

});

// ============================
// Final Page
// ============================

finalPageBtn.addEventListener("click", () => {

    createHeartExplosion();

    launchFireworks();

    launchConfetti();

    setTimeout(() => {

        showPage(5);

    }, 900);

});

// ============================
// Restart
// ============================

restartBtn.addEventListener("click", () => {

    location.reload();

});

// ============================
// Floating Hearts
// ============================

setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "-50px";
    heart.style.fontSize = (18 + Math.random() * 18) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "10";

    document.body.appendChild(heart);

    heart.animate([
        {
            transform: "translateY(0)",
            opacity: .8
        },
        {
            transform: `translateY(-${window.innerHeight + 120}px)`,
            opacity: 0
        }
    ], {
        duration: 7000 + Math.random() * 3000,
        easing: "linear"
    });

    setTimeout(() => {
        heart.remove();
    }, 10000);

}, 800);

// ============================
// Shooting Stars
// ============================

setInterval(() => {

    const star = document.createElement("div");

    star.innerHTML = "🌠";

    star.style.position = "fixed";
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = "-40px";
    star.style.fontSize = "24px";
    star.style.pointerEvents = "none";
    star.style.zIndex = "9";

    document.body.appendChild(star);

    star.animate([
        {
            transform: "translate(0,0)"
        },
        {
            transform: "translate(-350px,500px)"
        }
    ], {
        duration: 2500,
        easing: "linear"
    });

    setTimeout(() => {
        star.remove();
    }, 2500);

}, 4500);

// ============================
// Finish
// ============================

updateProgress();

console.log("❤️ MeeshuVerse Ultimate Loaded Successfully ❤️");
