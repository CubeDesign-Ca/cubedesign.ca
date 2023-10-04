import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'

const en = 'en';
const ko = 'ko';
const ENG = 'ENG';
const KOR = '한국어';

const Language = () => {
  const [language, setLanguage] = useState(true);
  const router = useRouter();

  const handleClick = () => {
    setLanguage(!language);
    if (document.getElementById("chatbot_icon") != null && document.getElementById("chatbot_modal") != null) {
      document.getElementById("chatbot_icon").click();
    }
  };

  const changeTo = router.locale === en ? ko : en

  return (
    <Link href="/" locale={changeTo} >
      <div onClick={handleClick} >{router.locale === en ? KOR : ENG}</div>
    </Link>
  );
};

export default Language;
