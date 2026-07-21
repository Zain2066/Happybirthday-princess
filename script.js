// ======================================
// MeeshuVerse ❤️
// Part 1 - Setup, Navigation, Welcome,
// Music & Utilities
// ======================================

"use strict";

// ======================================
// DOM Elements
// ======================================

const welcome = document.getElementById("welcome");
const portal = document.getElementById("portal");
const letterPage = document.getElementById("letterPage");
const galleryPage = document.getElementById("galleryPage");
const giftRoom = document.getElementById("giftRoom");
const portalTransition = document.getElementById("portalTransition");

const pages = [
    welcome,
    portal,
    letterPage,
    galleryPage,
    giftRoom,
    portalTransition
];

// Buttons

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const continueBtn = document.getElementById("continue");
const nextGallery = document.getElementById("nextGallery");
const giftButton = document.getElementById("giftButton");
const musicToggle = document.getElementById("musicToggle");

// Text

const message = document.getElementById("message");
const typewriter = document.getElementById("typewriter");
const countdown = document.getElementById("countdown");
const loveQuote = document.getElementById("loveQuote");
const surpriseMessage = document.getElementById("surpriseMessage");

// Audio

const bgMusic = document.getElementById("bgMusic");

// Gallery

const galleryImages = document.querySelectorAll(".gallery img");

// Gifts

const giftBoxes = document.querySelectorAll(".gift-box");

// ======================================
// Initial State
// ======================================

pages.forEach(page => {

    if (page) page.style.display = "none";

});

if (welcome) {

    welcome.style.display = "flex";

}

// ======================================
// Show One Page
// ======================================

function showPage(activePage){

    pages.forEach(page=>{

        if(page){

            page.style.display="none";

        }

    });

    activePage.style.display="flex";

    activePage.animate(

        [

            {
                opacity:0,
                transform:"translateY(40px)"
            },

            {
                opacity:1,
                transform:"translateY(0)"
            }

        ],

        {

            duration:700,
            easing:"ease",
            fill:"forwards"

        }

    );

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

}

// ======================================
// Funny Messages
// ======================================

const funnyMessages=[

"😏 Nice try... Only Meeshu can enter!",

"😂 Wrong answer!",

"🤭 Are you trying to fool me?",

"🥹 Only the birthday girl is allowed here!",

"❤️ Hmm... I don't believe you!",

"🙈 Nope... Try again!",

"✨ Access Denied!"

];

// ======================================
// No Button
// ======================================

if(noBtn){

noBtn.addEventListener("click",()=>{

message.textContent=

funnyMessages[
Math.floor(Math.random()*funnyMessages.length)
];

const x=Math.random()*(window.innerWidth-180);

const y=Math.random()*(window.innerHeight-100);

noBtn.style.position="fixed";
noBtn.style.left=x+"px";
noBtn.style.top=y+"px";

});

}

// ======================================
// Music
// ======================================

let musicPlaying=false;

function playMusic(){

    if(!bgMusic) return;

    bgMusic.play().then(()=>{

        musicPlaying=true;

        if(musicToggle){

            musicToggle.innerHTML="⏸ Pause Music";

        }

    }).catch(()=>{

    });

}

function pauseMusic(){

    if(!bgMusic) return;

    bgMusic.pause();

    musicPlaying=false;

    if(musicToggle){

        musicToggle.innerHTML="🎵 Play Music";

    }

}

if(musicToggle){

musicToggle.addEventListener("click",()=>{

if(musicPlaying){

pauseMusic();

}else{

playMusic();

}

});

}

// ======================================
// YES Button
// ======================================

if(yesBtn){

yesBtn.addEventListener("click",()=>{

message.innerHTML=

"✨ Identity Confirmed...<br>Welcome Meeshu ❤️";

playMusic();

setTimeout(()=>{

showPage(portal);

},1500);

});

}

// ======================================
// Continue Button
// ======================================

if(continueBtn){

continueBtn.addEventListener("click",()=>{

showPage(letterPage);

startLetter();

});

}
// ======================================
// Part 2 - Typewriter, Countdown,
// Love Quotes
// ======================================

