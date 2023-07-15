import Link from 'next/link'

import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import StaticHeader from '../components/Header/Static/StaticHeader';
import StaticFooter from '../components/Footer/Static/StaticFooter';

const PageNotFound = (_props) => {
  const router = useRouter()
  const { t } = useTranslation('common')
  
  return (
    <div>
        <StaticHeader />
        <div className="flex flex-col pt-[30px] pl-[150px]">
            <div className="text-[#C83832] text-[20px] mb-[10px]">
                404 Error
            </div>
            <h1 className="text-4xl font-bold mb-[20px]">{t('pagenotfoundheader')}</h1>
            <p className="text-[20px]">{t('pagenotfoundmsg1')}</p>
            <p className="mb-[10px] text-[20px]">{t('pagenotfoundmsg2')}</p>
            <p className="mb-[20px] text-[20px]">{t('pagenotfoundmsg3')}</p>
            <div className="mb-[10px]">
              <Link className="bg-cube_blue text-white px-[30px] py-[10px] w-[225px] text-[20px] mr-[30px]" href="/">{t('backtohome')}</Link>
              <Link className="bg-cube_blue text-white px-[30px] py-[10px] w-[225px] text-[20px]" href="/contact">{t('contactus')}</Link>
            </div>
            <div className="flex items-center justify-end">
              <img src="/images/404.jpg" alt="Company Logo" className="h-auto" />
            </div>
        </div>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'common',
    ])),
  },
})
export default PageNotFound
