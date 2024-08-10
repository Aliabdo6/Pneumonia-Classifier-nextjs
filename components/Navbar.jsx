"use client";
import React, {
  useState,
  useEffect,
} from "react";
import Link from "next/link";
import Logo from "./Logo";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { motion } from "framer-motion";

const NavItem = ({ href, children }) => {
  return (
    <motion.li
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={href}>
        <p className="text-white hover:text-yellow-300 transition-colors duration-300">
          {children}
        </p>
      </Link>
    </motion.li>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );
    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-blue-600 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-20">
        <div className="flex justify-between items-center h-full">
          <Logo />
          <ul className="hidden md:flex gap-x-8 text-lg font-semibold">
            <NavItem href="/about">
              About Us
            </NavItem>
            <NavItem href="/model">
              Services
            </NavItem>
            <NavItem href="/contacts">
              Contacts
            </NavItem>
          </ul>
          <div className="flex items-center space-x-4">
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10",
                  },
                }}
              />
            </SignedIn>
            <SignedOut>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SignInButton mode="modal">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-2 px-4 rounded-full transition-colors duration-300">
                    Sign In
                  </button>
                </SignInButton>
              </motion.div>
            </SignedOut>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

// "use client";
// import React from "react";
// import Link from "next/link";
// import Logo from "./Logo";
// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   UserButton,
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
//             {/* Conditional rendering of SignInButton or UserProfile */}
//             <SignedIn>
//               {/* Mount the UserButton component */}
//               <UserButton />
//             </SignedIn>
//             <SignedOut>
//               {/* Signed out users get sign in button */}
//               <SignInButton />
//             </SignedOut>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
