'use client';

import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full absolute top-0 z-10 mt-12 md:mt-6 flex items-center justify-center">
      <Link href='/' className="text-gray-200 text-xl md:text-3xl font-bold cursor-pointer w-1/2 text-center py-4 rounded-xl bg-[linear-gradient(135deg,#222F3D,#000000)]">
        MoodFlicks
      </Link>
    </div>
  );
};

export default Navbar;