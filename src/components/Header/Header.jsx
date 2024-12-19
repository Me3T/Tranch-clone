import React from "react";
import { DropdownMenuRadioGroupDemo } from "./DropDown";

const Header = () => {
  return (
    <header className="flex flex-wrap justify-between items-center px-6 md:px-14 py-4 md:py-6">
      {/* Logo */}
      <div className="flex justify-between items-center w-full md:w-auto">
        <a href="#" className="flex items-center">
          <img
            className="h-16 md:h-24"
            src="https://www.canny-creative.com/wp-content/uploads/2022/06/tranch-logo-final.jpg"
            alt="Logo"
          />
        </a>
      </div>

      {/* Navigation Menu */}
      <nav className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mt-4 md:mt-0 w-full md:w-auto">
        <DropdownMenuRadioGroupDemo
          name={"Product "}
          item1={"Pay Later"}
          item2={"Pay Now"}
          item3={"Pay By Card"}
        />
        <DropdownMenuRadioGroupDemo
          name={"Solutions "}
          item1={"For Business"}
          item2={"For Law Firms"}
          item3={"For Software Companies"}
        />
        <DropdownMenuRadioGroupDemo
          name={"Resources "}
          item1={"❔ FAQ"}
          item2={"Security"}
          item3={"Legal Policies"}
        />
        <a
          href="#"
          className="font-myFont text-xl md:text-2xl font-semibold mx-2 md:mx-4"
        >
          About us
        </a>
      </nav>

      {/* Action Buttons */}
      <div className="flex justify-center items-center space-x-4 lg:space-x-6 mt-4 md:mt-0 w-full md:w-auto">
        <a
          href="#"
          className="font-myFont text-xl md:text-2xl text-black font-semibold hover:pointer"
        >
          Contact Sales
        </a>
        <button className="border-2 border-black rounded-tr-xl px-4 py-1 font-semibold hover:border-black font-myFont text-xl md:text-2xl">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
