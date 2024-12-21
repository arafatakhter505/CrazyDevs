import { CiCircleInfo } from "react-icons/ci";
import { FaCode } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { MdWorkOutline } from "react-icons/md";

const menus = [
  {
    title: "Home",
    url: "/",
    icon: <GoHome className="w-6 h-6" />,
  },
  {
    title: "About",
    url: "/about",
    icon: <CiCircleInfo className="w-6 h-6" />,
  },
  {
    title: "Services",
    url: "/services",
    icon: <FaCode className="w-6 h-6" />,
  },
  {
    title: "Career",
    url: "/career",
    icon: <MdWorkOutline className="w-6 h-6" />,
  },
];

export default menus;
