import Image from 'next/image';
import Language from "./Language";
import Link from 'next/link';
import { useTranslation } from 'next-i18next'

const Header = ({ logo, title, children  }) => {
  const { t } = useTranslation('common')

  const logoImg = '/images/' + logo + ".png";
  return (
    <nav className={`flex items-center justify-between font-white`}>
      <div className="flex items-center">
        <Image src={logoImg} alt="Company Logo" width={47} height={47} />
        <Link className="ml-2" href="/">{title}</Link>
      </div>
      <ul className="flex items-center">
        { children }
        <li className="mr-8">
          <div>
            <Language />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
