import { useTranslation } from 'next-i18next'
import JsonData from '../../JsonData';

import EmailIcon from '../../Icons/Email';
import PhoneIcon from '../../Icons/Phone';
import AddressIcon from '../../Icons/Address';
import FacebookIcon from '../../Icons/Facebook';
import InstagramIcon from '../../Icons/Instagram';

const Footer = () => {
  const { t } = useTranslation('common')

  return (
    <footer className="bg-cube_blue py-4 h-footer_h">
      <div className="mt-footer_tmargin ml-footer_lmargin mr-footer_lmargin text-white">
        <div className="container mx-auto">
          <div className="flex justify-start">
            <div className="flex items-center mr-6">
              <img src="/images/logo_white.png" alt="Company Logo" className="w-16 h-16" />
            </div>
            <div className="mr-8">
              <div className="flex justify-start mb-4 w-60">
                <div>
                  <EmailIcon className="h-6 w-6 mr-1" />
                </div>
                <JsonData jsonKey="email" />
              </div>
              <div className="flex justify-start w-60">
                <div>
                  <PhoneIcon className="h-5 w-5 mr-1" />
                </div>
                <JsonData jsonKey="phone" />
              </div>
            </div>
            <div className="ml-4">
              <div className="flex justify-start w-60">
                <div>
                  <AddressIcon className="h-6 w-6 mr-1" />
                </div>
                <JsonData jsonKey="address" />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-12 mb-8">
          <hr className="border-gray-500" />
        </div>
        <div className="container mx-auto mt-4 border-t border-gray-300 flex items-center justify-between">
          <div>&copy; <JsonData jsonKey="copyright" /></div>
          <div className="flex justify-start">
            <div className="mr-6">
              {/* Facebook icon */}
              <a href="https://www.facebook.com">
                <FacebookIcon className="h-6 w-6" />
              </a>
            </div>
            <div>
              {/* Instagram icon */}
              <a href="https://www.instagram.com">
                <InstagramIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
