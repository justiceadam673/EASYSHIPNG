import React from "react";
import HandShake from "../assets/images/handshake.png";
import PhoneCheck from "../assets/images/phonecheck.png";
import CollectGoods from "../assets/images/collectgoods.png";

const WhatWeDo = () => {
  return (
    <main className='w-full text-black/75 flex max-lg:flex-col  justify-center gap-[35px] items-center mt-[75px] px-6'>
      <section className='rounded-[23px] bg-white h-auto'>
        <div className='max-w-[272px]  max-lg:w-full h-[388px] w-fit  '>
          <img src={HandShake} className='rounded-t-[23px]  h-fit ' />
          <section className='py-[15px] space-y-[10px] rounded-b-[23px] px-[25px] '>
            <h2 className='font-bold'>Partner with Vendors</h2>
            <p>
              Giving sellers a powerful platform to reach more customers and
              fulfil orders efficiently.
            </p>
          </section>
        </div>
      </section>
      <section className='rounded-[23px] bg-white h-auto'>
        <div className='max-w-[272px] h-[388px] w-fit  '>
          <img src={PhoneCheck} className='rounded-t-[23px] h-fit ' />
          <section className='py-[15px] space-y-[10px] rounded-b-[23px] px-[25px] '>
            <h2 className='font-bold'>Serve Customers</h2>
            <p>
              Connecting buyers to trusted vendors and delivering their products
              quickly and safely.
            </p>
          </section>
        </div>
      </section>
      <section className='rounded-[23px] bg-white h-auto'>
        <div className='max-w-[272px]  w-fit  '>
          <img src={CollectGoods} className='rounded-t-[23px] h-fit ' />
          <section className='py-[15px] space-y-[10px] rounded-b-[23px] px-[25px] '>
            <h2 className='font-bold'>Power Logistics</h2>
            <p>
              From pickup to final drop-off, we manage the entire delivery
              process with transparency and care.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
};

export default WhatWeDo;
