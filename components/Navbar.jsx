"use client";
import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <>
      <div className="w-full bg-blue-500 sticky top-0 z-10">
        <div className="container mx-auto px-4 h-20">
          <div className="flex justify-between items-center h-full">
            <Logo /> {/* Display your logo */}
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/model">
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
            {/* Conditional rendering of SignInButton or UserProfile */}
            <SignedIn>
              {/* Mount the UserButton component */}
              <UserButton />
            </SignedIn>
            <SignedOut>
              {/* Signed out users get sign in button */}
              <SignInButton />
            </SignedOut>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

// import React from "react";
// import Link from "next/link";
// import Logo from "./Logo";
// import {
//   SignInButton,
//   UserProfile,
// } from "@clerk/nextjs";

// const Navbar = () => {
//   return (
//     <>
//       <div className="w-full bg-blue-500 sticky top-0 z-10">
//         <div className="container mx-auto px-4 h-20">
//           <div className="flex justify-between items-center h-full">
//             <Logo /> {/* Display your logo */}
//             <ul className="hidden md:flex gap-x-6 text-white">
//               <li>
//                 <Link href="/about">
//                   <p>About Us</p>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/model">
//                   <p>Services</p>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contacts">
//                   <p>Contacts</p>
//                 </Link>
//               </li>
//             </ul>
//             <button className="bg-white text-blue-500 px-4 py-2 rounded">
//               <SignInButton />
//             </button>
//             <button>
//               <UserProfile />
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
