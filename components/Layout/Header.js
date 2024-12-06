import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ButtonOutline from "../misc/ButtonOutline.";
import menus from "../../utils/menus";

const Header = () => {
  const [scrollActive, setScrollActive] = useState(false);
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <Link href={"/"}>
              <h3 className="text-xl font-bold cursor-pointer">
                <span className="text-orange-500">Crazy</span>Devs
              </h3>
            </Link>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500 items-center">
            {menus?.map((menu) => (
              <li key={menu.title}>
                <Link href={menu.url}>
                  <a
                    className={
                      "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                      (router.pathname === menu.url
                        ? " text-orange-500 animation-active "
                        : " text-black-500 hover:text-orange-500 a")
                    }
                  >
                    {menu.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>

          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <div onClick={() => router.push("/contact-us")}>
              <ButtonOutline>Contact Us</ButtonOutline>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-50 px-4 sm:px-8 shadow-t">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            {menus?.map((menu) => (
              <li key={menu.title}>
                <Link href={menu.url}>
                  <a
                    className={
                      "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                      (router.pathname === menu.url
                        ? "  border-orange-500 text-orange-500"
                        : " border-transparent")
                    }
                  >
                    {menu.icon}
                    {menu.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
