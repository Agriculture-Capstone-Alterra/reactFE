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
    path: "/",
    icon: <MdOutlineDashboard />,
  },
  {
    title: "Informasi Cuaca",
    path: "/informasi-cuaca",
    icon: <MdCloudQueue />,
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
    title: "Pertumbuhan",
    path: "/pertumbuhan",
    icon: <FaArrowTrendUp />,
  },
  {
    title: "Produk Lokal",
    path: "/produk-lokal",
    icon: <MdOutlineShoppingCart />,
  },
];
