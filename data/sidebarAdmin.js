import {RiDashboardFill} from "react-icons/ri";
import {IoIosPeople} from "react-icons/io";
import {IoPeopleSharp} from "react-icons/io5";
import {BiStats} from "react-icons/bi";
import {MdNextWeek} from "react-icons/md";
import {MdOutlineHistory} from "react-icons/md";
import {MdOutlinePaid} from "react-icons/md";
import {IoSettings} from "react-icons/io5";
import {IoExit} from "react-icons/io5";
const data = [
  {id: 1, title: "Dashboard", link: "/admin", icon: <RiDashboardFill size={30} />, margin: true},
  {id: 2, title: "Staff", link: "/admin/staff", icon: <IoIosPeople size={30} />, margin: true},
  {
    id: 3,
    title: "Jucatori",
    link: "/admin/jucatori",
    icon: <IoPeopleSharp size={30} />,
  },
  {
    id: 4,
    title: "Statistici",
    link: "/admin/statistici-jucatori",
    icon: <BiStats size={30} />,
  },
  {
    id: 5,
    title: "Meciuri",
    link: "/admin/meciuri",
    icon: <MdNextWeek size={30} />,
    margin: true,
  },
  {
    id: 6,
    title: "CC History",
    link: "/admin/cc-history",
    icon: <MdOutlineHistory size={30} />,
    margin: true,
  },
  {
    id: 7,
    title: "Admin History",
    link: "/admin/admin-history",
    icon: <MdOutlineHistory size={30} />,
  },
  {
    id: 8,
    title: "Sponsori",
    link: "/admin/sponsori",
    icon: <MdOutlinePaid size={30} />,
    margin: true,
  },
  {
    id: 9,
    title: "Settings",
    link: "/admin/settings",
    icon: <IoSettings size={30} />,
    margin: true,
  },
  {id: 10, title: "Log out", link: "/admin/logout", icon: <IoExit size={30} />},
];
export default data;
