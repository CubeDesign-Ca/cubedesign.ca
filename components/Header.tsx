import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';
import Button from '@mui/material/Button';

type Props = {
  companyName: string;
  printing: string;
  digital: string;
  contactUs: string;
};

const FLAGCONST = {
  width : 30,
  height : 15,
}

const Header: React.FC<Props> = ({ companyName, printing, digital, contactUs }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('ENG');
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  // const targetElementRef = useRef<HTMLDivElement>(null);

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const changeLanguage = (language: string) => {
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false);
    // Add logic to handle language change
  };

  // const handleNavigationClick = () => {
  //   if (targetElementRef.current) {
  //     targetElementRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <nav>
      <div>
        <Image src="/images/logo.png" alt="Company Logo" width={40} height={40} />
        <span>{companyName}</span>
      </div>
      <ul>
        <li>
          <Link href="/printing">{printing}</Link>
        </li>
        <li>
          <Link href="/digital">{digital}</Link>
        </li>
        <li>
          <Button variant="outlined" size="small">{contactUs}</Button>
        </li>
        {/* <li onClick={handleNavigationClick}>{contactUs}</li> */}
      </ul>
      <div>
        <div onClick={toggleLanguageDropdown}>
          {selectedLanguage === 'ENG' ? 
            (<Image src="/images/can.png" alt="Canada Flag" width={FLAGCONST.width} height={FLAGCONST.height} />) :
            (<Image src="/images/kor.png" alt="Korea Flag" width={FLAGCONST.width} height={FLAGCONST.height} />)}
          {isLanguageDropdownOpen && (
            <ul>
              <li onClick={() => changeLanguage('en')}>
                <div>
                <Image src="/images/can.png" alt="Canada Flag" width={FLAGCONST.width} height={FLAGCONST.height} />
                ENG
                </div>
              </li>
              <li onClick={() => changeLanguage('ko')}>
                <Image src="/images/kor.png" alt="Korea Flag" width={FLAGCONST.width} height={FLAGCONST.height} />
                KOR
              </li>

              <Link href="/" locale={changeTo}>
            <button>{t('change-locale', { changeTo })}</button>
          </Link>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
