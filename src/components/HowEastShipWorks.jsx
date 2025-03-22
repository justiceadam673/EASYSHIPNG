import React from "react";
import Cards from "./UI/Cards";
import Shop from "../assets/images/Vector.png";
import Order from "../assets/images/Vector (1).png";
import PickUp from "../assets/images/solar_delivery-bold.png";

const HowEastShipWorks = () => {
  return (
    <main className='mb-[37px]'>
      <h1 className='text-center text-[#33345e] mt-[47px]  text-[36px] font-extrabold'>
        How EasyShip Works
        <section className='flex justify-center'>
          <Cards>
            <img src={Shop} className='w-[161.39px] mx-auto' />
            <h1 className='text-[#2B2C4F] font-extrabold text-[28px]'>
              Find Your Product{" "}
            </h1>
            <p className='text-[#2B2C4F]/65 text-[18px] font-light'>
              Browse and select from trusted vendors.
            </p>
          </Cards>
          <Cards>
            <img src={Order} className='w-[144.17px] mx-auto' />
            <h1 className='text-[#2B2C4F] font-extrabold text-[28px]'>
              Place an Order{" "}
            </h1>
            <p className='text-[#2B2C4F]/65 text-[18px] font-light'>
              Securely pay and confirm your purchase.
            </p>
          </Cards>
          <Cards>
            <img src={PickUp} className='w-[143px] mx-auto' />
            <h1 className='text-[#2B2C4F] font-extrabold text-[28px]'>
              We Pick & Deliver{" "}
            </h1>
            <p className='text-[#2B2C4F]/65 text-[18px] font-light'>
              Our logistics team ensures safe and fast delivery to your
              doorstep.
            </p>
          </Cards>
        </section>
      </h1>
    </main>
  );
};

export default HowEastShipWorks;
