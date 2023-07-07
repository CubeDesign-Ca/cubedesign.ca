import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const Language = ({ image1, image2 }) => {
  const [language, setLanguage] = useState(true);
  const router = useRouter();
  const { t, i18n } = useTranslation('common')

  const handleClick = () => {
    setLanguage(!language);
  };

  const changeTo = router.locale === 'en' ? 'ko' : 'en'

  return (
    <Link href="/" locale={changeTo} >
      <div onClick={handleClick} >{language ? "한국어" : "ENG"}</div>
    </Link>
  );

};

export default Language;
