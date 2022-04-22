import React from "react";
import Image from "next/image";

import logo from "../assets/images/logo.png";

export const Header = () => {
  return (
    <div className="flex m-3 justify-center items-center">
      <Image src={logo} alt="logo" width={80} height={80} />
      <h1 className="text-2xl font-medium text-center ml-1">Comment Board</h1>
    </div>
  );
};
