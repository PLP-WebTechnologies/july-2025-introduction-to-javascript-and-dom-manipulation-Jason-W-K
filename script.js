// 🎯 Part 1: JavaScript Basics
let userName = ""; // Variable declaration

function greetUser() {
  userName = document.getElementById("userInput").value;

  // Conditional logic
  if (userName.trim() === "") {
    document.getElementById("greeting").textContent = "Please enter your name.";
  } else {
    document.getElementById("greeting").textContent = `Hello, ${userName}! Ready to master JavaScript?`;
  }
}

// ❤️ Part 2: Functions

// Function to calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Function to format a string poetically
function formatPoemLine(line) {
  return `"${line.trim()}" — whispered by the code`;
}

// 🔁 Part 3: Loops

// Loop to populate a list
const items = ["Flexbox", "Grid", "Functions", "Loops", "DOM"];
const listElement = document.getElementById("loopedList");

items.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  listElement.appendChild(li);
});

// Countdown loop
for (let i = 5; i >= 1; i--) {
  console.log(`Countdown: ${i}`);
}

// 🌐 Part 4: DOM Interactions

// Toggle visibility
const toggleBtn = document.getElementById("toggleBtn");
const toggleMsg = document.getElementById("toggleMsg");

toggleBtn.addEventListener("click", () => {
  toggleMsg.classList.toggle("hidden");
});

// Change text dynamically
toggleBtn.addEventListener("mouseover", () => {
  toggleBtn.textContent = "Reveal the secret";
});

toggleBtn.addEventListener("mouseout", () => {
  toggleBtn.textContent = "Toggle Message";
});
