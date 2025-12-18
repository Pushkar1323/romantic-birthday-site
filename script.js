const envelope = document.getElementById("envelope");
const overlay = document.getElementById("overlay");

envelope.addEventListener("click", () => {
  overlay.classList.add("active");
  startTextRain();
});

function closeOverlay(){
  overlay.classList.remove("active");
  overlay.innerHTML = '<div class="cancel" onclick="closeOverlay()">✕</div>';
}

/* Text rain */
function startTextRain(){
  const messages = [
    "Happy Birthday to you 💋",
    "Cutuuu Appuu 💖",
    "Happyyyy Birthdayyyy 🥳🎊",
    "Mwahhh Mwahhh 😘"
    "I love you💖"
    ] 
  const interval = setInterval(() => {
    if(!overlay.classList.contains("active")){
      clearInterval(interval);
      return;
    }

    const text = document.createElement("div");
    text.innerText = messages[Math.floor(Math.random()*messages.length)];
    text.className = "rain-text";

    text.style.left = Math.random() * 80 + "%";
    overlay.appendChild(text);

    setTimeout(() => text.remove(), 5000);
  }, 600);
}

