import { React, useContext } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import Link from "next/link";

import ArrowIcon from "../../Icons/Arrow";
import Language from "../Language";
import JsonData from "../../JsonData";
import { Context } from "../../Context";

const DynamicMenu = () => {
    const { t } = useTranslation("common"); 
    const router = useRouter();
    const { mobileMenu, setMobileMenu } = useContext(Context);

    const closeMenu = () => {
        setMobileMenu(false);
    }

    return (
        <div className={`md:hidden fixed top-0 left-0 right-0 bg-cube_blue/95 w-screen h-screen z-20 backdrop-blur-sm transition-transform duration-500 overflow-hidden ${
            mobileMenu ? "transform translateY(0)" : "transform -translate-y-full"}`}>
            {/* mobileMenu ? "transform translateX(0)" : "transform -translate-x-full"}`}> */}
            <Link href="/" onClick={closeMenu}>
                <img src="../../images/logo_white.png" alt="Company Logo" className="w-[45px] h-[45px] m-[20px] float-left cursor-pointer" />
            </Link>

            <img className="w-[60px] h-[60px] my-[15px] mx-[20px] float-right cursor-pointer" onClick={closeMenu} src="../../images/cross_white.svg" />
            <div className="mt-[165px] ml-[20px] text-5xl text-white">
                <div className="flex item-center mr-8 mb-[40px]">
                    <Link
                        href="/printing"
                        onClick={closeMenu}
                        className={`${router.pathname === "/printing" ? "font-bold" : ""}`}
                    >
                        {t("printing")}
                    </Link>
                    <div className={`w-[15px] h-[15px] ml-[15px] ${router.pathname === "/printing" ? "bg-cube_red" : ""}`} />
                </div>
                <div className="flex item-center mr-8 mb-[40px]">
                    <Link
                        href="/digital"
                        onClick={closeMenu}
                        className={`${router.pathname === "/digital" ? "font-bold" : ""}`}
                    >
                        {t("digital")}
                    </Link>
                    <div className={`w-[15px] h-[15px] ml-[15px] ${router.pathname === "/digital" ? "bg-cube_red" : ""}`} />
                </div>
                <div className="flex items-center mr-8 mb-[40px]">
                    <Link
                        href="/contact"
                        onClick={closeMenu}
                        className={`${router.pathname === "/contact" ? "font-bold" : ""}`}
                    >
                        {t("contactus")}
                    </Link>
                    <ArrowIcon className={`w-[40px] h-[40px] ml-[25px] mt-[5px] ${router.pathname === "/contact" ? "text-cube_red" : ""}`} />
                </div>
                <div className="text-lg pt-[20px]">
                    <div onClick={closeMenu}>
                        <Language/>
                    </div>
                    <div className="flex justify-start mt-20 mb-8 w-[270px]">
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
                                className="h-[24px] w-[24px] mr-[25px]"
                            />
                        </div>
                        <JsonData jsonKey="phone" />
                    </div>
                    <div className="mt-10">
                        <div className="mb-3">Follow us</div>
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
    );
};

export default DynamicMenu;
