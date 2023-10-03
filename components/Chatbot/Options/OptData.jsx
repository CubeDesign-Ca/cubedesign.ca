class OptDataClass {
  constructor(t) {
    this.t = t;
    this.optData = {
      initOptions : [
        {
          imgFlag: true,
          imgSrc: "/images/chatbot/service_printing.svg",
          text: t('chatbot.i1'),
          id: "i1",
        },
        { 
          imgFlag: true,
          imgSrc: "/images/chatbot/service_digital.svg",
          text: t('chatbot.i2'),
          id: "i2"
        },
        { 
          imgFlag: true,
          imgSrc: "/images/chatbot/service_complex.svg",
          text: t('chatbot.i3'),
          id: "i3" 
        },
        { 
          imgFlag: true,
          imgSrc: "/images/chatbot/service_idk.svg",
          text: t('chatbot.i4'),
          id: "i4"
        }
      ],
      printing1 : [
        {
          text: t('chatbot.p1'),
          id: "p1"
        },
        { 
          text: t('chatbot.p2'),
          id: "p2" 
        },
        { 
          text: t('chatbot.p3'),
          id: "p3" 
        },
        { 
          text: t('chatbot.aota'),
          id: "p4"
        },
        { 
          text: t('chatbot.back'), 
          id: "p5" 
        }
      ],
      printing1a : [
        {
          text: t('chatbot.p1a'),
          id: "p1a"
        },
        { 
          text: t('chatbot.p1b'),
          id: "p1b" 
        },
        { 
          text: t('chatbot.p1c'),
          id: "p1c" 
        },
        { 
          text: t('chatbot.aota'),
          id: "p1d"
        },
        { 
          text: t('chatbot.back'), 
          id: "p1e" 
        },
      ],
      printing2a : [
        {
          text: t('chatbot.p2a'),
          id: "p2a"
        },
        { 
          text: t('chatbot.back'), 
          id: "p2b" 
        },
      ],
      printing3a : [
        {
          text: t('chatbot.p3a'), 
          id: "p3a"
        },
        { 
          text: t('chatbot.back'), 
          id: "p3b" 
        },
      ],
      digital1 : [
        {
          text: t('chatbot.d1'), 
          id: "d1"
        },
        { 
          text: t('chatbot.d2'), 
          id: "d2" 
        },
        { 
          text: t('chatbot.d3'), 
          id: "d3" 
        },
        { 
          text: t('chatbot.d4'), 
          id: "d4"
        },
        { 
          text: t('chatbot.aota'), 
          id: "d5" 
        },
        { 
          text: t('chatbot.back'), 
          id: "d6" 
        }
      ],
      digital1a : [
        {
          text: t('chatbot.d1a'), 
          id: "d1a"
        },
        { 
          text: t('chatbot.d1b'), 
          id: "d1b" 
        },
        { 
          text: t('chatbot.d1c'), 
          id: "d1c" 
        },
        { 
          text: t('chatbot.d1d'), 
          id: "d1d"
        },
        { 
          text: t('chatbot.aota'), 
          id: "d1e" 
        },
        { 
          text: t('chatbot.back'), 
          id: "d1f" 
        }
      ],
      digital2a : [
        {
          text: t('chatbot.d2a'), 
          id: "d2a"
        },
        { 
          text: t('chatbot.back'), 
          id: "d2b" 
        }
      ],
      digital3a : [
        {
          text: t('chatbot.d3a'), 
          id: "d3a"
        },
        { 
          text: t('chatbot.back'), 
          id: "d3b" 
        }
      ],
      digital4a : [
        {
          text: t('chatbot.d4a'), 
          id: "d4a"
        },
        {
          text: t('chatbot.d4b'), 
          id: "d4b"
        },
        {
          text: t('chatbot.aota'), 
          id: "d4c"
        },
        { 
          text: t('chatbot.back'), 
          id: "d4e" 
        }
      ],
      yesno : [
        {
          text: t('chatbot.yes'), 
          id: "yes"
        },
        { 
          text: t('chatbot.no'), 
          id: "no" 
        },
      ]
    
    };
  }

  getOptData(key) {
    return this.optData[key];
  }
}


export default OptDataClass;