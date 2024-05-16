import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="text-white font-bold text-lg">
      <Link href="/">
        <p>Your Logo Here</p>
      </Link>
    </div>
  );
};

export default Logo;
