// ==========================================
// MeeshuVerse Ultimate
// script.js - Part 1
// ==========================================

// ---------- Elements ----------

const pages = document.querySelectorAll(".page");

const loader = document.getElementById("loader");

const bgMusic = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

const loveBar = document.getElementById("loveBar");

const yesBtn = document.getElementById("yesBtn");

const noBtn = document.getElementById("noBtn");

const teaseText = document.getElementById("teaseText");

// ---------- Variables ----------

let currentPage = 0;

let musicPlaying = false;

// ---------- Funny Messages ----------

const funnyMessages = [

"😂 Nice try!",

"🤭 Only Meeshu can enter!",

"😏 Wrong birthday girl!",

"🥹 Identity rejected!",

"❤️ Princess only!",

"🤣 You almost fooled me!",

"🌸 Access Denied!",

"👑 Only the Birthday Queen!"

];

// ---------- Loader ----------

window.addEventListener("load", () => {

setTimeout(() => {

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

},800);

},2000);

});

// ---------- Page Function ----------

function showPage(index){

pages.forEach(page=>{

page.classList.remove("active");

});

pages[index].classList.add("active");

currentPage=index;

updateLoveBar();

window.scrollTo({

top:0,

behavior:"smooth"

});

}

// ---------- Love Progress ----------

function updateLoveBar(){

const percent=((currentPage)/(pages.length-1))*100;

loveBar.style.width=percent+"%";

}

// ---------- Music ----------

musicBtn.addEventListener("click",()=>{

if(!musicPlaying){

bgMusic.play();

musicPlaying=true;

musicBtn.innerHTML="🔊";

}else{

bgMusic.pause();

musicPlaying=false;

musicBtn.innerHTML="🎵";

}

});

// ---------- Yes Button ----------

yesBtn.addEventListener("click",()=>{

createHeartExplosion();

setTimeout(()=>{

showPage(1);

},1200);

});

// ---------- No Button ----------

noBtn.addEventListener("mouseenter",moveNoButton);

noBtn.addEventListener("click",moveNoButton);

function moveNoButton(){

const x=Math.random()*250-125;

const y=Math.random()*180-90;

noBtn.style.transform=

`translate(${x}px,${y}px)
rotate(${Math.random()*40-20}deg)`;

teaseText.innerHTML=

funnyMessages[
Math.floor(Math.random()*funnyMessages.length)
];

}
// ==========================================
// LOVE LETTER
// Part 2
// ==========================================

const envelope = document.getElementById("envelope");
const openLetterBtn = document.getElementById("openLetterBtn");
const continueToCake = document.getElementById("continueToCake");
const typewriter = document.getElementById("typewriter");

// ---------- Love Letter ----------

const letter = `My Dearest Meeshu ❤️,

Today is the most beautiful day because it is the day you came into this world.

May Allah bless you with endless happiness, good health, success and beautiful moments.

Your smile makes hearts brighter,
your kindness makes life more beautiful,
and your happiness means a lot to me.

Never stop smiling,
never stop dreaming,
and always remember how special you are.

Happy Birthday Meri Jaana ❤️

May every wish of yours come true.

Forever Yours,

❤️ Zain ❤️`;

// ---------- Envelope ----------

openLetterBtn.addEventListener("click", () => {

    envelope.classList.add("open");

    openLetterBtn.style.display = "none";

    setTimeout(() => {

        startTypewriter();

    }, 900);

});

// ---------- Typewriter ----------

let index = 0;

function startTypewriter() {

    typewriter.innerHTML = "";

    index = 0;

    typeWriter();

}

function typeWriter() {

    if (index < letter.length) {

        typewriter.innerHTML += letter.charAt(index);

        index++;

        typewriter.scrollTop = typewriter.scrollHeight;

        setTimeout(typeWriter, 35);

    } else {

        continueToCake.classList.remove("hidden");

    }

}

// ---------- Continue ----------

continueToCake.addEventListener("click", () => {

    createHeartExplosion();

    setTimeout(() => {

        showPage(2);

    }, 800);

});

// ==========================================
// HEART EXPLOSION
// ==========================================

function createHeartExplosion() {

    for (let i = 0; i < 35; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = Math.random() * window.innerHeight + "px";
        heart.style.fontSize = (20 + Math.random() * 30) + "px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";
        heart.style.transition = "all 2s ease";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.style.transform =
                `translate(${(Math.random()-0.5)*500}px,
                           ${-250-Math.random()*300}px)
                 scale(0) rotate(720deg)`;

            heart.style.opacity = "0";

        }, 50);

        setTimeout(() => {

            heart.remove();

        }, 2000);

    }

}
// ==========================================
// BIRTHDAY CAKE
// Part 3
// ==========================================

const blowBtn = document.getElementById("blowBtn");
const giftBtn = document.getElementById("giftBtn");
const flames = document.querySelectorAll(".flame");

// ---------- Blow Candles ----------

