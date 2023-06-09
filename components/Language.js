import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useTranslation, Trans } from 'next-i18next'

const Language = ({ image1, image2 }) => {
  // const [currentImage, setCurrentImage] = useState(image1);
  const [isImage1, setIsImage1] = useState(true);

  // const handleClick = () => {
  //   setCurrentImage(currentImage === image1 ? image2 : image1);
  // };
  const router = useRouter();
  const { t, i18n } = useTranslation('common')


  const handleClick = () => {
    setIsImage1(!isImage1);
  };

  const changeTo = router.locale === 'en' ? 'ko' : 'en'

  return (
    <Link href="/" locale={changeTo}>
        <img onClick={handleClick} src={isImage1 ? '/images/can.png' : '/images/kor.png'} className="w-40 h-20 p-0 border-none bg-transparent"/>
    </Link>
  );

  // return (
  //   <Link href="/" locale={changeTo}>
  //     <Language image1="/images/can.png" image2="/images/kor.png" />
  //     <button onClick={handleClick} className="w-40 h-20 p-0 border-none bg-transparent">
  //       <img src={currentImage} className="w-full h-full"/>
  //       <img src={isImage1 ? '/image1.jpg' : '/image2.jpg'} />

  //     </button>
  //   </Link>

  //   // <button onClick={handleClick} className="w-40 h-20 p-0 border-none bg-transparent">
  //   //   <img src={currentImage} className="w-full h-full"/>
  //   // </button>
  // );
};

export default Language;
