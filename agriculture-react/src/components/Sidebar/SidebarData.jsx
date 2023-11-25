import {
  MdOutlineDashboard,
  MdListAlt,
  MdOutlineShoppingCart,
  MdCloudQueue,
  MdHistory,
} from "react-icons/md";
import { IoMdStopwatch } from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdOutlineDashboard />,
  },
  {
    title: "Informasi Cuaca",
    path: "#",
    icon: <MdCloudQueue />,
  },
  {
    title: "Remainder",
    path: "/pengingat-tanaman",
    icon: <IoMdStopwatch />,
  },
  {
    title: "Menanam Tanaman",
    path: "/menanam-tanaman",
    icon: <MdListAlt />,
  },
  {
    title: "Riwayat Menanam",
    path: "/riwayat-menanam",
    icon: <MdHistory />,
  },
  {
    title: "Pertumbuhan",
    path: "#",
    icon: <FaArrowTrendUp />,
  },
  {
    title: "Produk Lokal",
    path: "#",
    icon: <MdOutlineShoppingCart />,
  },
];
