import React from "react";
import Vision from "../assets/images/vision.png";
import Mission from "../assets/images/missoin.png";

const MissionAndVision = () => {
  return (
    <main className='flex justify-center my-[100px]'>
      <section className='flex flex-col items-center lg:px-[413px] md:px-[85px] px-[75px] py-[35px] space-y-[40px] bg-white justify-center rounded-[22.5px] w-full h-fit '>
        <section className='flex flex-col items-center space-y-[15px] justify-center'>
          <img src={Mission} alt='Our Mission' />
          <h1 className='font-bold text-[clamp(1.5rem,2.5vw,2rem)] '>
            Our Mission
          </h1>
          <p className='text-black/75 text-[18px] text-center '>
            To simplify logistics by providing reliable, real-time, and
            customer-first delivery services for everyone — vendors and
            customers alike.
          </p>
        </section>
        <section className='flex flex-col items-center space-y-[15px] justify-center'>
          <img src={Vision} alt='Our Vision' />
          <h1 className='font-bold text-[clamp(1.5rem,2.5vw,2rem)]'>
            Our Vision
          </h1>
          <p className='text-black/75 text-[18px] text-center '>
            To be the most trusted logistics bridge between vendors and
            customers across Africa and beyond.
          </p>
        </section>
      </section>
    </main>
  );
};

export default MissionAndVision;
