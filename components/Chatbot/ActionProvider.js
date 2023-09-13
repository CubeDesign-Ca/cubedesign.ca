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
    } else if (id === "p1a") {
      message = this.createChatBotMessage("Large Format Printing",
      {
        widget: "printing1a1",
        delay: 500,
      });
    } else if (id === "p1b") {
      message = this.createChatBotMessage("Digital Printing Service",
      {
        widget: "printing1a1",
        delay: 500,
      });
    } else if (id === "p1c") {
      message = this.createChatBotMessage("Installation Service",
      {
        widget: "printing1a1",
        delay: 500,
      });
    } else if (id === "p1d") {
      message = this.createChatBotMessage("All of the above",
      {
        // need to update
        widget: "printing1a1",
        delay: 500,
      });
    } else if (id === "p1e") {
      message = this.createChatBotMessage("Back to the previous menu",
      {
        // need to update
        widget: "printing1a1",
        delay: 500,
      });
    } else if (id === "p2") {
      message = this.createChatBotMessage("Wayfinding Design",
      {
        widget: "printing2a",
        delay: 500,
      });
    } else if (id === "p2a") {
      message = this.createChatBotMessage("Directional Signage Design",
      {
        // need to update
        widget: "printing2a",
        delay: 500,
      });
    } else if (id === "p2b") {
      message = this.createChatBotMessage("Back to the previous menu",
      {
        // need to update
        widget: "printing2a",
        delay: 500,
      });
    } else if (id === "p3") {
      message = this.createChatBotMessage("Promotional Products",
      {
        widget: "printing3a",
        delay: 500,
      });
    } else if (id === "p3a") {
      message = this.createChatBotMessage("Promotional Product & Merchandise",
      {
        // need to update
        widget: "printing3a",
        delay: 500,
      });
    } else if (id === "p3b") {
      message = this.createChatBotMessage("Back to the previous menu",
      {
        // need to update
        widget: "printing3a",
        delay: 500,
      });
    } else if (id === "p4") {
      message = this.createChatBotMessage("All of the above",
      {
        widget: "printing4a",
        delay: 500,
      });
    } else if (id === "p5") {
      message = this.createChatBotMessage("Back to the previous menu",
      {
        // need to update
        widget: "initOptions",
        delay: 500,
      });
      // this.addClientMessage("Digital");
    } else if (id === "i2") {
      message = this.createChatBotMessage("Digital",
      {
        widget: "digital1",
        delay: 500,
      });
    } else if (id === "d1") {
      message = this.createChatBotMessage("Website Design & Development",
      {
        widget: "digital1a",
        delay: 500,
      });
    } else if (id === "d1a") {
      message = this.createChatBotMessage("Search Engine Optimization",
      {
        widget: "digital1a1",
        delay: 500,
      });
    } else if (id === "d1b") {
      message = this.createChatBotMessage("Content Management System",
      {
        widget: "digital1b1",
        delay: 500,
      });
    } else if (id === "d1c") {
      message = this.createChatBotMessage("Third-Party Authentication",
      {
        widget: "digital1c1",
        delay: 500,
      });
    } else if (id === "d1d") {
      message = this.createChatBotMessage("E-commerce Integration",
      {
        widget: "digital1d1",
        delay: 500,
      });
    } else if (id === "d1e") {
      message = this.createChatBotMessage("All of the above",
      {
        widget: "digital1e1",
        delay: 500,
      });
    } else if (id === "d1f") {
      message = this.createChatBotMessage("Back to previous menu",
      {
        // need to update
        widget: "initOptions",
        delay: 500,
      });
    } else if (id === "d2") {
      message = this.createChatBotMessage("Admin Dashboard Implementation",
      {
        widget: "digital2a",
        delay: 500,
      });
    } else if (id === "d2a") {
      message = this.createChatBotMessage("Admin Dashboard Implementation",
      {
        // need to update
        widget: "digital2a",
        delay: 500,
      });
    } else if (id === "d2b") {
      message = this.createChatBotMessage("Back to previous menu",
      {
        // need to update
        widget: "digital2a",
        delay: 500,
      });
    } else if (id === "d3") {
      message = this.createChatBotMessage("Branding Design",
      {
        widget: "digital3a",
        delay: 500,
      });
    } else if (id === "d3a") {
      message = this.createChatBotMessage("Visual Identity Design",
      {
        // need to update
        widget: "digital3a",
        delay: 500,
      });
    } else if (id === "d3b") {
      message = this.createChatBotMessage("Back to previous menu",
      {
        // need to update
        widget: "digital3a",
        delay: 500,
      });
    } else if (id === "d4") {
      message = this.createChatBotMessage("Graphic Design",
      {
        widget: "digital4a",
        delay: 500,
      });
    } else if (id === "d4a") {
      message = this.createChatBotMessage("Poster Design",
      {
        // need to update
        widget: "digital4a",
        delay: 500,
      });
    } else if (id === "d4b") {
      message = this.createChatBotMessage("Menu Design",
      {
        // need to update
        widget: "digital4a",
        delay: 500,
      });
    } else if (id === "d4c") {
      message = this.createChatBotMessage("All of the above",
      {
        widget: "digital4c1",
        delay: 500,
      });
    } else if (id === "d4d") {
      message = this.createChatBotMessage("Back to previous menu",
      {
        // need to update
        widget: "digital4a",
        delay: 500,
      });
    } else if (id === "d5") {
      message = this.createChatBotMessage("All of the above",
      {
        widget: "digital5a",
        delay: 500,
      });
    } else if (id === "d6") {
      message = this.createChatBotMessage("Back to previous menu",
      {
        // need to update
        widget: "digital5a",
        delay: 500,
      });
      // this.addClientMessage("Digital");
    } else if (id === "i3") {
      message = this.createChatBotMessage("Complex",
      {
        widget: "complex1",
        delay: 500,
      });
    } else if (id === "i4") {
      message = this.createChatBotMessage("I don't know",
      {
        widget: "idontknow1",
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
