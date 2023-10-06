import Language from "./Language";
import Link from 'next/link';
import { useTranslation } from 'next-i18next'

const Header = ({ logo, title, children  }) => {
  const { t } = useTranslation('common')

  const logoImg = '/images/' + logo + ".png";
  return (
    // <nav className={'flex items-center justify-between font-white min-w-[1140px] max-w-[1140px]'}>
    <nav className={"flex items-center justify-between font-white "}>
      <div className="flex items-center">
        <Link className="hidden md:block" href="/">
          <img src={logoImg} alt="Company Logo" width={47} height={47} />
        </Link>
        <Link className="block md:hidden" href="/">
          <img src={logoImg} alt="Company Logo" width={45} height={45} />
        </Link>
        <Link className="hidden md:block ml-2" href="/">
          {title}
        </Link>
      </div>
      <ul className="hidden md:flex items-center">
        {children}
        <li>
          <div>
            <Language />
          </div>
        </li>
      </ul>
      <div className="block md:hidden pr-[2%]">
        <button>
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
    </nav>
  );
};

export default Header;
