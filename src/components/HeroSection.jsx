import React from "react";
import heroImage from "../assets/images/pexels-500photos-com-15338-93398 1.png";
import heroStroke from "../assets/images/Frame 8.png";
import Button from "./Button";
import ButtonGray from "./ButtonGray";

const HeroSection = () => {
  return (
    <main>
      <section className='relative w-full min-h-screen'>
        <img
          src={heroImage}
          alt='Hero'
          className='absolute top-0 left-0 w-full h-full object-fill'
        />
      </section>
      <section className='absolute top-1/2 left-1/2 transform -translate-x-150 w-[697px] h-[136px] -translate-y-1/2 text-left text-white z-10'>
        <h1 className='font-semibold text-[64px] leading-[100%] tracking-[0em]'>
          Fast, Reliable, and Hassle-Free Deliveries!
        </h1>
        <p className='font-medium leading-[100%] m-[10px] tracking-[0%] text-gray-400 text-[20px]'>
          Bridging the gap between vendors and customers with seamless logistics
          solutions. Get your orders delivered swiftly and securely.
        </p>
        <section className='flex items-center'>
          {" "}
          <Button className={"w-[219px] h-[44px] gap-[10px] p-[10px]"}>
            Plan an Order
          </Button>
          <ButtonGray
            className={" m-[20px] w-[219px] h-[44px] gap-[10px] p-[10px]"}
          >
            Become a Vendor
          </ButtonGray>
        </section>
        <section className=' z-50'>
          <img
            src={heroStroke}
            alt='easyship-stroke'
            className='absolute top-0 left-0 w-full h-full object-fill'
          />
        </section>
      </section>
    </main>
  );
};

export default HeroSection;
