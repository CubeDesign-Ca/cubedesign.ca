class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, setStepFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.setStep = setStepFunc;
    this.createClientMessage = createClientMessage;
  }

  answer = (id, t) => {
    console.log(this.props);
    let message = null;
    if (id === "i1") {
      message = this.createChatBotMessage(t('chatbot.i1'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.offer3'),
      {
        widget: "printing1",
      });
    } else if (id === "p1") {
      message = this.createChatBotMessage(t('chatbot.p1'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.we_can_help'),
      {
        widget: "printing1a",
      });
    } else if (id === "p1a") {
      message = this.createChatBotMessage(t('chatbot.p1a'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.please_contact'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.go_contact'),
      {
        widget: "printing1a1",
      });
    } else if (id === "p1b") {
      message = this.createChatBotMessage(t('chatbot.p1b'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.please_contact'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.go_contact'),
      {
        widget: "printing1a1",
      });
    } else if (id === "p1c") {
      message = this.createChatBotMessage(t('chatbot.p1c'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.please_contact'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.go_contact'),
      {
        widget: "printing1a1",
      });
    } else if (id === "p1d") {
      message = this.createChatBotMessage(t('chatbot.aota'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.please_contact'));
      this.addMessageToState(message);
      // need to update
      message = this.createChatBotMessage(t('chatbot.go_contact'),
      {
        widget: "printing1a1",
      });
    } else if (id === "p1e") {
      message = this.createChatBotMessage(t('chatbot.backThe'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.go_prev'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.offer3'),
      {
        widget: "printing1",
      });
    } else if (id === "p2") {
      //need to update  
      message = this.createChatBotMessage(t('chatbot.p2'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.p2_desc'),
      {
        widget: "printing2a",
      });
    } else if (id === "p2a") {
      message = this.createChatBotMessage(t('chatbot.p2a'),
      {
        // need to update
        widget: "printing2a",
      });
    } else if (id === "p2b") {
      message = this.createChatBotMessage(t('chatbot.backThe'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.go_prev'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.offer3'),
      {
        widget: "printing1",
      });
    } else if (id === "p3") {
      // need to update
      message = this.createChatBotMessage(t('chatbot.p3'),
      {
        widget: "printing3a",
      });
    } else if (id === "p3a") {
      message = this.createChatBotMessage(t('chatbot.p3a'),
      {
        // need to update
        widget: "printing3a",
      });
    } else if (id === "p3b") {
      message = this.createChatBotMessage(t('chatbot.backThe'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.go_prev'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.offer3'),
      {
        widget: "printing1",
      });
    } else if (id === "p4") {
      message = this.createChatBotMessage(t('chatbot.aota'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.please_contact'));
      this.addMessageToState(message);
      // need to update
      message = this.createChatBotMessage(t('chatbot.go_contact'),
      {
        widget: "printing4a",
      });
    } else if (id === "p5") {
      message = this.createChatBotMessage(t('chatbot.backThe'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.go_frist'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.init2'), {
        widget: "options",
      });
    } else if (id === "i2") {
      message = this.createChatBotMessage(t('chatbot.i2'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.offer4'),
      {
        widget: "digital1",
      });
    } else if (id === "d1") {
      message = this.createChatBotMessage(t('chatbot.d1'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.we_can_help'),
      {
        widget: "digital1a",
      });
    } else if (id === "d1a") {
      message = this.createChatBotMessage(t('chatbot.d1a'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.please_contact'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.go_contact'),
      {
        widget: "digital1a1",
      });
    } else if (id === "d1b") {
      message = this.createChatBotMessage(t('chatbot.d1b'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.please_contact'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.go_contact'),
      {
        widget: "digital1b1",
      });
    } else if (id === "d1c") {
      message = this.createChatBotMessage(t('chatbot.d1c'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.please_contact'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.go_contact'),
      {
        widget: "digital1c1",
      });
    } else if (id === "d1d") {
      message = this.createChatBotMessage(t('chatbot.d1d'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.please_contact'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.go_contact'),
      {
        widget: "digital1d1",
      });
    } else if (id === "d1e") {
      message = this.createChatBotMessage(t('chatbot.aota'));
      message = this.createChatBotMessage(t('chatbot.please_contact'));
      this.addMessageToState(message);
      // need to update
      message = this.createChatBotMessage(t('chatbot.go_contact'),
      {
        widget: "digital1e1",
      });
    } else if (id === "d1f") {
      message = this.createChatBotMessage(t('chatbot.back'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.go_prev'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.offer4'),
      {
        widget: "digital1",
      });
    } else if (id === "d2") {
      message = this.createChatBotMessage(t('chatbot.d2'),
      {
        widget: "digital2a",
      });
    } else if (id === "d2a") {
      message = this.createChatBotMessage(t('chatbot.d2a'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.please_contact'),
      {
        // need to update??
        widget: "digital1e1",
      });
    } else if (id === "d2b") {
      message = this.createChatBotMessage(t('chatbot.back'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.go_prev'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.offer4'),
      {
        widget: "digital1",
      });
    } else if (id === "d3") {
      message = this.createChatBotMessage(t('chatbot.d3'),
      {
        widget: "digital3a",
      });
    } else if (id === "d3a") {
      message = this.createChatBotMessage(t('chatbot.d3a'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.please_contact'),
      {
        // need to update??
        widget: "digital1e1",
      });
    } else if (id === "d3b") {
      message = this.createChatBotMessage(t('chatbot.back'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.go_prev'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.offer4'),
      {
        widget: "digital1",
      });
    } else if (id === "d4") {
      message = this.createChatBotMessage(t('chatbot.d4'),
      {
        widget: "digital4a",
      });
    } else if (id === "d4a") {
      message = this.createChatBotMessage(t('chatbot.d4a'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.please_contact'),
      {
        // need to update??
        widget: "digital1e1",
      });
    } else if (id === "d4b") {
      message = this.createChatBotMessage(t('chatbot.d4b'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.please_contact'),
      {
        // need to update??
        widget: "digital1e1",
      });
    } else if (id === "d4c") {
      message = this.createChatBotMessage(t('chatbot.aota'));
      message = this.createChatBotMessage(t('chatbot.please_contact'));
      this.addMessageToState(message);
      // need to update
      message = this.createChatBotMessage(t('chatbot.go_contact'),
      {
        widget: "digital4c1",
      });
    } else if (id === "d4d") {
      message = this.createChatBotMessage(t('chatbot.back'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.go_prev'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.offer4'),
      {
        widget: "digital1",
      });
    } else if (id === "d5") {
      message = this.createChatBotMessage(t('chatbot.aota'));
      message = this.createChatBotMessage(t('chatbot.please_contact'));
      this.addMessageToState(message);
      // need to update
      message = this.createChatBotMessage(t('chatbot.go_contact'),
      {
        widget: "digital5a",
      });
    } else if (id === "d6") {
      message = this.createChatBotMessage(t('chatbot.back'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.go_prev'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.init2'), {
        widget: "options",
      });
    } else if (id === "i3") {
      message = this.createChatBotMessage(t('chatbot.i3'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.please_contact'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.go_contact'),
      {
        widget: "complex1",
      });
    } else if (id === "c1") {
      // need to update
      message = this.createChatBotMessage(t('chatbot.c1'),
      {
        widget: "complex1",
      }); 
    } else if (id === "i4") {
      message = this.createChatBotMessage(t('chatbot.i4'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.please_contact'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.go_contact'),
      {
        widget: "idontknow1",
      });
    } else if (id === "k1") {
      // need to update
      message = this.createChatBotMessage(t('chatbot.k1'),
      {
        widget: "idontknow1",
      }); 
    } else if (id === "yes") {
      message = this.createChatBotMessage("Redirecting to contact page ..");
      window.location.href = window.location.href.includes("ko") ? '/ko/contact' : '/contact';
    } else if (id === "no") {
      message = this.createChatBotMessage(t('chatbot.go_frist'));
      this.addMessageToState(message);
      message = this.createChatBotMessage(t('chatbot.init2'), {
        widget: "options",
      });
    } else {
      message = this.createChatBotMessage(t('chatbot.wrong'));
    }

    this.addMessageToState(message);
  }

  addClientMessage = (text) => {
    const message = this.createClientMessage(text);
    this.addMessageToState(message);
  }

  showMenu() {
    const message = this.createChatBotMessage(t('chatbot.main_menu'), {
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
