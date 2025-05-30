export default class ElizaBot {
  constructor() {
    this.initials = [
      "How do you do. Please tell me your problem.",
      "Hello, I am ELIZA. How can I help you today?"
    ];
    this.fallback = "Please go on.";
  }

  getInitial() {
    return this.initials[Math.floor(Math.random() * this.initials.length)];
  }

  transform(input) {
    if (input.toLowerCase().includes("mother")) {
      return "Tell me more about your family.";
    }
    if (input.toLowerCase().includes("i feel")) {
      return "Why do you feel that way?";
    }
    return this.fallback;
  }
}
