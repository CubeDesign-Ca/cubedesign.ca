import Header from '../Header'
import Link from 'next/link';
import { useTranslation } from 'next-i18next'

const StaticHeader = () => {
  const { t } = useTranslation('common')

  return (
    <header className="h-[95px] py-[24px] px-[150px]">
      <Header logo={"logo"} title={t('company')} >
        <li className="mr-8">
          <Link href="/printing">{t('printing')}</Link>
        </li>
        <li className="mr-8">
          <Link href="/digital">{t('digital')}</Link>
        </li>
        <li className="flex items-center mr-8">
          <Link href="/contact">{t('contactus')}</Link>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-[15px] h-[15px] ml-[2px]">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </li>
      </Header>
    </header>
    );
};

export default StaticHeader;
