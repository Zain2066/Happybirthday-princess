// ======================================
// MeeshuVerse ❤️
// Created by Zain
// ======================================

// Pages
const welcome = document.getElementById("welcome");
const portal = document.getElementById("portal");
const letterPage = document.getElementById("letterPage");
const galleryPage = document.getElementById("galleryPage");
const giftRoom = document.getElementById("giftRoom");
const portalTransition = document.getElementById("portalTransition");

// Buttons
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const continueBtn = document.getElementById("continue");
const nextGallery = document.getElementById("nextGallery");
const giftButton = document.getElementById("giftButton");

// Text Areas
const message = document.getElementById("message");
const typewriter = document.getElementById("typewriter");
const giftMessage = document.getElementById("giftMessage");

// Music
const bgMusic = document.getElementById("bgMusic");

// Hide pages on startup
portal.style.display = "none";
letterPage.style.display = "none";
galleryPage.style.display = "none";
giftRoom.style.display = "none";
portalTransition.style.display = "none";

// Function to show one page only
function showPage(page){

welcome.style.display = "none";
portal.style.display = "none";
letterPage.style.display = "none";
galleryPage.style.display = "none";
giftRoom.style.display = "none";
portalTransition.style.display = "none";

page.style.display = "flex";

page.animate(
[
{opacity:0,transform:"scale(.95)"},
{opacity:1,transform:"scale(1)"}
],
{
duration:800,
fill:"forwards"
});

}
// ======================================
// Welcome Screen
// ======================================

const funnyMessages = [

"😏 Nice try... Only Meeshu can enter!",

"😂 Wrong answer!",

"🤭 Are you trying to fool me?",

"🥹 Only the birthday girl is allowed here!",

"❤️ Hmm... I don't believe you."

];

// No Button
noBtn.addEventListener("click",()=>{

message.innerHTML=
funnyMessages[
Math.floor(Math.random()*funnyMessages.length)
];

const x=Math.random()*(window.innerWidth-150);

const y=Math.random()*(window.innerHeight-80);

noBtn.style.position="fixed";

noBtn.style.left=x+"px";

noBtn.style.top=y+"px";

});

// Yes Button
yesBtn.addEventListener("click",()=>{

message.innerHTML=
"✨ Identity Confirmed... Welcome Meeshu ❤️";

if(bgMusic){

bgMusic.play().catch(()=>{});

}

setTimeout(()=>{

showPage(portal);

},1500);

});

// Continue Button
continueBtn.addEventListener("click",()=>{

showPage(letterPage);

startLetter();

});
// ======================================
// Love Letter (Typewriter)
// ======================================

const letter = `

Happy Birthday, Meeshu ❤️

Today is one of the most special days for me,
because it's the day you came into this world.

I may not be able to hand you a real gift,
but I made this little universe just for you.

Every page...
Every animation...
Every line of code...
was created with love.

I pray that Allah fills your life with happiness,
success, peace, and endless smiles.

Always keep shining.

Happy Birthday, Princess ❤️

Forever Yours,

Zain ❤️

`;

let letterIndex = 0;

function startLetter(){

typewriter.innerHTML = "";

letterIndex = 0;

const typing = setInterval(()=>{

typewriter.innerHTML += letter.charAt(letterIndex);

letterIndex++;

if(letterIndex >= letter.length){

clearInterval(typing);

}

},35);

}

// ======================================
// Continue to Gallery
// ======================================

nextGallery.addEventListener("click",()=>{

showPage(galleryPage);

});

// ======================================
// Gallery → Gift Room
// ======================================

giftButton.addEventListener("click",()=>{

showPage(portalTransition);

setTimeout(()=>{

showPage(giftRoom);

},2500);

});
// ======================================
// Interactive Gift Boxes
// ======================================

const gifts = document.querySelectorAll(".gift-box");
const surpriseMessage = document.getElementById("surpriseMessage");

const giftMessages = [

"🌹 You're the most beautiful part of my life.",
"💖 May every dream of yours come true.",
"✨ You deserve endless happiness and love.",
"🥹 Thank you for existing, Princess.",
"🎂 Happy Birthday, Meeshu! I Love You ❤️"

];

let openedGifts = 0;
let opened = [];

gifts.forEach((gift, index) => {

    gift.addEventListener("click", () => {

        if (opened.includes(index)) return;

        opened.push(index);

        gift.classList.add("opened");

        surpriseMessage.innerHTML = giftMessages[index];

        openedGifts++;

        if (openedGifts === 5) {

            setTimeout(() => {

                startCelebration();

            }, 800);

        }

    });

});

