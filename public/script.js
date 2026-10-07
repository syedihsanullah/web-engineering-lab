function greet(name) {
  return `Hello, ${name}!`;
}

// Browser: set the heading text
if (typeof document !== "undefined") {
  document.getElementById("heading").textContent = greet("Sayed Ihsan");
}

// Node: export the function for testing
if (typeof module !== "undefined") {
  module.exports = { greet };
}
