import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <Link href="/new_lots">
      <div className="w-full absolute bottom-0 border-t-2 border-slate-400 hover:bg-amber-300 hover:opacity-90 text-3xl text-gray-700 font-bold text-center py-5">
        在庫追加
      </div>
    </Link>
  );
};

export default Footer;
