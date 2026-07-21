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
