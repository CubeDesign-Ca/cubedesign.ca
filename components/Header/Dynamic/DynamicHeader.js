import Header from "../Header";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import ArrowIcon from "../../Icons/Arrow";

const DynamicHeader = () => {
  const { t } = useTranslation("common");
  const [prev, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const cur = window.pageYOffset;
      const visible = prev > cur && cur > 0;

      setPrevScrollPos(cur);
      setVisible(visible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prev]);

  return (
    <header
      className={`hidden fixed h-[95px] py-[24px] top-0 left-0 right-0 md:flex justify-center items-center shadow-lg z-10 transition-transform duration-500 bg-cube_blue text-white ${
        visible ? "transform translateY(0)" : "transform -translate-y-full"
      }`}
    >
      <Header logo={"logo_white"} title={t("company_shorthand")}>
        <li className="hidden md:flex item-center mr-8">
          <Link
            href="/printing"
            className={`${router.pathname === "/printing" ? "font-bold" : ""}`}
          >
            {t("dynamic_printing")}
          </Link>
          <div
            className={`w-[10px] h-[10px] ml-[2px] ${
              router.pathname === "/printing" ? "bg-cube_red" : ""
            }`}
          ></div>
        </li>
        <li className="hidden md:flex item-center mr-8">
          <Link
            href="/digital"
            className={`${router.pathname === "/digital" ? "font-bold" : ""}`}
          >
            {t("dynamic_digital")}
          </Link>
          <div
            className={`w-[10px] h-[10px] ml-[2px] ${
              router.pathname === "/digital" ? "bg-cube_red" : ""
            }`}
          ></div>
        </li>
        <li className="hidden md:flex items-center mr-8">
          <Link
            href="/contact"
            className={`${router.pathname === "/contact" ? "font-bold" : ""}`}
          >
            {t("contactus")}
          </Link>
          <ArrowIcon
            className={`w-[15px] h-[15px] ml-[2px] ${
              router.pathname === "/contact" ? "text-cube_red" : ""
            }`}
          />
        </li>
      </Header>
    </header>
  );
};

export default DynamicHeader;
