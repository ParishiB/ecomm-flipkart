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
    <div className="navbar w-full px-6 overflow-x-auto">
      <div className="flex items-center gap-20 text-sm font-bold whitespace-nowrap">
        {NavbarData.map((item, index) => (
          <div key={index} className="flex items-center gap-2 text-gray-700">
            {item.name}
            <RiArrowDropDownLine className="text-gray-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
