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
  Modal,
} from "flowbite-react";
import Link from "next/link";
import { HiMenu, HiX, HiSearch } from "react-icons/hi";
import Search from "../search/search";

const NavbarItem = () => {
  const [activeTab, setActiveTab] = useState("/");
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);


  const handleTabClick = (path: string) => {
    setActiveTab(path);
  };

  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  return (
    <>
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

          {isOpen && (
            <div className="absolute top-full left-0 w-full bg-slate-800 shadow-lg rounded-b-xl p-4 flex flex-col gap-4 z-50">
              <Link
                href="/"
                className={`text-slate-50 hover:text-[#F8BC4C] transition-colors ${
                  activeTab === "/" ? "text-[#F8BC4C]" : ""
                }`}
                onClick={() => handleTabClick("/")}
              >
                Home
              </Link>
              <Link
                href="/services"
                className={`text-slate-50 hover:text-[#F8BC4C] transition-colors ${
                  activeTab === "/services" ? "text-[#F8BC4C]" : ""
                }`}
                onClick={() => handleTabClick("/services")}
              >
                Services
              </Link>
              <Link
                href="/agent"
                className={`text-slate-50 hover:text-[#f27322] transition-colors ${
                  activeTab === "/agent" ? "text-[#f27322]" : ""
                }`}
                onClick={() => handleTabClick("/agent")}
              >
                Agent
              </Link>
              <Link
                href="/about"
                className={`text-slate-50 hover:text-[#f27322] transition-colors ${
                  activeTab === "/about" ? "text-[#f27322]" : ""
                }`}
                onClick={() => handleTabClick("/about")}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className={`text-slate-50 hover:text-[#f27322] transition-colors ${
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
          <Button
            onClick={openSearchModal}
            pill
            size="sm"
            className="mr-2 font-bold text-slate-900 hover:scale-105 transition-transform"
            style={{ backgroundColor: "#F8BC4C" }}
          >
            <HiSearch className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
      </Navbar>

      <Modal show={isSearchModalOpen} onClose={closeSearchModal} size={"8xl"}>
        <Modal.Header>
          <span className="text-lg font-semibold text-gray-900 ">Search</span>
        </Modal.Header>
        <Modal.Body>
          <Search onClose={closeSearchModal} />
        </Modal.Body>
      </Modal>
    </>
       
  );
};

export default NavbarItem;
