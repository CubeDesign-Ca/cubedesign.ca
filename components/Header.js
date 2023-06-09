import Image from 'next/image';
import Link from 'next/link';
import Language from "./Language";

const FLAGCONST = {
  width : 30,
  height : 15,
}

const Header = ({ companyName, printing, digital, contactus }) => {
  return (
    <nav>
      <div class="main">
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
          <Link href="/contact">3{contactus}</Link>
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
