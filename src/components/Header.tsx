import Image from "next/image";
import React from "react";
import NavLinks from "./NavLinks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });
  return (
    <header className="relative container mx-auto px-4 py-4">
      <div className="flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-2">
        <Image src="/logo.webp" alt="Logo" width={50} height={50} />
        <div className="flex flex-col items-center sm:items-start">
          <span className="text-2xl font-bold text-red-700">
            Bangla News 24
          </span>
          <span className="text-xs text-neutral-500">{date}</span>
        </div>
      </div>

      <div className="flex w-full items-center justify-center gap-2 sm:absolute sm:right-4 sm:top-4 sm:w-auto md:right-4 lg:right-30 mt-4 sm:mt-0">
        <button className="btn btn-ghost px-2 text-sm text-neutral-700 transition-colors hover:text-red-700 sm:px-3">
          সাইন ইন
        </button>

        <button className="btn bg-red-700 px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-red-800 sm:px-4">
          সাইন আপ
        </button>
      </div>
      <NavLinks />
    </header>
  );
};

export default Header;
