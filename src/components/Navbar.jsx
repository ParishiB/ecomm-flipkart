import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
const NavbarData = [
  {
    id: 1,
    name: "Electronics",
  },
  {
    id: 2,
    name: "Electronics",
  },
  {
    id: 3,
    name: "Men",
  },
  {
    id: 4,
    name: "Women",
  },
  {
    id: 5,
    name: "Baby & Kids",
  },
  {
    id: 6,
    name: "Home & Furniture",
  },
  {
    id: 7,
    name: "Sports, Books & More",
  },
  {
    id: 8,
    name: "Flights",
  },
  {
    id: 9,
    name: "More",
  },
];
const Navbar = () => {
  return (
    <div className="flex w-full items-center px-6">
      {NavbarData.map((item, index) => (
        <div key={index} className="flex items-center gap-10 text-sm font-bold">
          <div className="flex mr-20 ">
            {item.name}
            <RiArrowDropDownLine className="text-gray-500" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
