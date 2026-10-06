import Image from "next/image";
import React from "react";
import NavLinks from "./NavLinks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });
  return (
    <header className="relative mx-auto px-4 py-4 container">
      <div className="flex flex-col items-center justify-center gap-2 sm:flex-row p-4">
        <Image src="/logo.webp" alt="Logo" width={50} height={50} />
        <div className="flex flex-col items-center sm:items-start">
          <span className="text-2xl font-bold text-red-700">
            Bangla News 24
          </span>
          <span className="text-xs text-gray-600">{date}</span>
        </div>
      </div>

      <div className="absolute right-4 top-7 flex items-center gap-2 text-sm sm:right-6 sm:top-9 md:right-8 lg:right-9">
        <button className="btn btn-ghost px-2 text-neutral-700 transition-colors hover:text-red-700 sm:px-3">
          সাইন ইন
        </button>
        <button className="btn bg-rose-700 px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-rose-800 sm:px-4">
          সাইন আপ
        </button>
      </div>
      <NavLinks />
    </header>
  );
};

export default Header;