// ======================================
// Celebration
// ======================================

function startCelebration() {

    surpriseMessage.innerHTML = `
    🎉 Congratulations! 🎉<br><br>
    You opened every gift! ❤️<br><br>
    Happy Birthday, Meeshu!<br>
    I hope this little universe made you smile. 🥹💖
    <br><br>
    Forever Yours,<br>
    <strong>Zain ❤️</strong>
    `;

    createConfetti();

}

// ======================================
// Confetti Effect
// ======================================

function createConfetti() {

    for (let i = 0; i < 120; i++) {

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.animationDelay = Math.random() * 3 + "s";

        confetti.style.background =
            `hsl(${Math.random()*360},90%,60%)`;

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 5000);

    }

}
// ======================================
// Background Music
// ======================================

const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

let musicPlaying = false;

musicToggle.addEventListener("click", () => {

    if (musicPlaying) {

        bgMusic.pause();
        musicToggle.innerHTML = "🎵 Play Music";

    } else {

        bgMusic.play();
        musicToggle.innerHTML = "⏸ Pause Music";

    }

    musicPlaying = !musicPlaying;

});

// ======================================
// Floating Hearts
// ======================================

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);

}

setInterval(createHeart, 500);

// ======================================
// Final Fireworks
// ======================================

function launchFirework() {

    const firework = document.createElement("div");

    firework.className = "firework";

    firework.style.left = Math.random() * 90 + "vw";
    firework.style.top = (20 + Math.random() * 50) + "vh";
    firework.style.background =
        `hsl(${Math.random() * 360},100%,60%)`;

    document.body.appendChild(firework);

    setTimeout(() => {
        firework.remove();
    }, 1000);

}

function startFireworks() {

    let count = 0;

    const show = setInterval(() => {

        launchFirework();

        count++;

        if (count >= 40) {

            clearInterval(show);

        }

    }, 150);

}

// ======================================
// Grand Finale
// ======================================

function finalSurprise() {

    startFireworks();

    surpriseMessage.innerHTML = `
        <h1>🎂 Happy Birthday Meeshu ❤️</h1>
        <h2>You are my favorite person in this universe. 🌎</h2>
        <p>
        Thank you for every smile,
        every memory,
        and every moment.
        <br><br>
        May Allah bless you with happiness,
        success, peace, and endless love.
        <br><br>
        ❤️ Forever Yours ❤️
        <br>
        <strong>Zain</strong>
        </p>
    `;

}

// Trigger finale after all gifts are opened
// Replace this line in Part 4:
//
// createConfetti();
//
// with:
//
// createConfetti();
// finalSurprise();
// ======================================
// Auto Photo Gallery Slideshow
// ======================================

const galleryImages = document.querySelectorAll(".gallery img");

let currentImage = 0;

function showGalleryImage(index){

    galleryImages.forEach(img=>{
        img.classList.remove("active");
    });

    if(galleryImages.length > 0){
        galleryImages[index].classList.add("active");
    }

}

if(galleryImages.length > 0){

    showGalleryImage(0);

    setInterval(()=>{

        currentImage++;

        if(currentImage >= galleryImages.length){
            currentImage = 0;
        }

        showGalleryImage(currentImage);

    },3000);

}

// ======================================
// Love Quotes
// ======================================

const quotes = [

"❤️ Every day with you is my favorite day.",

"🌹 You make my world brighter.",

"🥹 My happiest moments always include you.",

"💖 You are my greatest blessing.",

"✨ You are my forever favorite person."

];

const quoteElement = document.getElementById("loveQuote");

if(quoteElement){

    let quoteIndex = 0;

    quoteElement.innerHTML = quotes[0];

    setInterval(()=>{

        quoteIndex++;

        if(quoteIndex >= quotes.length){
            quoteIndex = 0;
        }

        quoteElement.innerHTML = quotes[quoteIndex];

    },4000);

}

// ======================================
// Birthday Countdown
// ======================================

const countdown = document.getElementById("countdown");

if(countdown){

    let seconds = 10;

    countdown.innerHTML = seconds;

    const timer = setInterval(()=>{

        seconds--;

        countdown.innerHTML = seconds;

        if(seconds <= 0){

            clearInterval(timer);

            countdown.innerHTML = "🎉 Happy Birthday! ❤️";

        }

    },1000);

}
