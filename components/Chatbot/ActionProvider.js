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
    // this.addClientMessage("oiqjwoefijoiqwjefiojqwoiejfoiqwjeoijfoqe");
    if (id === 1) {
      message = this.createChatBotMessage("id is 1",
      {
        widget: "printing1",
        delay: 500,
      });
      // this.addClientMessage("Printing");
    } else if (id === 2) {
      message = this.createChatBotMessage("id is 2",
      {
        widget: "options3",
        delay: 500,
      });
      // this.addClientMessage("Digital");
    } else if (id === 3) {
      message = this.createChatBotMessage("id is 3",
      {
        widget: "options3",
        delay: 500,
      });
    } else if (id === 4) {
      message = this.createChatBotMessage("id is 4",
      {
        widget: "options2",
        delay: 500,
      });
    } else if (id === 5) {
      message = this.createChatBotMessage("Our service is licensed and insured. abcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefg");
    } else if (id === 6) {
      message.message = "Terms & Conditions abcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefg";
    } else if (id === 7) {
      message.message = "We will redirect you to the contact page. ";
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
