import React from "react";
import Frame16 from "../assets/images/Frame 16.png";
import WhyEasyShipUI from "./WhyEasyShipUI";

const WhyEasyShip = () => {
  return (
    <main className='w-full flex flex-col items-center mt-[75px] px-6'>
      <section className=' flex h-[273px] justify-center items-center max-w-[800px]   '>
        <img
          src={Frame16}
          alt=''
          srcSet=''
          className='w-[161.25px] max-lg:hidden max-xl:hidden max-md:hidden max-sm:hidden  h-[161.25px] mt-[38px]'
        />
        <section className=' max-md:flex max-sm:items-center max-md:flex-col h-full text-[#000]  ml-[25.5px]'>
          <h1 className='w-[394px] h-[43px] max-sm:w-auto max-sm:h-auto  mb-[38px] font-[800] text-[27px] max-sm:text-[20px]'>
            Why Choose EasyShip?
          </h1>
          <WhyEasyShipUI>
            <p className='flex max-sm:flex-col max-sm:items-center max-sm:text-[14px] max-sm:mr-[20px] '>
              <span className='font-bold max-sm:mt-[15px] max-sm:mb-[10px]'>
                Fast & Reliable <span className='max-sm:hidden'>–</span>
              </span>{" "}
              Speedy deliveries you can count on.
            </p>
          </WhyEasyShipUI>
          <WhyEasyShipUI>
            <p className='flex max-sm:flex-col max-sm:items-center max-sm:text-[14px] max-sm:mr-[20px] '>
              <span className='font-bold max-sm:mt-[15px] max-sm:mb-[10px]'>
                Trusted Vendors <span className='max-sm:hidden'>–</span>
              </span>{" "}
              Shop from verified and top-rated sellers.
            </p>
          </WhyEasyShipUI>
          <WhyEasyShipUI>
            <p className='flex max-sm:flex-col max-sm:items-center max-sm:text-[14px] max-sm:mr-[20px] '>
              <span className='font-bold max-sm:mt-[15px] max-sm:mb-[10px]'>
                Secure Payments <span className='max-sm:hidden'>–</span>
              </span>{" "}
              Multiple safe and convenient payment options.
            </p>
          </WhyEasyShipUI>
          <WhyEasyShipUI>
            <p className='flex max-sm:flex-col max-sm:items-center max-sm:text-[14px] max-sm:mr-[20px] '>
              <span className='font-bold max-sm:mt-[15px] max-sm:mb-[10px]'>
                Real-Time Tracking <span className='max-sm:hidden'>–</span>
              </span>{" "}
              Know exactly where your package is at any time.
            </p>
          </WhyEasyShipUI>
          <WhyEasyShipUI>
            <p className='flex max-sm:flex-col max-sm:items-center max-sm:text-[14px] max-sm:mr-[20px] '>
              <span className='font-bold max-sm:mt-[15px] max-sm:mb-[10px]'>
                24/7 Support <span className='max-sm:hidden'>–</span>
              </span>{" "}
              Our team is here to help whenever you need it.
            </p>
          </WhyEasyShipUI>
          <section className='flex max-sm:flex-col max-sm:text-[14px] max-sm:items-center max-sm:mt-[25px] mt-[14px] text-[18px]'>
            <p className='text-[#000]/65'>
              Join thousands of satisfied customers today!{" "}
            </p>
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
