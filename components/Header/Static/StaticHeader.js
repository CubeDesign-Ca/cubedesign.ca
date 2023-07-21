import Header from '../Header'
import Link from 'next/link';
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router';

import ArrowIcon from '../../Icons/Arrow';

const StaticHeader = () => {
  const { t } = useTranslation('common')
  const router = useRouter();

  return (
    <header className="h-[95px] py-[24px] px-[150px]">
      <Header logo={"logo"} title={t('company')} >
      <li className="flex item-center mr-8">
          <Link href="/printing">{t('printing')}</Link>
          <div className={`w-[10px] h-[10px] ml-[2px] ${router.pathname === '/printing' ? 'bg-cube_red' : ''}`}></div>
        </li>
        <li className="flex item-center mr-8">
          <Link href="/digital">{t('digital')}</Link>
          <div className={`w-[10px] h-[10px] ml-[2px] ${router.pathname === '/digital' ? 'bg-cube_red' : ''}`}></div>
        </li>
        <li className="flex items-center mr-8">
          <Link href="/contact">{t('contactus')}</Link>
          <ArrowIcon className={`w-[15px] h-[15px] ml-[2px] ${router.pathname === '/contact' ? 'text-cube_red' : ''}`} />
        </li>
      </Header>
    </header>
    );
};

export default StaticHeader;
