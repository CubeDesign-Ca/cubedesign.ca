import pkg from 'next-i18next/package.json'
import { useTranslation } from 'next-i18next'

const Footer = ({ global }) => {
  const { t } = useTranslation('common')

  return (
    // <footer>
    //   <p>{t('description')}</p>
    //   <p>next-i18next v{pkg.version}</p>
    //   <p></p>
    // </footer>
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/images/logo.png" alt="Company Logo" className="h-8 mr-2" />
          <span>{t('company')}</span>
        </div>
        <div>
          <p>Email: </p>
          <p>Phone: </p>
          <p>Address: </p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-4 border-t border-gray-300 flex items-center justify-between">
        <div>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</div>
        <div>Terms of Service | Privacy Policy</div>
      </div>
    </footer>

  )
}

export default Footer;
