import Language from "./Language";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Header = ({ logo, title, children }) => {
  const { t } = useTranslation("common");

  const logoImg = "/images/" + logo + ".png";

  return (
    <nav className="md:display-flex md:container font-white w-screen xl:min-w-[1140px] xl:max-w-[1140px]">
      <div className="float-left flex items-center h-[47px] pl-[20px] md:pl-[0px]">
        <Link className="hidden md:block w-[75px]" href="/">
          <img src={logoImg} alt="Company Logo" width={47} height={47} />
        </Link>
        <Link className="block md:hidden pr-[0px] md:mr-[0px]" href="/">
          <img src={logoImg} alt="Company Logo" width={45} height={45} />
        </Link>
        <Link className="hidden md:block ml-2" href="/">
          {title}
        </Link>
      </div>
      <div className="hidden float-right md:flex items-center h-[47px]">
        <ul className="md:flex items-center  ">
          {children}
          <li>
            <div>
              <Language />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
