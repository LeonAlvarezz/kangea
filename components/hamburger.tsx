import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';
type Props = {
  handleMenuToggle: void;
  menuOpen: bool;
};
const Hamburger = () => {
  return (
    <div>
      <Menu right width='50%'>
        <Link href='/'>
          <p>Home</p>
        </Link>
        <Link href='/jobs'>
          <p>Jobs</p>
        </Link>
        <Link href='/about'>
          <p>About</p>
        </Link>
        <Link href='/contact'>
          <p>Contact</p>
        </Link>
        <Link href='/add-job'>
          <p>Add Job</p>
        </Link>
      </Menu>
    </div>
  );
};
export default Hamburger;
