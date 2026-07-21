// ===============================
// MeeshuVerse ❤️
// Created by Zain
// ===============================

// Pages
const welcome = document.getElementById("welcome");
const portal = document.getElementById("portal");
const letterPage = document.getElementById("letterPage");
const galleryPage = document.getElementById("galleryPage");
const giftRoom = document.getElementById("giftRoom");

// Buttons
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const continueBtn = document.getElementById("continue");
const nextGallery = document.getElementById("nextGallery");
const giftButton = document.getElementById("giftButton");

// Text
const message = document.getElementById("message");
const typewriter = document.getElementById("typewriter");
const giftMessage = document.getElementById("giftMessage");

// Hide all pages except Welcome
portal.style.display = "none";
letterPage.style.display = "none";
galleryPage.style.display = "none";
giftRoom.style.display = "none";

function showPage(page){
// ===============================
// Welcome Screen
// ===============================

const funnyReplies = [

"😏 Nice try... only Meeshu can enter.",

"🤭 Wrong button!",

"😂 Are you trying to fool me?",

"❤️ Hmm... I don't think so.",

"🥹 Only the birthday girl is allowed."

];

noBtn.addEventListener("click",()=>{

message.innerHTML =
funnyReplies[
Math.floor(Math.random()*funnyReplies.length)
];

// Move button
const x =
Math.random()*(window.innerWidth-150);

const y =
Math.random()*(window.innerHeight-80);

noBtn.style.position="fixed";
noBtn.style.left=x+"px";
noBtn.style.top=y+"px";

});

// Yes Button
yesBtn.addEventListener("click",()=>{

message.innerHTML=
"✨ Identity Confirmed... Welcome Meeshu ❤️";

setTimeout(()=>{

showPage(portal);

},1500);

});
welcome.style.display = "none";
portal.style.display = "none";
letterPage.style.display = "none";
galleryPage.style.display = "none";
giftRoom.style.display = "none";

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