// ======================================
// Love Letter
// ======================================

const letter = `

Happy Birthday, Meeshu ❤️

Today is one of the most special days of my life,
because it's the day my favorite person came into this world.

I may not be able to give you the biggest gift,
but I made this little universe especially for you.

Every page...
Every animation...
Every line of code...
was written with love.

I pray that Allah fills your life with happiness,
success, peace, good health, and endless smiles.

Never stop smiling,
because your smile makes my whole world brighter.

Happy Birthday Princess ❤️

Forever Yours,

Zain ❤️

`;

let letterIndex = 0;
let typingInterval = null;

function startLetter(){

    if(!typewriter) return;

    clearInterval(typingInterval);

    letterIndex = 0;

    typewriter.innerHTML = "";

    typingInterval = setInterval(()=>{

        if(letterIndex < letter.length){

            typewriter.innerHTML += letter.charAt(letterIndex);

            letterIndex++;

            // Auto scroll while typing
            typewriter.scrollTop = typewriter.scrollHeight;

        }else{

            clearInterval(typingInterval);

        }

    },35);

}

// ======================================
// Continue To Gallery
// ======================================

if(nextGallery){

nextGallery.addEventListener("click",()=>{

    showPage(galleryPage);

});

}

// ======================================
// Birthday Countdown
// ======================================

if(countdown){

    let seconds = 10;

    countdown.textContent = seconds;

    const timer = setInterval(()=>{

        seconds--;

        if(seconds > 0){

            countdown.textContent = seconds;

        }else{

            clearInterval(timer);

            countdown.innerHTML="🎉 Happy Birthday ❤️";

        }

    },1000);

}

// ======================================
// Love Quotes
// ======================================

const quotes=[

"❤️ Every day with you is my favorite day.",

"🌹 Your smile is my happiness.",

"🥹 You make my world beautiful.",

"💖 My heart belongs to you.",

"✨ You're my favorite person forever.",

"🌸 Allah bless you with endless happiness.",

"❤️ Happy Birthday Princess."

];

if(loveQuote){

let quoteIndex=0;

loveQuote.innerHTML=quotes[0];

setInterval(()=>{

quoteIndex++;

if(quoteIndex>=quotes.length){

quoteIndex=0;

}

loveQuote.style.opacity=0;

setTimeout(()=>{

loveQuote.innerHTML=quotes[quoteIndex];

loveQuote.style.opacity=1;

},300);

},4000);

}

// ======================================
// Quote Fade Animation
// ======================================

if(loveQuote){

loveQuote.style.transition="opacity .3s ease";

}
// ======================================
// Part 3 - Gallery, Portal & Gift Room
// ======================================

// ======================================
// Gallery Slideshow
// ======================================

let currentImage = 0;

