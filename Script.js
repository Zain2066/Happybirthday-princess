// ========= MeeshuVerse - Phase 1 Script =========

// Get elements
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const message = document.getElementById("message");

const welcome = document.getElementById("welcome");
const portal = document.getElementById("portal");

// Funny messages
const messages = [
    "Hmm... I don't believe you 😏",
    "Try again 😂",
    "Nice try, stranger 🤭",
    "Only Meeshu can enter ❤️",
    "System says: You're too cute 🥹",
    "Oops! Button escaped 😆"
];

// No button runs away
noBtn.addEventListener("click", () => {

    message.innerHTML =
        messages[Math.floor(Math.random() * messages.length)];

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

});

// Yes button
yesBtn.addEventListener("click", () => {

    message.innerHTML =
        "✨ Identity Confirmed... Welcome Meeshu ❤️";

    setTimeout(() => {

        welcome.style.display = "none";

        portal.style.display = "flex";

        portal.animate([
            {
                opacity:0,
                transform:"scale(.9)"
            },
            {
                opacity:1,
                transform:"scale(1)"
            }
        ],{
            duration:1200,
            easing:"ease"
        });

    },1500);

});

// Continue button
document
.getElementById("continue")
.addEventListener("click",()=>{

    alert(
`🎉 Congratulations Meeshu ❤️

You have entered your Birthday Universe!

Next we'll add:

🎆 Fireworks
🎈 Balloons
🌹 Rose Petals
🎂 Birthday Cake
💌 Love Letter
📸 Photo Gallery

Made with ❤️ by Zain`
    );

});
