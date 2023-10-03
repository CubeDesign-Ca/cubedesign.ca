import Header from "../Header";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import ArrowIcon from "../../Icons/Arrow";

const StaticHeader = () => {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    // <header className="h-[95px] py-[24px] px-[150px]">
    // <header className="h-[95px] py-[24px] px-[150px] absolute top-0 left-0 w-[100%] z-10 flex justify-center items-center">
    <header className="h-[70px] md:h-[95px] py-[9px] md:py-[24px] px-[5%] md:px-[10%] w-screen absolute top-0 left-0 bg-[#ffffff] bg-opacity-40 md:bg-inherit">
      <div className="">
        <Header logo={"logo"} title={t("company")}>
          <li className="hidden md:flex item-center mr-8">
            <Link href="/printing">{t("printing")}</Link>
            <div
              className={`w-[10px] h-[10px] ml-[2px] ${
                router.pathname === "/printing" ? "bg-cube_red" : ""
              }`}
            ></div>
          </li>
          <li className="hidden md:flex item-center mr-8">
            <Link href="/digital">{t("digital")}</Link>
            <div
              className={`w-[10px] h-[10px] ml-[2px] ${
                router.pathname === "/digital" ? "bg-cube_red" : ""
              }`}
            ></div>
          </li>
          <li className="hidden md:flex items-center mr-8">
            <Link href="/contact">{t("contactus")}</Link>
            <ArrowIcon
              className={`w-[15px] h-[15px] ml-[2px] ${
                router.pathname === "/contact" ? "text-cube_red" : ""
              }`}
            />
          </li>
        </Header>
      </div>
    </header>
  );
};

export default StaticHeader;
