import Header from "../Header";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { React, useContext } from "react";

import ArrowIcon from "../../Icons/Arrow";
import { Context } from "../../Context";

const StaticHeader = (props) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { mobileMenu, setMobileMenu } = useContext(Context);

  console.log(props);
  const openMenu = () => {
    setMobileMenu(true);
  }

  // const { setShowMobileMenu } = useContext(showMobileMenu);

  return (
    <header className="fixed top-0 left-0 md:flex md:justify-center h-[70px] md:h-[95px] py-[9px] md:py-[24px] w-screen md:absolute top-0 left-0 bg-[#ffffff] bg-opacity-40 md:bg-inherit z-10">
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
        <li className="hidden md:flex items-center mr-8 w-[130px]">
          <Link href="/contact">{t("contactus")}</Link>
          <ArrowIcon
            className={`w-[15px] h-[15px] ml-[2px] ${
              router.pathname === "/contact" ? "text-cube_red" : ""
            }`}
          />
        </li>
      </Header>
      <div className="float-right block md:hidden pr-[30px] pl-[0px] md:ml-[0px] pointer-cursor">
        {/* Hamburger button */}
        <button onClick={openMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      {/* { */}
      {/* {visible && <DynamicMenu />} */}
      {/* className={`${visible ? "transform translateX(0)" : "transform -translate-x-full"}`}/>} */}
    </header>
  );
};

export default StaticHeader;
