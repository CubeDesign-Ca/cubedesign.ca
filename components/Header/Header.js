import Image from 'next/image';
import Link from 'next/link';
import Language from "./Language";
import { useTranslation, Trans } from 'next-i18next'

const Header = ({ color }) => {
  const { t } = useTranslation('common')

  const bgColor = "bg-" + (color ? color : "transparent");

  return (
    <nav className={`flex items-center justify-between ${bgColor} p-4`}>
      <div className="flex items-center">
        <Image src="/images/logo.png" alt="Company Logo" width={40} height={40} />
        <span className="ml-2">{t('company')}</span>
      </div>
      <ul className="flex items-center space-x-4">
        <li>
          <Link href="/printing">{t('printing')}</Link>
        </li>
        <li>
          <Link href="/digital">{t('digital')}</Link>
        </li>
        <li>
          <Link href="/contact">{t('contactus')}</Link>
        </li>
        <li>
          <div>
            <Language />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
