import React from "react";
import Cards from "./UI/Cards";
import Shop from "../assets/images/Vector.png";
import Order from "../assets/images/Vector (1).png";
import PickUp from "../assets/images/solar_delivery-bold.png";

const HowEastShipWorks = () => {
  return (
    <main className='mb-[37px] max-sm:mt-70 '>
      <h1 className='text-center text-[#000] mt-[76px]  text-[27px] font-extrabold'>
        How EasyShip Works
        <section className='flex max-sm:flex-col max-sm:items-center justify-center'>
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
