import React from "react";
import LogoVPN from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24" id="footer">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          {/* <LogoVPN className="h-8 w-auto mb-6" /> */}
          <h3 className="text-xl font-bold">
            <span className="text-orange-500">Crazy</span>Devs
          </h3>
          <p className="mb-4">
            Providing innovative software solutions to help businesses grow.
            Specializing in custom development, mobile apps, and cloud services.
            Let's build the future together.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div>
          </div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - CrazyDevs
          </p>
        </div>
        <div className="sm:row-span-2 sm:col-span-3 col-span-12 sm:col-start-7 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">
            Bangladesh Office
          </p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              <Link href={"tel:+8801716098676"}>☏ +8801716098676</Link>
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              <Link href={"mailto:info@crazydevs.com"}>
                ✉ info@crazydevs.com
              </Link>
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              𖡡 326, New Elephant Road, Dhaka 1205, Bangladesh.
            </li>
          </ul>
        </div>
        <div className="sm:row-span-2 sm:col-span-3 col-span-12 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">
            Saudi Office
          </p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              <Link href={"tel:+8801716098676"}>☏ +8801716098676</Link>
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              <Link href={"mailto:info@crazydevs.com"}>
                ✉ info@crazydevs.com
              </Link>
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              𖡡 Riadh, kingdom of saudi Arabia
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
