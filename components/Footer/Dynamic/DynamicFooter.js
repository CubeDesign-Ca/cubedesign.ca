import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next'
import Link from 'next/link';
import JsonData from '../../JsonData';
import PhoneIcon from '../../Icons/Phone';

const DynamicFooter = () => {
  const { t } = useTranslation('common')
  const [prev, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const cur = window.pageYOffset;
      const visible = prev < cur && cur < (document.documentElement.scrollHeight - window.innerHeight);

      setPrevScrollPos(cur);
      setVisible(visible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prev]);


  return (
    <footer
      className={`fixed bottom-0 left-0 right-0 shadow-lg p-4 z-10 transition-transform duration-500 bg-cube_blue h-[70px] text-white ${
        visible ? 'transform translateY(0)' : 'transform translate-y-full'}`}>
      <div className="container mx-auto flex justify-between items-center text-white">
        <p className="text-lg">{t('consultus')}</p>
        <div className="flex items-center">
          <PhoneIcon class="w-6 h-6 mr-[5px]" />
          <JsonData jsonKey="phone" /><p className="text-lg mx-[40px]"> or</p>
          <Link className="bg-white text-cube_blue font-semibold px-[30px] py-[8px] text-[20px]" href="/contact">{t('contactus')}</Link>
        </div>
      </div>
    </footer>
    );
};

export default DynamicFooter;
