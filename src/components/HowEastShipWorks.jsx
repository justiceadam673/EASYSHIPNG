import React from "react";
import Cards from "./UI/Cards";
import Shop from "../assets/images/find my.png";
import Order from "../assets/images/place an.png";
import PickUp from "../assets/images/we pick.png";

const HowEastShipWorks = () => {
  return (
    <main className='mb-[37px] '>
      <h1 className='text-center text-[#000] mt-[76px]   text-[27px] font-extrabold max-sm:text-[20px]'>
        How EasyShip Works
        <section className='flex flex-wrap justify-center gap-6 mt-10'>
          <Cards>
            <img src={Shop} className='w-[54px] mx-auto' />
            <h1 className='text-[#000] font-extrabold text-[21px]'>
              Find Your Product{" "}
            </h1>
            <p className='text-[#000]/65 text-[15px] font-light'>
              Browse and select from trusted vendors.
            </p>
          </Cards>
          <Cards>
            <img src={Order} className='w-[54px] mx-auto' />
            <h1 className='text-[#000] font-extrabold text-[21px]'>
              Place an Order{" "}
            </h1>
            <p className='text-[#000]/65 text-[15px] font-light'>
              Securely pay and confirm your purchase.
            </p>
          </Cards>
          <Cards>
            <img src={PickUp} className='w-[54px] mx-auto' />
            <h1 className='text-[#000] font-extrabold text-[21px]'>
              We Pick & Deliver{" "}
            </h1>
            <p className='text-[#000]/65 text-[15px]  font-light'>
              Safe and fast delivery to your doorstep.
            </p>
          </Cards>
        </section>
      </h1>
    </main>
  );
};

export default HowEastShipWorks;
