class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, setStepFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.setStep = setStepFunc;
    this.createClientMessage = createClientMessage;
  }

  // greet = () => {
  //   const message = this.createChatBotMessage("Hello, dear customer. How may I help you today?");
  //   this.addMessageToState(message);
  // };

  answer = (id) => {
    let message = null;
    if (id === "i1") {
      message = this.createChatBotMessage("Printing",
      {
        widget: "printing1",
        delay: 500,
      });
    } else if (id === "p1") {
      message = this.createChatBotMessage("Printing & Installation",
      {
        widget: "printing1a",
        delay: 500,
      });
      // this.addClientMessage("Digital");
    } else if (id === "i2") {
      message = this.createChatBotMessage("id is 2",
      {
        widget: "options3",
        delay: 500,
      });
      // this.addClientMessage("Digital");
    } else if (id === "i3") {
      message = this.createChatBotMessage("id is 3",
      {
        widget: "options3",
        delay: 500,
      });
    } else if (id === "i4") {
      message = this.createChatBotMessage("id is 4",
      {
        widget: "options2",
        delay: 500,
      });
    } else if (id === 5) {
      message = this.createChatBotMessage("Our service is licensed and insured. abcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefg");
    } else if (id === 6) {
      message = this.createChatBotMessage("id is 4",
      {
        widget: "options2",
        delay: 500,
      });
    } else if (id === 7) {
      message = this.createChatBotMessage("id is 4",
      {
        widget: "options2",
        delay: 500,
      });
    } else {
      message = this.createChatBotMessage("You selected the wrong option.");

    }

    this.addMessageToState(message);
  }

  addClientMessage = (text) => {
    const message = this.createClientMessage(text);
    this.addMessageToState(message);
  }

  showMenu() {
    const message = this.createChatBotMessage("Main Menu", {
      widget: "options",
    });
    this.addMessageToState(message);
  }

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
