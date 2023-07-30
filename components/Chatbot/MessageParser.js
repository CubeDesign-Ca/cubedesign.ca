class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello") || lowercase.includes("hi")) {
      this.actionProvider.greet();
    }

    if (lowercase.includes("help")) {
      this.actionProvider.showMenu();
    }
  }
}

export default MessageParser;
