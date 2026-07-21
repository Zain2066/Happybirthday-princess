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
