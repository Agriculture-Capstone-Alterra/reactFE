import {
  MdOutlineDashboard,
  MdListAlt,
  MdOutlineShoppingCart,
  MdHistory,
} from "react-icons/md";
import { IoMdStopwatch } from "react-icons/io";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdOutlineDashboard />,
  },
  {
    title: "Pengingat Tanaman",
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
    title: "Produk Lokal",
    path: "/produk-lokal",
    icon: <MdOutlineShoppingCart />,
  },
];
