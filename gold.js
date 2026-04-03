const chatBtn = document.getElementById("chatBtn");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");
const sendBtn = document.getElementById("sendBtn");
const chatBody = document.getElementById("chatBody");
const userInput = document.getElementById("userInput");

// Open chat
chatBtn.onclick = () => {
  chatBox.style.display = "block";
};

// Close chat
closeChat.onclick = () => {
  chatBox.style.display = "none";
};

// Send message
sendBtn.onclick = sendMessage;
userInput.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const msg = userInput.value.trim();
  if (msg === "") return;

  addMessage(msg, "user-msg");
  userInput.value = "";

  setTimeout(() => {
    botReply(msg);
  }, 600);
}

function addMessage(text, className) {
  const div = document.createElement("div");
  div.className = className;
  div.innerText = text;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function botReply(userMsg) {
  let reply = "Sorry, I didn’t understand that.";

  if (userMsg.toLowerCase().includes("gold")) {
    reply = "We provide premium gold jewelry 💍";
  } else if (userMsg.toLowerCase().includes("price")) {
    reply = "Prices depend on weight and design.";
  } else if (userMsg.toLowerCase().includes("contact")) {
    reply = "You can contact us at +1 555 123";
  }

  addMessage(reply, "bot-msg");
}