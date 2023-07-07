import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next'
import Link from 'next/link';

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
          <p className="text-lg mr-2">123-456-7890 or</p>
          <Link className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded" href="/contact">{t('contactus')}</Link>
        </div>
      </div>
    </footer>
    );
};

export default DynamicFooter;
