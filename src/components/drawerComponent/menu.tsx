"use client";

import { FaListAlt } from "react-icons/fa";
import { RiProductHuntFill } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";

const topMenu = [
  {
    id: 1,
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26 18V6H42V18H26ZM6 26V6H22V26H6ZM26 42V22H42V42H26ZM6 42V30H22V42H6Z"
          fill="black"
        />
      </svg>
    ),
    link: "/dashboard",
    name: "Dashboard",
  },
  {
    id: 2,
    icon: <FaListAlt className="h-7 w-7 text-black"/>,
    link: "/products",
    name: "Product",
  },
  {
    id: 3,
    icon: <FaListAlt className="h-7 w-7 text-black"/>,
    link: "/category",
    name: "Manage Categories",
  },
  {
    id: 4,
    icon: <RiProductHuntFill className="h-7 w-7 text-black"/>,
    link: "/createproduct",
    name: "Create Product",
  },
  {
    id: 5,
    icon: <IoIosSettings className="h-7 w-7 text-black"/>,
    link: "/setting",
    name: "Setting",
  },
];

// const bottomMenu = [
//   {
//     id: 1,
//     icon: (
//       <svg
//         width="30"
//         height="30"
//         viewBox="0 0 48 48"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           fillRule="evenodd"
//           clipRule="evenodd"
//           d="M24 8C21.2015 7.99949 18.4519 8.73298 16.0255 10.1273C13.599 11.5215 11.5808 13.5278 10.1721 15.9459C8.76335 18.364 8.0135 21.1092 7.99736 23.9077C7.98121 26.7061 8.69932 29.4598 10.08 31.894C11.0132 30.6812 12.2129 29.6992 13.5862 29.024C14.9595 28.3487 16.4697 27.9984 18 28H30C31.5303 27.9984 33.0405 28.3487 34.4139 29.024C35.7872 29.6992 36.9868 30.6812 37.92 31.894C39.3007 29.4598 40.0188 26.7061 40.0027 23.9077C39.9865 21.1092 39.2367 18.364 37.828 15.9459C36.4193 13.5278 34.401 11.5215 31.9746 10.1273C29.5482 8.73298 26.7985 7.99949 24 8ZM39.886 36.152C42.5601 32.6659 44.0065 28.3935 44 24C44 12.954 35.046 4 24 4C12.954 4 4.00002 12.954 4.00002 24C3.99342 28.3936 5.43983 32.666 8.11402 36.152L8.10402 36.188L8.81402 37.014C10.6898 39.207 13.0188 40.9672 15.6405 42.1733C18.2622 43.3793 21.1142 44.0026 24 44C28.0547 44.0075 32.0148 42.7758 35.35 40.47C36.7719 39.4876 38.0612 38.326 39.186 37.014L39.896 36.188L39.886 36.152ZM24 12C22.4087 12 20.8826 12.6321 19.7574 13.7574C18.6322 14.8826 18 16.4087 18 18C18 19.5913 18.6322 21.1174 19.7574 22.2426C20.8826 23.3679 22.4087 24 24 24C25.5913 24 27.1174 23.3679 28.2427 22.2426C29.3679 21.1174 30 19.5913 30 18C30 16.4087 29.3679 14.8826 28.2427 13.7574C27.1174 12.6321 25.5913 12 24 12Z"
//           fill="white"
//         />
//       </svg>
//     ),
//     link: "/profile",
//     name: "Profile",
//   },
//   {
//     id: 2,
//     icon: (
//       <svg
//         width="30"
//         height="30"
//         viewBox="0 0 48 48"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M10 42C8.9 42 7.95867 41.6087 7.176 40.826C6.39333 40.0433 6.00133 39.1013 6 38V10C6 8.9 6.392 7.95867 7.176 7.176C7.96 6.39333 8.90133 6.00133 10 6H24V10H10V38H24V42H10ZM32 34L29.25 31.1L34.35 26H18V22H34.35L29.25 16.9L32 14L42 24L32 34Z"
//           fill="white"
//         />
//       </svg>
//     ),

//     link: "/login",
//     name: "Logout",
//   },
// ];

export { topMenu };
