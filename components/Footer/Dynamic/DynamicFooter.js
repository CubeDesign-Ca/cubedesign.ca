import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next'
import Link from 'next/link';
import JsonData from '../../JsonData';

const DynamicFooter = () => {
  const { t } = useTranslation('common')
  const [prev, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const cur = window.pageYOffset;
      const visible = prev < cur && cur < (document.documentElement.scrollHeight - window.innerHeight - 300);

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
      className={`fixed bottom-0 left-0 right-0 shadow-lg flex w-screen justify-center items-center z-10 transition-transform duration-500 bg-cube_blue h-[95px] text-white ${
        visible ? 'transform translateY(0)' : 'transform translate-y-full'}`}>
      <div className="container flex justify-between items-center text-white text-[24px] xl:min-w-[1140px] xl:max-w-[1140px]">
        <p className="hidden md:block">{t('consultus')}</p>
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center">
            <img src="/images/footer_phone.png" className="w-[24px] h-[24px] mr-[9px]" />
            <JsonData jsonKey="phone" />
          </div>
          <p className="mx-[40px] hidden md:block"> or</p>
          <div className="w-[200px]">
            <div className="bg-white px-[30px] py-[8px] text-center w-full">
              <Link
                className="text-cube_blue font-medium border-b-5 border-solid border-cube_red"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                href="/contact"
              >
                {t('contactus')}
              </Link>
            </div>
            {isHovered && <div className="absolute w-[200px] bottom-[17px] h-[5px] bg-cube_red z-2">

            </div>}
            
          </div>
        </div>
      </div>
    </footer>
    );
};

export default DynamicFooter;
