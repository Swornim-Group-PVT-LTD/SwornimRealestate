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

const NavbarItem = () => {
  const [activeTab, setActiveTab] = useState("/");

  const handleTabClick = (path: string) => {
    setActiveTab(path);
  };

  return (
    <Navbar
      fluid
      className="text-slate-50"
      style={{ backgroundColor: "#14383F" }}
    >
      <NavbarBrand href="/" className="">
        <Image src={Logo} className="mr-3" alt="Logo" width={115} height={150} />
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
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink
          as={Link}
          href="/"
          className={`text-slate-50 ${
            activeTab === "/" ? "text-[#F8BC4C]" : ""
          }`}
          onClick={() => handleTabClick("/")}
        >
          Home
        </NavbarLink>
        <NavbarLink
          as={Link}
          href="/services"
          className={`text-slate-50 ${
            activeTab === "/services" ? "text-[#F8BC4C]" : ""
          }`}
          onClick={() => handleTabClick("/services")}
        >
          Services
        </NavbarLink>
        <NavbarLink
          as={Link}
          href="/agent"
          className={`text-slate-50 ${
            activeTab === "/agent" ? "text-[#f27322]" : ""
          }`}
          onClick={() => handleTabClick("/agent")}
        >
          Agent
        </NavbarLink>
        <NavbarLink
          as={Link}
          href="/about"
          className={`text-slate-50 ${
            activeTab === "/about" ? "text-[#f27322]" : ""
          }`}
          onClick={() => handleTabClick("/about")}
        >
          About Us
        </NavbarLink>
        <NavbarLink
          as={Link}
          href="/contact"
          className={`text-slate-50 ${
            activeTab === "/contact" ? "text-[#f27322]" : ""
          }`}
          onClick={() => handleTabClick("/contact")}
        >
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default NavbarItem;
