import React from "react";
import Frame16 from "../assets/images/Frame 16.png";
import WhyEasyShipUI from "./WhyEasyShipUI";

const WhyEasyShip = () => {
  return (
    <main>
      <section className=' flex h-[382px] w-[1211px]  mt-[91px] mx-[115px]'>
        <img src={Frame16} alt='' srcSet='' />
        <section className='h-full text-[#2B2C4F] mt-[15px] ml-[65px]'>
          <h1 className='w-[394px] h-[43px] mt-[22px] font-[800] text-[30px]'>
            Why Choose EasyShip?
          </h1>
          <WhyEasyShipUI>
            <p>
              <span className='font-bold'>Fast & Reliable –</span> Speedy
              deliveries you can count on.
            </p>
          </WhyEasyShipUI>
          <WhyEasyShipUI>
            <p>
              <span className='font-bold'>Trusted Vendors –</span> Shop from
              verified and top-rated sellers.
            </p>
          </WhyEasyShipUI>
          <WhyEasyShipUI>
            <p>
              <span className='font-bold'>Secure Payments –</span> Multiple safe
              and convenient payment options.
            </p>
          </WhyEasyShipUI>
          <WhyEasyShipUI>
            <p>
              <span className='font-bold'>Real-Time Tracking –</span> Know
              exactly where your package is at any time.
            </p>
          </WhyEasyShipUI>
          <WhyEasyShipUI>
            <p>
              <span className='font-bold'>24/7 Support –</span> Our team is here
              to help whenever you need it.
            </p>
          </WhyEasyShipUI>
          <section className='flex mt-[20px] text-[24px]'>
            <p>Join thousands of satisfied customers today! </p>
            <a href='' className='text-[#2644A0] hover:underline font-bold'>
              Learn more.
            </a>
          </section>
        </section>
      </section>
    </main>
  );
};

export default WhyEasyShip;
