import { useTranslation } from "next-i18next";
import JsonData from "../../JsonData";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="bg-cube_blue h-footer_h flex justify-center items-center">
      <div className="flex">
        <div className="">
          <div className="text-white min-w-[1140px] max-w-[1140px]">
            <div className="container mx-auto">
              <div className="flex justify-center md:justify-start">
                <div className="flex items-top mr-6 ">
                  <img
                    src="/images/logo_white.png"
                    alt="Company Logo"
                    className="w-12 h-12"
                  />
                </div>
                <div className="">
                  <div className="mr-8 flex flex-col md:flex-row-reverse">
                    <div className="flex justify-start w-60 ">
                      <div className="flex-none">
                        <img
                          src="/images/footer_location.png"
                          className="h-[24px] w-[24px] mr-1"
                        />
                      </div>
                      <JsonData jsonKey="address" />
                    </div>
                    <div className="">
                      <div className="flex justify-start mb-4 w-60 ">
                        <div className="flex-none">
                          <img
                            src="/images/footer_email.png"
                            className="h-[24px] w-[24px] mr-1"
                          />
                        </div>
                        <JsonData jsonKey="email" />
                      </div>
                      <div className="flex justify-start w-60 ">
                        <div className="flex-none">
                          <img
                            src="/images/footer_phone.png"
                            className="h-[24px] w-[24px] mr-1"
                          />
                        </div>
                        <JsonData jsonKey="phone" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto mt-12 mb-8">
              <hr className="border-gray-500" />
            </div>
            <div className="container mx-auto mt-4 border-t border-gray-300 flex items-center justify-center md:justify-between">
              <div className="px-8 sm:px-0">
                &copy; <JsonData jsonKey="copyright" />
              </div>
              <div className="flex justify-start">
                <div className="mr-6">
                  {/* Facebook icon */}
                  <a href="https://www.facebook.com">
                    <img
                      src="/images/footer_facebook.png"
                      className="h-[42px] w-[42px]"
                    />
                  </a>
                </div>
                <div>
                  {/* Instagram icon */}
                  <a href="https://www.instagram.com">
                    <img
                      src="/images/footer_instagram.png"
                      className="h-[42px] w-[42px]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
