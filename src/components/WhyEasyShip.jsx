import React from "react";
import Truck from "../assets/images/theTruck.png";
import Mark from "../assets/images/greenmark.png";

const WhyEasyShip = () => {
  return (
    <main className='w-full px-6 md:px-[180px] space-y-2 items-center mt-[75px]'>
      <section className='text-center'>
        <h1 className='font-bold text-[27px] text-black'>
          Why Choose EasyShip?
        </h1>
      </section>
      <section className='grid grid-cols-1 max-lg:flex max-lg:flex-col  md:grid-cols-4 items-center gap-[25px] '>
        <img
          src={Truck}
          className='max-sm:hidden max-md:hidden col-span-1 max-lg:w-full w-[300px] h-[250px] '
        />
        <section className='col-span-3 text-black/75 text-[20px] max-lg:flex max-lg:flex-col space-y-[15px] '>
          <p className='flex max-lg:items-center max-lg:flex-col space-x-[25px]'>
            <img src={Mark} className='w-[25px] h-[25px]' />
            <span className='font-bold'>Fast & Reliable –</span>
            Speedy deliveries you can count on.
          </p>
          <p className='flex max-lg:items-center max-lg:flex-col space-x-[25px]'>
            <img src={Mark} className='w-[25px] h-[25px]' />
            <span className='font-bold'>Trusted Vendors –</span> Shop from
            verified and top-rated sellers.
          </p>
          <p className='flex max-lg:items-center max-lg:flex-col space-x-[25px]'>
            <img src={Mark} className='w-[25px] h-[25px]' />
            <span className='font-bold'>Secure Payments –</span> Multiple safe
            and convenient payment options.
          </p>
          <p className='flex max-lg:items-center max-lg:flex-col space-x-[25px]'>
            <img src={Mark} className='w-[25px] h-[25px]' />
            <span className='font-bold'>Real-Time Tracking –</span> Know exactly
            where your package is at any time.
          </p>
          <p className='flex max-lg:items-center max-lg:flex-col space-x-[25px]'>
            <img src={Mark} className='w-[25px] h-[25px]' />
            <span className='font-bold'>24/7 Support –</span> Our team is here
            to help whenever you need it.
          </p>
          <p>
            Join thousands of satisfied customers today!{" "}
            <span className='text-[#2644A0] font-bold'>Learn more.</span>
          </p>
        </section>
      </section>
    </main>
  );
};

export default WhyEasyShip;
