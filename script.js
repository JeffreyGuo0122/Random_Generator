const greetings = [
  "Hello", 
  "Hey", 
  "Greetings", 
  "Hi", 
  "What's up"
];

const actions = [
  "your fortune is that",
  "today,",
  "the stars say",
  "the universe suggests",
  "you know that"
];

const outcomes = [
  "adventure awaits you.",
  "you will find unexpected joy.",
  "try something new and exciting.",
  "focus on self-care.",
  "connect with someone you've missed."
];


function generate() {
  const name = document.getElementById("nameInput").value;
  if (!name) {
    alert("Please enter your name!");
    return;
  }


  const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  const action = actions[Math.floor(Math.random() * actions.length)];
  const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];


  const message = `${greeting}, ${name}, ${action} ${outcome}`;
  document.getElementById("output").innerText = message;
}


function restyle() {
  const output = document.getElementById("output");


  const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  const randomFontSize = `${Math.random() * 1.5 + 1}em`; // Random size between 1em and 2.5em
  const randomShadow = `${Math.random() * 5}px ${Math.random() * 5}px ${Math.random() * 5}px rgba(0, 0, 0, 0.5)`;

  output.style.color = randomColor;
  output.style.fontSize = randomFontSize;
  output.style.textShadow = randomShadow;
}
