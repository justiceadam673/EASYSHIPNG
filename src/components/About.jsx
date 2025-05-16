import React from "react";
import Frame16 from "../assets/images/truck.png";

const WhyEasyShip = () => {
  return (
    <main className='w-full  max-h-[453px] items-center mt-[75px]  '>
      <section className='  grid  grid-cols-5 h-[453px]  justify-center items-center  w-full bg-[#fff]   '>
        <img
          src={Frame16}
          alt=''
          srcSet=''
          className='w-full col-span-2 max-lg:hidden  max-xl:hidden max-md:hidden max-sm:hidden h-[453px] '
        />
        <section className=' col-span-3 max-sm:col-span-5 max-sm:place-content-center max-md:flex max-sm:items-center max-md:flex-col h-full py-[35px] text-[#000]/75  ml-[25.5px]'>
          <h1 className='w-[394px] h-[43px] max-sm:w-auto max-sm:h-auto  mb-[38px] font-[800] text-[27px] max-sm:text-[20px]'>
            About EasyShip
          </h1>
          <p className='text-[clamp(1rem,1.2vw,1.125rem)] max-sm:text-sm break-words whitespace-normal max-w-[550px] max-sm:max-w-full font-light '>
            <span className='font-bold'>
              Delivering More Than Just Packages – We Deliver Peace of Mind.
            </span>{" "}
            At EasyShip, we're redefining logistics by making delivery faster,
            smarter, and more customer-focused. We exist to bridge the gap
            between vendors and customers, offering a seamless way to move goods
            from store to doorstep with ease. <br /> <br /> <br /> Whether
            you're a business looking to expand your reach or a customer
            ordering your favorite item, EasyShip ensures a hassle-free
            experience every step of the way. of the way.
          </p>
        </section>
      </section>
    </main>
  );
};

export default WhyEasyShip;
