import React from "react";
import mark from "../assets/images/Vector (6).png";

const WhyEasyShipUI = ({ children }) => {
  return (
    <main>
      <section className='flex leading-[15px] w-full  mt-[15px] text-[#000]/75 max-sm:flex-col   max-md:items-center '>
        <img
          src={mark}
          className='w-[18.56px] max-sm:w-[25.56px] h-[25.56px]'
          alt='mark'
        />
        <section className='  leading-[15px] text-[18px] ml-[15px]'>
          {children}
        </section>
      </section>
    </main>
  );
};

export default WhyEasyShipUI;
