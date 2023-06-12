import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useTranslation, Trans } from 'next-i18next'

const Language = ({ image1, image2 }) => {
  const [isImage1, setIsImage1] = useState(true);
  const router = useRouter();
  const { t, i18n } = useTranslation('common')

  const handleClick = () => {
    setIsImage1(!isImage1);
  };

  const changeTo = router.locale === 'en' ? 'ko' : 'en'

  return (
    <Link href="/" locale={changeTo} >
        <img onClick={handleClick} src={isImage1 ? '/images/can.png' : '/images/kor.png'} className="w-10 h-5 p-0 border-none bg-transparent"/>
    </Link>
  );

};

export default Language;
