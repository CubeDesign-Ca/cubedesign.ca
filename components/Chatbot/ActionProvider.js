class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, setStepFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.setStep = setStepFunc;
    this.createClientMessage = createClientMessage;
  }

  answer = (id) => {
    let message = null;
    if (id === "i1") {
      message = this.createChatBotMessage("Printing");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Great! Cube Design offers 3 services that provide years of expertise and knowledge.",
      {
        widget: "printing1",
        delay: 500,
      });
    } else if (id === "p1") {
      message = this.createChatBotMessage("Printing & Installation");
      this.addMessageToState(message);
      message = this.createChatBotMessage("We can help you to find out what you need for your business! Please select one of services in the below.",
      {
        widget: "printing1a",
        delay: 500,
      });
    } else if (id === "p1a") {
      message = this.createChatBotMessage("Large Format Printing");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Awesome! You can easily submit free consulting for your project through our contact page.");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Do you want to go to contact page?",
      {
        widget: "printing1a1",
        delay: 500,
      });
    } else if (id === "p1b") {
      message = this.createChatBotMessage("Digital Printing Service");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Awesome! You can easily submit free consulting for your project through our contact page.");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Do you want to go to contact page?",
      {
        widget: "printing1a1",
        delay: 500,
      });
    } else if (id === "p1c") {
      message = this.createChatBotMessage("Installation Service");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Awesome! You can easily submit free consulting for your project through our contact page.");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Do you want to go to contact page?",
      {
        widget: "printing1a1",
        delay: 500,
      });
    } else if (id === "p1d") {
      message = this.createChatBotMessage("All of the above");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Awesome! You can easily submit free consulting for your project through our contact page.");
      this.addMessageToState(message);
      // need to update
      message = this.createChatBotMessage("Do you want to go to contact page?",
      {
        widget: "printing1a1",
        delay: 500,
      });
    } else if (id === "p1e") {
      message = this.createChatBotMessage("Back to the previous menu");
      this.addMessageToState(message);
      message = this.createChatBotMessage("No problem! Let me bring you to the previous menu.");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Great! Cube Design offers 3 services that provide years of expertise and knowledge.",
      {
        widget: "printing1",
        delay: 500,
      });
    } else if (id === "p2") {
      //need to update  
      message = this.createChatBotMessage("Wayfinding Design");
      this.addMessageToState(message);
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
      message = this.createChatBotMessage("Back to the previous menu");
      this.addMessageToState(message);
      message = this.createChatBotMessage("No problem! Let me bring you to the previous menu.");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Great! Cube Design offers 3 services that provide years of expertise and knowledge.",
      {
        widget: "printing1",
        delay: 500,
      });
    } else if (id === "p3") {
      // need to update
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
      message = this.createChatBotMessage("Back to the previous menu");
      this.addMessageToState(message);
      message = this.createChatBotMessage("No problem! Let me bring you to the previous menu.");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Great! Cube Design offers 3 services that provide years of expertise and knowledge.",
      {
        widget: "printing1",
        delay: 500,
      });
    } else if (id === "p4") {
      message = this.createChatBotMessage("All of the above");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Awesome! You can easily submit free consulting for your project through our contact page.");
      this.addMessageToState(message);
      // need to update
      message = this.createChatBotMessage("Do you want to go to contact page?",
      {
        widget: "printing4a",
        delay: 500,
      });
    } else if (id === "p5") {
      message = this.createChatBotMessage("Back to the previous menu");
      this.addMessageToState(message);
      message = this.createChatBotMessage("No problem! Let me bring you to the first chat.");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Please select you are interested!", {
        widget: "options",
        delay: 500,
      });
    } else if (id === "i2") {
      message = this.createChatBotMessage("Digital");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Great! Cube Design offers 4 services that provide years of expertise and knowledge.",
      {
        widget: "digital1",
        delay: 500,
      });
    } else if (id === "d1") {
      message = this.createChatBotMessage("Website Design & Development");
      this.addMessageToState(message);
      message = this.createChatBotMessage("We can help you to find out what you need for your business! Please select one of services in the below.",
      {
        widget: "digital1a",
        delay: 500,
      });
    } else if (id === "d1a") {
      message = this.createChatBotMessage("Search Engine Optimization");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Awesome! You can easily submit free consulting for your project through our contact page.");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Do you want to go to contact page?",
      {
        widget: "digital1a1",
        delay: 500,
      });
    } else if (id === "d1b") {
      message = this.createChatBotMessage("Content Management System");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Awesome! You can easily submit free consulting for your project through our contact page.");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Do you want to go to contact page?",
      {
        widget: "digital1b1",
        delay: 500,
      });
    } else if (id === "d1c") {
      message = this.createChatBotMessage("Third-Party Authentication");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Awesome! You can easily submit free consulting for your project through our contact page.");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Do you want to go to contact page?",
      {
        widget: "digital1c1",
        delay: 500,
      });
    } else if (id === "d1d") {
      message = this.createChatBotMessage("E-commerce Integration");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Awesome! You can easily submit free consulting for your project through our contact page.");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Do you want to go to contact page?",
      {
        widget: "digital1d1",
        delay: 500,
      });
    } else if (id === "d1e") {
      message = this.createChatBotMessage("All of the above");
      message = this.createChatBotMessage("Awesome! You can easily submit free consulting for your project through our contact page.");
      this.addMessageToState(message);
      // need to update
      message = this.createChatBotMessage("Do you want to go to contact page?",
      {
        widget: "digital1e1",
        delay: 500,
      });
    } else if (id === "d1f") {
      message = this.createChatBotMessage("Back to previous menu");
      this.addMessageToState(message);
      message = this.createChatBotMessage("No problem! Let me bring you to the previous menu.");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Great! Cube Design offers 4 services that provide years of expertise and knowledge.",
      {
        widget: "digital1",
        delay: 500,
      });
    } else if (id === "d2") {
      message = this.createChatBotMessage("Admin Dashboard Implementation",
      {
        widget: "digital2a",
        delay: 500,
      });
    } else if (id === "d2a") {
      message = this.createChatBotMessage("Admin Dashboard Implementation");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Awesome! You can easily submit free consulting for your project through our contact page.",
      {
        // need to update??
        widget: "digital1e1",
        delay: 500,
      });
    } else if (id === "d2b") {
      message = this.createChatBotMessage("Back to previous menu");
      this.addMessageToState(message);
      message = this.createChatBotMessage("No problem! Let me bring you to the previous menu.");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Great! Cube Design offers 4 services that provide years of expertise and knowledge.",
      {
        widget: "digital1",
        delay: 500,
      });
    } else if (id === "d3") {
      message = this.createChatBotMessage("Branding Design",
      {
        widget: "digital3a",
        delay: 500,
      });
    } else if (id === "d3a") {
      message = this.createChatBotMessage("Visual Identity Design");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Awesome! You can easily submit free consulting for your project through our contact page.",
      {
        // need to update??
        widget: "digital1e1",
        delay: 500,
      });
    } else if (id === "d3b") {
      message = this.createChatBotMessage("Back to previous menu");
      this.addMessageToState(message);
      message = this.createChatBotMessage("No problem! Let me bring you to the previous menu.");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Great! Cube Design offers 4 services that provide years of expertise and knowledge.",
      {
        widget: "digital1",
        delay: 500,
      });
    } else if (id === "d4") {
      message = this.createChatBotMessage("Graphic Design",
      {
        widget: "digital4a",
        delay: 500,
      });
    } else if (id === "d4a") {
      message = this.createChatBotMessage("Poster Design");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Awesome! You can easily submit free consulting for your project through our contact page.",
      {
        // need to update??
        widget: "digital1e1",
        delay: 500,
      });
    } else if (id === "d4b") {
      message = this.createChatBotMessage("Menu Design");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Awesome! You can easily submit free consulting for your project through our contact page.",
      {
        // need to update??
        widget: "digital1e1",
        delay: 500,
      });
    } else if (id === "d4c") {
      message = this.createChatBotMessage("All of the above");
      message = this.createChatBotMessage("Awesome! You can easily submit free consulting for your project through our contact page.");
      this.addMessageToState(message);
      // need to update
      message = this.createChatBotMessage("Do you want to go to contact page?",
      {
        widget: "digital4c1",
        delay: 500,
      });
    } else if (id === "d4d") {
      message = this.createChatBotMessage("Back to previous menu");
      this.addMessageToState(message);
      message = this.createChatBotMessage("No problem! Let me bring you to the previous menu.");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Great! Cube Design offers 4 services that provide years of expertise and knowledge.",
      {
        widget: "digital1",
        delay: 500,
      });
    } else if (id === "d5") {
      message = this.createChatBotMessage("All of the above");
      message = this.createChatBotMessage("Awesome! You can easily submit free consulting for your project through our contact page.");
      this.addMessageToState(message);
      // need to update
      message = this.createChatBotMessage("Do you want to go to contact page?",
      {
        widget: "digital5a",
        delay: 500,
      });
    } else if (id === "d6") {
      message = this.createChatBotMessage("Back to previous menu");
      this.addMessageToState(message);
      message = this.createChatBotMessage("No problem! Let me bring you to the previous menu.");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Please select you are interested!", {
        widget: "options",
        delay: 500,
      });
    } else if (id === "i3") {
      message = this.createChatBotMessage("Complex");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Awesome! You can easily submit free consulting for your project through our contact page.");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Do you want to go to contact page?",
      {
        widget: "complex1",
        delay: 500,
      });
    } else if (id === "c1") {
      // need to update
      message = this.createChatBotMessage("ddd",
      {
        widget: "complex1",
        delay: 500,
      }); 
    } else if (id === "i4") {
      message = this.createChatBotMessage("I don't know");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Awesome! You can easily submit free consulting for your project through our contact page.");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Do you want to go to contact page?",
      {
        widget: "idontknow1",
        delay: 500,
      });
    } else if (id === "k1") {
      // need to update
      message = this.createChatBotMessage("ddd",
      {
        widget: "idontknow1",
        delay: 500,
      }); 
    } else if (id === "yes") {
      message = this.createChatBotMessage(" ");
      window.location.href = window.location.href.includes("ko") ? '/ko/contact' : '/contact';
    } else if (id === "no") {
      message = this.createChatBotMessage("No problem! Let me bring you to the first chat.");
      this.addMessageToState(message);
      message = this.createChatBotMessage("Please select you are interested!", {
        widget: "options",
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
