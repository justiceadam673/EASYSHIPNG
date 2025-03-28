import React from "react";
import heroImage from "../assets/images/blank-cargo-truck-road 1.png";
import Button from "./Button";
import ButtonGray from "./ButtonGray";

const HeroSection = () => {
  return (
    <main>
      <section className='relative w-full h-[696.75px] min-h-screen'>
        <img
          src={heroImage}
          alt='Hero'
          className=' bg-cover bg-center max-md:object-cover  left-0 w-full h-full'
        />

        <div className='absolute inset-0 bg-gradient-to-r from-black/80 to-transparent'></div>

        <section className='absolute top-1/2 left-[5%] sm:left-[10%] md:left-[10%] lg:left-[30%] transform -translate-y-1/2 sm:translate-x-0 lg:-translate-x-1/2 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] max-w-[650px] text-white z-10'>
          <h1 className='font-semibold text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-tight'>
            Fast, Reliable, and <br /> Hassle-Free Deliveries!
          </h1>
          <p className='font-medium text-gray-300 text-[14px] sm:text-[16px] mt-2'>
            Bridging the gap between vendors and customers with seamless
            logistics solutions. Get your orders delivered swiftly and securely.
          </p>
          <section className='flex flex-col sm:flex-row sm:space-x-4 mt-4'>
            <Button className='w-full sm:w-[180px] md:w-[219px] h-[44px]'>
              Plan an Order
            </Button>
            <ButtonGray className='w-full sm:w-[180px] md:w-[219px] h-[44px] mt-2 sm:mt-0'>
              Become a Vendor
            </ButtonGray>
          </section>
        </section>
      </section>
    </main>
  );
};

export default HeroSection;
