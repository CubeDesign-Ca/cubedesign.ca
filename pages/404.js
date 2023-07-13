import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import DynamicHeader from '../components/Header/Dynamic/DynamicHeader';
import StaticHeader from '../components/Header/Static/StaticHeader';

import DynamicFooter from '../components/Footer/Dynamic/DynamicFooter';
import StaticFooter from '../components/Footer/Static/StaticFooter';

const Homepage = (_props) => {
  const router = useRouter()
  const { t, i18n } = useTranslation('common')
  return (
    <div>
        <StaticHeader />
        <div className="flex flex-col pt-[30px] pl-[150px]">
            <div className="text-[#C83832] text-[20px] mb-[10px]">
                404 Error
            </div>
            <h1 className="text-4xl font-bold mb-[20px]">Page Not Found</h1>
            <p className="text-[20px]">We tried but we couldn't find the page you'are looking for.</p>
            <p className="mb-[10px] text-[20px]">We will do better next time.</p>
            <p className="mb-[12px] text-[20px]">We want to help you the best we can.</p>
            <div>
                <button className="bg-cube_blue text-white p-[10px] w-[225px] text-[20px] mr-[30px]">Back To Home</button>
                <button className="bg-cube_blue text-white p-[10px] w-[225px] text-[20px]">Contact Us</button>
            </div>
        </div>
        {/* <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600">
            Sorry, the page you are looking for does not exist.
        </p>
        </div> */}
    </div>
  );

//   return (
//     <>
//       <main>
//         <StaticHeader />
//         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         <StaticFooter />

//       </main>
//     </>
//   )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'common',
    ])),
  },
})

export default Homepage
