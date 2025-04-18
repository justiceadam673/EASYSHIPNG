import React, { useState } from "react";
import Button from "./Button";
import ButtonBorderStroke from "./UI/ButtonBorderStroke";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home"); // State to track active menu

  const menuItems = ["Home", "Company", "Services", "Contact"];

  return (
    <header className='absolute top-0 left-0 w-full bg-white/70 backdrop-blur-lg shadow-md z-50'>
      <nav className='flex justify-between items-center px-8 md:px-16 py-[40px] h-[71.25px]'>
        <section className='flex items-center px-[30px] space-x-2 font-extrabold text-2xl md:text-4xl'>
          <img src='./Easyship 1.png' alt='EASY SHIP NG' className='h-10' />
          <h1 className='text-[14.22px] font-heavy sm:text-[16.22px] md:text-[18.22px] lg:text-[20.22px] xl:text-[24px]'>
            EasyShip
          </h1>
        </section>

        {/* Desktop Menu */}
        <ul className='hidden lg:flex items-center space-x-[55.29px] max-xl:space-x-7 text-[#000]/65 font-bold'>
          {menuItems.map((item) => (
            <li key={item}>
              <button
                className={`px-[16px] py-[3px] rounded-full transition ${
                  activeTab === item
                    ? "text-white  bg-[#1858BE]"
                    : "hover:text-black hover:bg-black/17"
                }`}
                onClick={() => setActiveTab(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        <div className='flex max-md:hidden  space-x-4'>
          <Button className='h-10 w-20 mr-[30px] max-lg:w-[100%] max-lg:px-[10px] '>
            Get a Quote
          </Button>
        </div>

        <button className='lg:hidden ' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='lg:hidden bg-white/80 backdrop-blur-lg p-6 space-y-4 shadow-md'>
          <ul className='flex flex-col items-center space-y-4 text-gray-700 font-bold'>
            {menuItems.map((item) => (
              <li key={item} className='w-full text-center'>
                <button
                  className={`w-full px-4 py-2 rounded-full transition ${
                    activeTab === item
                      ? "text-white bg-[#1858BE]"
                      : "hover:text-black hover:bg-black/17"
                  }`}
                  onClick={() => setActiveTab(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <div className='flex flex-col space-y-4 mt-4'>
            <ButtonBorderStroke className='h-10 w-full'>
              Get a Quote
            </ButtonBorderStroke>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
