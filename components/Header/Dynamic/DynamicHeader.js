import Header from '../Header'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router';

const DynamicHeader = () => {
  const { t } = useTranslation('common')
  const [prev, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const cur = window.pageYOffset;
      const visible = prev > cur && cur > 0;

      setPrevScrollPos(cur);
      setVisible(visible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prev]);

  const router = useRouter();
  const isPrintingPage = router.pathname === '/printing';

  return (
    <header
      className={`fixed h-[95px] py-[24px] px-[150px] top-0 left-0 right-0 shadow-lg z-10 transition-transform duration-500 bg-cube_blue text-white ${
        visible ? 'transform translateY(0)' : 'transform -translate-y-full'}`}>
          <Header logo={"logo_white"} title={t('company_shorthand')} >
            <li className="flex item-center mr-8">
              <Link href="/printing">{t('dynamic_printing')}</Link>
              <div className="ml-[2px] w-[10px] h-[10px] bg-cube_red"></div>
            </li>
            <li className="flex item-center mr-8">
              <Link href="/digital">{t('dynamic_digital')}</Link>
              <div className="ml-[2px] w-[10px] h-[10px] bg-cube_red"></div>
            </li>
            <li className="flex items-center mr-8">
              <Link href="/contact">{t('contactus')}</Link>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-[15px] h-[15px] ml-[2px] text-cube_red">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </li>
          </Header>
    </header>
    );
};

export default DynamicHeader;
