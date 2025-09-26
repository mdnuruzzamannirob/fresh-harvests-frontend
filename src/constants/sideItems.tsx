import { TSideItems } from "@/types";
import { AiOutlineHome } from "react-icons/ai";

export const sideItems: TSideItems[] = [
  {
    name: "Home",
    path: "/",
    icon: <AiOutlineHome className="size-4" />,
  },
  {
    name: "Shop",
    path: "/shop",
    icon: null,
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    icon: null,
  },
  {
    name: "Blog",
    path: "/blog",
    icon: null,
  },
  //   {
  //     name: "Pages",
  //     path: null,
  //     icon: <AiOutlineFile className="size-4" />,
  //     children: [
  //       {
  //         name: "Dashboard",
  //         path: "/pages/dashboard",
  //         icon: <AiOutlineDashboard className="size-4" />,
  //         children: [
  //           {
  //             name: "Analytics",
  //             path: "/pages/dashboard/analytics",
  //             icon: <AiOutlineBarChart className="size-4" />,
  //           },
  //           {
  //             name: "Projects",
  //             path: "/pages/dashboard/projects",
  //             icon: <AiOutlineAppstore className="size-4" />,
  //           },
  //         ],
  //       },
  //       {
  //         name: "Settings",
  //         path: "/pages/settings",
  //         icon: <AiOutlineSetting className="size-4" />,
  //         children: [
  //           {
  //             name: "Account",
  //             path: "/pages/settings/account",
  //             icon: <AiOutlineUser className="size-4" />,
  //           },
  //           {
  //             name: "Security",
  //             path: "/pages/settings/security",
  //             icon: <AiOutlineContainer className="size-4" />,
  //           },
  //         ],
  //       },
  //       {
  //         name: "Profile",
  //         path: "/pages/profile",
  //         icon: <AiOutlineUser className="size-4" />,
  //       },
  //     ],
  //   },
  //   {
  //     name: "Sales",
  //     path: "/sales",
  //     icon: <AiOutlineShopping className="size-4" />,
  //     children: [
  //       {
  //         name: "Transactions",
  //         path: "/sales/transactions",
  //         icon: <AiOutlineTransaction className="size-4" />,
  //         children: [
  //           {
  //             name: "New",
  //             path: "/sales/transactions/new",
  //             icon: <AiOutlineFileText className="size-4" />,
  //           },
  //           {
  //             name: "History",
  //             path: "/sales/transactions/history",
  //             icon: <AiOutlineBarChart className="size-4" />,
  //           },
  //         ],
  //       },
  //       {
  //         name: "Reports",
  //         path: "/sales/reports",
  //         icon: <AiOutlineBarChart className="size-4" />,
  //       },
  //       {
  //         name: "Customers",
  //         path: "/sales/customers",
  //         icon: <AiOutlineTeam className="size-4" />,
  //       },
  //     ],
  //   },
  //   {
  //     name: "Products",
  //     path: "/products",
  //     icon: <AiOutlineShop className="size-4" />,
  //     children: [
  //       {
  //         name: "Inventory",
  //         path: "/products/inventory",
  //         icon: <AiOutlineContainer className="size-4" />,
  //       },
  //       {
  //         name: "Categories",
  //         path: "/products/categories",
  //         icon: <AiOutlineTags className="size-4" />,
  //       },
  //     ],
  //   },
  //   {
  //     name: "Billing",
  //     path: "/billing",
  //     icon: <AiOutlineCreditCard className="size-4" />,
  //   },
  //   {
  //     name: "Invoice",
  //     path: "/invoice",
  //     icon: <AiOutlineFileText className="size-4" />,
  //   },
];