function showGalleryImage(index){

    if(galleryImages.length === 0) return;

    galleryImages.forEach(img=>{
        img.classList.remove("active");
    });

    galleryImages[index].classList.add("active");

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
// Gallery → Gift Room
// ======================================

if(giftButton){

giftButton.addEventListener("click",()=>{

    showPage(portalTransition);

    setTimeout(()=>{

        showPage(giftRoom);

    },2500);

});

}

// ======================================
// Gift Messages
// ======================================

const giftMessages=[

"🌹 You are the most beautiful blessing in my life.",

"💖 I hope every dream you have comes true.",

"✨ You deserve endless happiness every single day.",

"🥹 Thank you for making my world brighter.",

"🎂 Happy Birthday Princess ❤️ I Love You Forever."

];

// ======================================
// Gift Boxes
// ======================================

let openedGifts = 0;

const opened = new Set();

giftBoxes.forEach((gift,index)=>{

gift.addEventListener("click",()=>{

    if(opened.has(index)) return;

    opened.add(index);

    gift.classList.add("opened");

    surpriseMessage.innerHTML = giftMessages[index] ||
    "❤️ Happy Birthday Meeshu ❤️";

    openedGifts++;

    // Small pop animation

    gift.animate(

    [

        {
            transform:"scale(1)"
        },

        {
            transform:"scale(1.25)"
        },

        {
            transform:"scale(1)"
        }

    ],

    {

        duration:400

    });

    // All gifts opened

    if(openedGifts===giftBoxes.length){

        setTimeout(()=>{

            startCelebration();

        },1000);

    }

});

});

// ======================================
// Celebration
// ======================================

function startCelebration(){

    createConfetti();

    startFireworks();

    surpriseMessage.innerHTML=`

    <h2>🎉 Congratulations Princess ❤️</h2>

    <br>

    You opened every gift!

    <br><br>

    I hope this little birthday universe

    made you smile.

    <br><br>

    🌹 Happy Birthday Meeshu 🌹

    <br><br>

    May Allah bless you with happiness,

    success, health and endless smiles.

    <br><br>

    ❤️ Forever Yours ❤️

    <br>

    <strong>Zain</strong>

    `;

}
// ======================================
// Part 4 - Hearts, Confetti,
// Fireworks & Grand Finale
// ======================================

// ======================================
// Floating Hearts
// ======================================

function createHeart(){

    const heart=document.createElement("div");

    heart.className="floating-heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";
    heart.style.fontSize=(20+Math.random()*25)+"px";
    heart.style.animationDuration=(4+Math.random()*4)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

// Create a heart every 600ms
setInterval(createHeart,600);

// ======================================
// Confetti
// ======================================

function createConfetti(){

    for(let i=0;i<120;i++){

        const confetti=document.createElement("div");

        confetti.className="confetti";

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.background=
        `hsl(${Math.random()*360},90%,60%)`;

        confetti.style.animationDelay=
        Math.random()*2+"s";

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.remove();

        },5000);

    }

}

// ======================================
// Fireworks
// ======================================

function launchFirework(){

    const firework=document.createElement("div");

    firework.className="firework";

    firework.style.left=Math.random()*90+"vw";
    firework.style.top=(10+Math.random()*60)+"vh";

    firework.style.background=
    `hsl(${Math.random()*360},100%,60%)`;

    firework.style.color=firework.style.background;

    document.body.appendChild(firework);

    setTimeout(()=>{

        firework.remove();

    },1000);

}

function startFireworks(){

    let count=0;

    const interval=setInterval(()=>{

        launchFirework();

        count++;

        if(count>=40){

            clearInterval(interval);

        }

    },150);

}

// ======================================
// Final Surprise
// ======================================

function finalSurprise(){

    startFireworks();

    createConfetti();

    surpriseMessage.innerHTML=`

        <h1>🎂 Happy Birthday Meeshu ❤️</h1>

        <br>

        <p>

        Thank you for every smile,

        every laugh,

        every beautiful memory.

        <br><br>

        May Allah bless you with

        happiness,

        success,

        good health,

        and endless love.

        <br><br>

        Never stop smiling,

        because your smile lights up my world.

        <br><br>

        ❤️ Forever Yours ❤️

        <br><br>

        <strong>Zain</strong>

        </p>

    `;

}

// ======================================
// Upgrade Celebration
// ======================================

// Replace the previous startCelebration()
// with this version.

function startCelebration(){

    createConfetti();

    startFireworks();

    setTimeout(finalSurprise,2500);

}

// ======================================
// Keyboard Shortcuts
// ======================================

document.addEventListener("keydown",(e)=>{

    if(e.key==="m" || e.key==="M"){

        if(musicPlaying){

            pauseMusic();

        }else{

            playMusic();

        }

    }

});

// ======================================
// Prevent Image Dragging
// ======================================

galleryImages.forEach(img=>{

    img.setAttribute("draggable","false");

});

// ======================================
// Fade Body In
// ======================================

window.addEventListener("load",()=>{

    document.body.animate(

        [

            {opacity:0},

            {opacity:1}

        ],

        {

            duration:800,

            fill:"forwards"

        }

    );

});

// ======================================
// End of script.js ❤️
// Created by Zain
// ======================================
