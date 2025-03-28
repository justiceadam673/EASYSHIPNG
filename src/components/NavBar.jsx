import React, { useState } from "react";
import Button from "./Button";
import ButtonBorderStroke from "./UI/ButtonBorderStroke";
import { Menu, X } from "lucide-react";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='absolute top-0 left-0 w-full bg-white/70 backdrop-blur-lg shadow-md z-50'>
      <nav className='flex justify-between items-center px-8 md:px-16 py-4 h-[71.25px]'>
        <section className='flex items-center space-x-2 font-extrabold text-2xl md:text-4xl'>
          <img src='./Easyship 1.png' alt='EASY SHIP NG' className='h-10' />
          <h1 className='text-[14.22px] sm:text-[16.22px] md:text-[18.22px] lg:text-[20.22px] xl:text-[24px]'>
            EasyShip
          </h1>
        </section>

        <ul className='hidden lg:flex  items-center space-x-20 max-xl:space-x-7 text-gray-700 font-bold'>
          <li>
            <a href='' className='hover:text-amber-500 transition'>
              Home
            </a>
          </li>
          <li>
            <a href='' className='hover:text-amber-500 transition'>
              Company
            </a>
          </li>
          <li>
            <a href='' className='hover:text-amber-500 transition'>
              Services
            </a>
          </li>
          <li>
            <a href='' className='hover:text-amber-500 transition'>
              Contact
            </a>
          </li>
        </ul>

        <div className=' flex max-md:hidden  space-x-4'>
          <ButtonBorderStroke className='h-10 w-20 max-lg:w-[100%] max-lg:px-[10px] '>
            Get a Quote
          </ButtonBorderStroke>
          <Button className='h-10 w-20 max-lg:w-[100%] max-lg:px-[10px]  '>
            Sign Up
          </Button>
        </div>

        <button className='lg:hidden ' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isOpen && (
        <div className='lg:hidden  bg-white/80 backdrop-blur-lg p-6 space-y-4 shadow-md'>
          <ul className='flex  flex-col items-center space-y-4 text-gray-700 font-bold'>
            <li>
              <a href='' className='block'>
                Home
              </a>
            </li>
            <li>
              <a href='' className='block'>
                Company
              </a>
            </li>
            <li>
              <a href='' className='block'>
                Services
              </a>
            </li>
            <li>
              <a href='' className='block'>
                Contact
              </a>
            </li>
          </ul>
          <div className=' flex-col hidden max-md:flex max-md:justify-center max-md:space-x-3 max-sm:flex-col  max-md:flex-row max-sm:items-center max-sm:justify-center md:justify-center md:space-x-5 md:flex-row md:w-[100%] md:h-[20px] space-y-4 mt-4'>
            <ButtonBorderStroke className='h-10 w-[50%]'>
              Get a Quote
            </ButtonBorderStroke>
            <Button className='h-10 w-[50%]'>Sign Up</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
