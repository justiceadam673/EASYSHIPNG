import React from "react";
import mark from "../assets/images/Vector (6).png";

const WhyEasyShipUI = ({ children }) => {
  return (
    <main>
      <section className='flex leading-[15px] w-full  mt-[15px] text-[#2B2C4F] '>
        <img src={mark} alt='mark' />
        <section className='leading-[15px] text-[22px] ml-[15px]'>
          {children}
        </section>
      </section>
    </main>
  );
};

export default WhyEasyShipUI;
