import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'

const en = 'en';
const ko = 'ko';
const ENG = 'ENG';
const KOR = '한국어';

const Language = () => {
  const [language, setLanguage] = useState(true);
  const [path, setPath] = useState("");
  const router = useRouter();

  const handleClick = (e) => {
    setLanguage(!language);

    // Close Chatbot if opened
    if (document.getElementById("chatbot_icon") != null && document.getElementById("chatbot_modal") != null) {
      document.getElementById("chatbot_icon").click();
    }
  };

  useEffect(() => {
    setPath(window.location.pathname.replace("/" + ko, ""));
  })

  const changeTo = router.locale === en ? ko : en;

  return (
    <Link href={path} locale={changeTo} >
      <div onClick={handleClick} >{router.locale === en ? KOR : ENG}</div>
    </Link>
  );
};

export default Language;
