import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ButtonOutline from "../misc/ButtonOutline";
import menus from "../../utils/menus";
import Image from "next/image";

const Header = () => {
  const [isScrollActive, setIsScrollActive] = useState(false);
  const router = useRouter();

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrollActive(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper function to get the active class for menu links
  const getMenuClass = (url) =>
    `px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative ${
      router.pathname === url
        ? "text-orange-500 animation-active"
        : "text-black-500 hover:text-orange-500"
    }`;

  const getMobileMenuClass = (url) =>
    `mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ${
      router.pathname === url
        ? "border-orange-500 text-orange-500"
        : "border-transparent"
    }`;

  return (
    <header
      className={`fixed top-0 w-full z-30 bg-white-500 transition-all ${
        isScrollActive ? "shadow-md pt-0" : "pt-2"
      }`}
    >
      {/* Desktop Navigation */}
      <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
        {/* Logo Section */}
        <div className="col-start-1 col-end-2 flex items-center cursor-pointer">
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              alt="CrazyDevs"
              width={120}
              height={50}
            />
          </Link>
        </div>

        {/* Menu Links */}
        <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500 items-center">
          {menus?.map((menu) => (
            <li key={menu.title}>
              <Link href={menu.url}>
                <a className={getMenuClass(menu.url)}>{menu.title}</a>
              </Link>
            </li>
          ))}
        </ul>

        {/* Call-to-Action */}
        <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
          <div onClick={() => router.push("/contact-us")}>
            <ButtonOutline>Contact Us</ButtonOutline>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-50 px-4 sm:px-8 shadow-t">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            {menus?.map((menu) => (
              <li key={menu.title}>
                <Link href={menu.url}>
                  <a className={getMobileMenuClass(menu.url)}>
                    {menu.icon}
                    {menu.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
