import React from 'react';
import Link from 'next/link';

const MenuBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/printing">Printing</Link>
        </li>
        <li>
          <Link href="/digital">Digital</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuBar;
