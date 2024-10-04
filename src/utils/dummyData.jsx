import { BsThreeDotsVertical } from "react-icons/bs";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineCategory } from "react-icons/md";
import { MdOutlineInventory } from "react-icons/md";
import { MdManageHistory } from "react-icons/md";
import { IoReceiptOutline } from "react-icons/io5";
import { PiUsersThreeLight } from "react-icons/pi";
export const tableHead = [
  "NAME",
  "OPTIONS",
  "BRAND",
  "CATEGORY",
  "SELLING PRICE",
  "QUANTITY",
];
export const tableData = [
  "Brush",
  "6",
  "JK Enterprise",
  "Building",
  "$40",
  "4",
];
export const categoryTableHead = ["NAME", "TOTAL PRODUCTS", "ACTION"];
export const categoryTableData = [
  "Building",
  "40",
  <BsThreeDotsVertical key={2} />,
];

export const inventoryTableHead = [
  "NAME",
  "OPTIONS",
  "BRAND",
  "CATEGORY",
  "QUANTITY",
];
export const inventoryTableData = [
  "Brush",
  "6",
  "JK Enterprise",
  "Building",
  "40 pieces",
  <BsThreeDotsVertical key={5} />,
];

export const data = [
  {
    key: 1,
    name: "Dashboard",
    icon: <LuLayoutDashboard size="30" />,
    pathway: "/dashboard",
  },
  {
    key: 2,
    name: "Point of Sales",
    icon: <FaRegMoneyBillAlt size="30" />,
    pathway: "/sales",
  },
  {
    key: 3,
    name: "Products",
    icon: <AiOutlineProduct size="30" />,
    pathway: "/products",
  },
  {
    key: 4,
    name: "Categories",
    icon: <MdOutlineCategory size="30" />,
    pathway: "/categories",
  },

  {
    key: 5,
    name: "Inventory",
    icon: <MdOutlineInventory size="30" />,
    pathway: "/inventory",
  },
  {
    key: 6,
    name: "Sales History",
    icon: <MdManageHistory size="30" />,
    pathway: "/sales-history",
  },
  {
    key: 7,
    name: "Records",
    icon: <IoReceiptOutline size="30" />,
    pathway: "/records",
  },
  {
    key: 8,
    name: "Users",
    icon: <PiUsersThreeLight size="30" />,
    pathway: "/users",
  },
];
