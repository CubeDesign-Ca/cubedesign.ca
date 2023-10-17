import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next'
import Link from 'next/link';
import JsonData from '../../JsonData';
import PhoneIcon from '../../Icons/Phone';

const DynamicFooter = () => {
  const { t } = useTranslation('common')
  const [prev, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
      className={`fixed bottom-0 left-0 right-0 shadow-lg flex justify-center items-center z-10 transition-transform duration-500 bg-cube_blue h-[70px] text-white ${
        visible ? 'transform translateY(0)' : 'transform translate-y-full'}`}>
      <div className="container flex justify-between items-center text-white min-w-[1140px] max-w-[1140px]">
        <p className="text-lg">{t('consultus')}</p>
        <div className="flex items-center">
          <PhoneIcon className="w-6 h-6 mr-[5px]" />
          <JsonData jsonKey="phone" /><p className="text-lg mx-[40px]"> or</p>
          <div>
            <Link
              // className="bg-white text-cube_blue font-semibold px-[30px] py-[8px] text-[20px]"
              className="bg-white text-cube_blue font-semibold px-[30px] py-[8px] text-[20px] border-b-5 border-solid border-cube_red"
              href="/contact"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {t('contactus')}
            </Link>
            {isHovered && <div className="absolute w-[169px] bottom-[12px] h-[5px] bg-cube_red z-2">

            </div>}
            
          </div>
        </div>
      </div>
    </footer>
    );
};

export default DynamicFooter;
