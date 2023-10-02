import { useTranslation } from 'next-i18next'
import JsonData from '../../JsonData';

const Footer = () => {
  const { t } = useTranslation('common')

  return (
    <footer className="bg-cube_blue h-footer_h flex justify-center items-center">
      <div className="text-white min-w-[1140px] max-w-[1140px]">
        <div className="container mx-auto">
          <div className="flex justify-start">
            <div className="flex items-center mr-6">
              <img src="/images/logo_white.png" alt="Company Logo" className="w-16 h-16" />
            </div>
            <div className="mr-8">
              <div className="flex justify-start mb-4 w-60">
                <div className="flex-none">
                  <img src="/images/footer_email_icon.png" className="h-[24px] w-[24px] mr-1" />
                </div>
                <JsonData jsonKey="email" />
              </div>
              <div className="flex justify-start w-60">
                <div className="flex-none">
                  <img src="/images/footer_phone_icon.png" className="h-[24px] w-[24px] mr-1" />
                </div>
                <JsonData jsonKey="phone" />
              </div>
            </div>
            <div className="ml-4">
              <div className="flex justify-start w-60">
                <div className="flex-none">
                  <img src="/images/footer_location_icon.png" className="h-[24px] w-[24px] mr-1" />
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
                <img src="/images/footer_facebook_icon.png" className="h-[42px] w-[42px]" />
              </a>
            </div>
            <div>
              {/* Instagram icon */}
              <a href="https://www.instagram.com">
                <img src="/images/footer_insta_icon.png" className="h-[42px] w-[42px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