blowBtn.addEventListener("click", () => {

    // Turn off all flames
    flames.forEach((flame, i) => {

        setTimeout(() => {

            flame.style.opacity = "0";
            flame.style.transform = "scale(0)";

        }, i * 200);

    });

    // Celebration
    startCelebration();

    blowBtn.innerHTML = "🎉 Wish Complete!";
    blowBtn.disabled = true;

    setTimeout(() => {

        giftBtn.classList.remove("hidden");

    }, 2500);

});

// ---------- Celebration ----------

function startCelebration() {

    createHeartExplosion();

    createConfetti();

    createBalloons();

    createFireworks();

}

// ---------- Confetti ----------

function createConfetti() {

    for (let i = 0; i < 120; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML = ["🎊","🎉","✨"][Math.floor(Math.random()*3)];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.top = "-50px";
        confetti.style.fontSize = (16 + Math.random()*18) + "px";
        confetti.style.pointerEvents = "none";
        confetti.style.zIndex = "9999";
        confetti.style.transition = "3s linear";

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.style.top = window.innerHeight + 100 + "px";
            confetti.style.transform =
                `rotate(${Math.random()*720}deg)`;

        }, 30);

        setTimeout(() => {

            confetti.remove();

        }, 3200);

    }

}

// ---------- Balloons ----------

function createBalloons() {

    for (let i = 0; i < 25; i++) {

        const balloon = document.createElement("div");

        balloon.innerHTML = "🎈";

        balloon.style.position = "fixed";
        balloon.style.left = Math.random() * window.innerWidth + "px";
        balloon.style.bottom = "-80px";
        balloon.style.fontSize = (35 + Math.random()*20) + "px";
        balloon.style.pointerEvents = "none";
        balloon.style.transition = "6s linear";
        balloon.style.zIndex = "9998";

        document.body.appendChild(balloon);

        setTimeout(() => {

            balloon.style.bottom =
                window.innerHeight + 200 + "px";

        }, 50);

        setTimeout(() => {

            balloon.remove();

        }, 6500);

    }

}

// ---------- Fireworks ----------

function createFireworks() {

    for (let i = 0; i < 18; i++) {

        setTimeout(() => {

            const firework = document.createElement("div");

            firework.innerHTML = "🎆";

            firework.style.position = "fixed";
            firework.style.left =
                Math.random() * window.innerWidth + "px";
            firework.style.top =
                Math.random() * (window.innerHeight / 2) + "px";
            firework.style.fontSize = "70px";
            firework.style.pointerEvents = "none";
            firework.style.zIndex = "9999";
            firework.style.transform = "scale(0)";
            firework.style.transition = ".6s";

            document.body.appendChild(firework);

            setTimeout(() => {

                firework.style.transform = "scale(1.5)";
                firework.style.opacity = "0";

            }, 50);

            setTimeout(() => {

                firework.remove();

            }, 700);

        }, i * 180);

    }

}

// ---------- Open Gift Page ----------

giftBtn.addEventListener("click", () => {

    showPage(3);

});
// ==========================================
// GIFT UNIVERSE
// Part 4
// ==========================================

const giftBoxes = document.querySelectorAll(".giftBox");
const giftMessage = document.getElementById("giftMessage");
const finalBtn = document.getElementById("finalBtn");

// ---------- Gift Messages ----------

const giftMessages = [

"❤️ You are the most beautiful chapter of my life.",

"🌹 Happy Birthday, Meri Jaana! May every smile of yours stay forever.",

"🤲 May Allah bless you with happiness, success, peace and endless smiles. Ameen.",

"💌 If I had one wish today, it would be to always see you happy.",

"✨ Every heartbeat whispers your name.",

"🥹 Thank you for making life brighter just by being you.",

"👑 Today you are the Queen of this beautiful universe.",

"🤗 Sending you the biggest virtual hug ever!",

"🌙 I pray every dream in your heart comes true.",

"💖 'Teri muskurahat meri duniya ki sabse khoobsurat cheez hai.'",

"🎂 Happy Birthday Meri Jaana ❤️ You deserve all the happiness in the world.",

"🎆 FINAL SURPRISE ❤️\n\nForever Yours,\n❤️ Zain ❤️"

];

// ---------- Gift Open ----------

let openedGifts = 0;

giftBoxes.forEach((gift,index)=>{

gift.addEventListener("click",()=>{

if(gift.classList.contains("open")) return;

gift.classList.add("open");

gift.innerHTML="💖";

giftMessage.innerHTML=giftMessages[index];

openedGifts++;

createHeartExplosion();

gift.animate(

[
{transform:"scale(0.5) rotate(-25deg)"},
{transform:"scale(1.2) rotate(15deg)"},
{transform:"scale(1)"}
],

{
duration:600
}

);

if(openedGifts===giftBoxes.length){

setTimeout(()=>{

giftMessage.innerHTML=

`👑 Congratulations ❤️<br><br>
You opened every gift.<br><br>
Now one last surprise is waiting... ✨`;

finalBtn.classList.remove("hidden");

},1000);

}

});

});

// ---------- Final Surprise ----------

finalBtn.addEventListener("click",()=>{

createHeartExplosion();

createFireworks();

setTimeout(()=>{

showPage(4);

},1200);

});
