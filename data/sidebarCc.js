import {RiDashboardFill} from "react-icons/ri";
import {HiOutlineNewspaper} from "react-icons/hi";
import {IoSettings} from "react-icons/io5";
import {IoExit} from "react-icons/io5";
const data = [
  {id: 1, title: "Dashboard", link: "/cc", icon: <RiDashboardFill size={30} />, style: ""},
  {
    id: 2,
    title: "Articole",
    link: "/cc/posts",
    icon: <HiOutlineNewspaper size={30} />,
    style: "mt-6",
  },
  {id: 3, title: "Settings", link: "settings", icon: <IoSettings size={30} />, style: "mt-28"},
  {id: 4, title: "Log out", link: "logout", icon: <IoExit size={30} />, style: "mt-2"},
];
export default data;
