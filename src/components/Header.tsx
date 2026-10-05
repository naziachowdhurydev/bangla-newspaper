import Image from "next/image";
import React from "react";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });
  return (
    <div>
      <div className="flex items-center gap-2 p-4">
        <Image src="/logo.webp" alt="Logo" width={50} height={50} />
        <div>
          Bangla News 24
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
