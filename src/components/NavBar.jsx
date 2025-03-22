import React from "react";
import Button from "./Button";
import ButtonBorderStroke from "./UI/ButtonBorderStroke";

const NavBar = () => {
  return (
    <main>
      <nav className='absolute top-0 left-0 w-full flex justify-between items-center px-[99px] py-6  bg-opacity-60 backdrop-blur-[22px] h-[95px] shadow-md z-50'>
        <section className='flex items-center space-x-2 font-extrabold text-4xl'>
          <img src='./Easyship 1.png' alt='EASY SHIP NG' className='h-10' />
          <h1>EasyShip</h1>
        </section>
        <ul className='flex space-x-20 text-gray-700 mr-[103px] font-bold'>
          <Button>
            <a href='' className='w-[95px] h-[34px] backdrop-blur-[30px]'>
              Home
            </a>
          </Button>
          <li>
            <a href=''>Company</a>
          </li>
          <li>
            <a href=''>Services</a>
          </li>
          <li>
            <a href=''>Contact</a>
          </li>
        </ul>
        <ButtonBorderStroke className={"h-[34px] w-[156px]"}>
          <h1>Get a Quote</h1>
        </ButtonBorderStroke>
        <Button className={"h-[34px] w-[156px]"}>
          <h1>Sign Up</h1>
        </Button>
      </nav>
    </main>
  );
};

export default NavBar;
