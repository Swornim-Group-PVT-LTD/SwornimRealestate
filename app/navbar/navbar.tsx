import { useState } from "react";
import Logo from "../../public/logo.svg";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Button,
} from "flowbite-react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const NavbarItem = () => {
  const [activeTab, setActiveTab] = useState("/");
  const [isOpen, setIsOpen] = useState(false);

  const handleTabClick = (path: string) => {
    setActiveTab(path);
    setIsOpen(false);
  };

  return (
    <Navbar
      fluid
      className="text-slate-50 "
      style={{ backgroundColor: "#14383F" }}
    >
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-slate-800 shadow-lg rounded-b-xl p-4 flex flex-col gap-4">
            <Link
              href="/"
              className={`text-slate-50 ${
                activeTab === "/" ? "text-[#F8BC4C]" : ""
              }`}
              onClick={() => handleTabClick("/")}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`text-slate-50 ${
                activeTab === "/services" ? "text-[#F8BC4C]" : ""
              }`}
              onClick={() => handleTabClick("/services")}
            >
              Services
            </Link>
            <Link
              href="/agent"
              className={`text-slate-50 ${
                activeTab === "/agent" ? "text-[#f27322]" : ""
              }`}
              onClick={() => handleTabClick("/agent")}
            >
              Agent
            </Link>
            <Link
              href="/about"
              className={`text-slate-50 ${
                activeTab === "/about" ? "text-[#f27322]" : ""
              }`}
              onClick={() => handleTabClick("/about")}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={`text-slate-50 ${
                activeTab === "/contact" ? "text-[#f27322]" : ""
              }`}
              onClick={() => handleTabClick("/contact")}
            >
              Contact
            </Link>
          </div>
        )}
      </div>

      <NavbarBrand href="/" className="">
        <Image
          src={Logo}
          className="mr-3"
          alt="Logo"
          width={115}
          height={150}
        />
      </NavbarBrand>

      <div className="flex md:order-2">
        <Link href={`/contactAgentForm`}>
          <Button
            pill
            size="xs"
            className="mr-2 font-bold text-blue-900"
            style={{ backgroundColor: "#F8BC4C" }}
          >
            BOOK AN APPOINTMENT
          </Button>
        </Link>
      </div>
    </Navbar>
  );
};

export default NavbarItem;
