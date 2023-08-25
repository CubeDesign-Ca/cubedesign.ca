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
    const message = this.createChatBotMessage("You have selected the wrong options. Please contact the administrator.");
    // this.addClientMessage("oiqjwoefijoiqwjefiojqwoiejfoiqwjeoijfoqe");
    if (id === 1) {
      message.message = "We have offline & online services. abcdefgabcdefgabcdefgabcdefgabcdefgabcdefg";
    } else if (id === 2) {
      message.message = "We can build specialized website for you. abcdefgabcdefgabcdefgabcdefgabcdefg";
    } else if (id === 3) {
      message.message = "For website, you will have to pay $10,000. abcdefgabcdefgabcdefgabcdefgabcdefg";
    } else if (id === 4) {
      message.message = "These are the warranties that we provide. abcdefgabcdefgabcdefgabcdefgabcdefg";
    } else if (id === 5) {
      message.message = "Our service is licensed and insured. abcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefg";
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
