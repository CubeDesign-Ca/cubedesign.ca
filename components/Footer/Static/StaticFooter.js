import { useTranslation } from "next-i18next";
import JsonData from "../../JsonData";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="bg-cube_blue h-m_footer_h md:h-footer_h flex justify-center items-center">
      <div className="flex">
        <div className="">
          <div className="text-white md:min-w-[1140px] max-w-[1140px]">
            <div className="container mx-auto">
              <div className="flex justify-center md:justify-start">
                <div className="flex items-top mr-[30px] md:mr-[70px]">
                  <img
                    src="/images/logo_white.png"
                    alt="Company Logo"
                    className="w-[39px] h-[39px] md:w-[68px] md:h-[68px]"
                  />
                </div>
                <div className="text-[16px]">
                  <div className="mr-[200px] md:mr-8 flex flex-col md:flex-row-reverse">
                    <div className="flex justify-start max-w-[270px] md:w-60 mb-[15px] md:mb-[0px]">
                      <div className="flex-none">
                        <img
                          src="/images/footer_location.png"
                          className="h-[24px] w-[24px] mr-[25px]"
                        />
                      </div>
                      <JsonData jsonKey="address" />
                    </div>
                    <div className="">
                      <div className="flex justify-start w-[270px] mb-[15px] md:mb-4">
                        <div className="flex-none">
                          <img
                            src="/images/footer_email.png"
                            className="h-[24px] w-[24px] mr-[25px]"
                          />
                        </div>
                        <JsonData jsonKey="email" />
                      </div>
                      <div className="flex justify-start w-[270px]">
                        <div className="flex-none">
                          <img
                            src="/images/footer_phone.png"
                            className="h-[22px] w-[22px] mr-[27px]"
                          />
                        </div>
                        <JsonData jsonKey="phone" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto mt-[72px] mb-[60px] md:mb-[12px]">
              <hr className="border-white" />
            </div>
            <div className="container mx-auto border-t border-gray-300 flex items-center justify-between md:justify-between">
              <div className="px-0">
                &copy; <JsonData jsonKey="copyright" />
              </div>
              <div className="flex justify-start">
                <div className="mr-6">
                  {/* Facebook icon */}
                  <a href="https://www.facebook.com/cubedesignca/">
                    <img
                      src="/images/footer_facebook.png"
                      className="h-[42px] w-[42px]"
                    />
                  </a>
                </div>
                <div>
                  {/* Instagram icon */}
                  <a href="https://www.instagram.com/cubedesignca/">
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
