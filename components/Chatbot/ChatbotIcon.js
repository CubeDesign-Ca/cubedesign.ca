import React, { useEffect, useState } from 'react';

const ChatbotButton = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating((prev) => !prev);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const imageUrl = isAnimating ? '/images/ChatbotIcon-dynamic.gif' : '/images/ChatbotIcon-static.png'; 

  const handleClick = () => {
    alert('Button clicked!');
    // You can put any logic or actions you want here
  };

  return (
    <button onClick={handleClick} className="h-[75px] w-[75px] fixed bottom-[150px] right-20">
      <img src={imageUrl} alt="Chatbot Button" />
    </button>
  );
};

export default ChatbotButton;
