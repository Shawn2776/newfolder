import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between bg-fiord-500">
        <div className="pl-10 py-2">
          <Link href="/">Logo</Link>
        </div>
        <div className="pr-10 py-2">
          <Link href="/Signin">Sign In</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
