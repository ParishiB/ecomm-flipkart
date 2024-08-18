import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Logo from "../../assets/Logo.png";
import { IoBagOutline } from "react-icons/io5";
import {
  MdOutlineStars,
  MdOutlineCardGiftcard,
  MdOutlineHelpCenter,
} from "react-icons/md";

const AboutData = [
  {
    id: 1,
    name: "Contact Us",
  },
  {
    id: 2,
    name: "About Us",
  },
  {
    id: 3,
    name: "Careers",
  },
  {
    id: 4,
    name: "Flipkart Stories",
  },
  {
    id: 5,
    name: "Press",
  },
  {
    id: 6,
    name: "Corporate Information",
  },
];
const GroupCompanies = [
  {
    id: 1,
    name: "Myntra",
  },
  {
    id: 2,
    name: "Cleartrip",
  },
  {
    id: 3,
    name: "Shopsy",
  },
];
const Help = [
  {
    id: 1,
    name: "Payments",
  },
  {
    id: 2,
    name: "Shipping",
  },
  {
    id: 3,
    name: "Cancellation & Returns",
  },
  {
    id: 4,
    name: "FAQ",
  },
  {
    id: 5,
    name: "Report Infringement",
  },
];
const ConsumerPolicy = [
  {
    id: 1,
    name: "Cancellation & Returns",
  },
  {
    id: 2,
    name: "Terms of Use",
  },
  {
    id: 3,
    name: "Security",
  },
  {
    id: 4,
    name: "Privacy",
  },
  {
    id: 5,
    name: "Sitemap",
  },
  {
    id: 6,
    name: "Grievance Redressal",
  },
  {
    id: 7,
    name: "EPR Compliance",
  },
];
const MailUs = `Flipkart Internet Private Limited,
Buildings Alyssa, Begonia &
Clove Embassy Tech Village,
Outer Ring Road, Devarabeesanahalli Village,
Bengaluru, 560103,
Karnataka, India`;

const Registered_office_address = `Flipkart Internet Private Limited,
Buildings Alyssa, Begonia &
Clove Embassy Tech Village,
Outer Ring Road, Devarabeesanahalli Village,
Bengaluru, 560103,
Karnataka, India
CIN : U51109KA2012PTC066107
Telephone: 044-45614700 / 044-67415800`;

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-8 mt-10 text-sm">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Company Information */}
          <div className="mb-6 md:mb-0">
            <img src={Logo} alt="Flipkart Logo" className="h-10 mb-4" />
            <p className="text-gray-400">
              © 2024 Flipkart. All rights reserved.
            </p>
            <p className="text-gray-400">
              Address: 123 Main Street, Anytown, USA
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="/about" className="hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-blue-400">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-blue-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/Flipkart"
                className="text-gray-400 hover:text-blue-600"
              >
                <FaFacebookF className="text-2xl" />
              </a>
              <a
                href="https://twitter.com/Flipkart"
                className="text-gray-400 hover:text-blue-400"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com/company/flipkart"
                className="text-gray-400 hover:text-blue-700"
              >
                <FaLinkedinIn className="text-2xl" />
              </a>
              <a
                href="https://instagram.com/Flipkart"
                className="text-gray-400 hover:text-pink-500"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: support@flipkart.com</p>
            <p className="text-gray-400">Phone: +1 (234) 567-8901</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
