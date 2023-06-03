import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const Header = () => {
  const totalValue = useSelector((state) => state.totalValue);
  const totalItems = useSelector((state) => state.totalItems);

  return (
    <div className="w-full bg-slate-200 py-4 ">
      <div className="container mx-auto flex justify-between">
        <div>
          <Link href="/" className="font-extrabold">
            MY-COOL-SHOP
          </Link>
        </div>
        <div className="font-light uppercase">
          <Link href="/about">About</Link>
          &nbsp; |&nbsp;
          <Link href="/cart">Cart</Link>: ${totalValue} / {totalItems}
        </div>
      </div>
    </div>
  );
};

export default Header;
