import React from "react";
import WhyEasyShip from "./WhyEasyShip";
import HowEastShipWorks from "./HowEastShipWorks";
import Testimonials from "./Testimonials";

const ShowCase = () => {
  return (
    <main>
      <div className='h-[1440px] w-[1413]'>
        <WhyEasyShip />
        <HowEastShipWorks />
        <Testimonials />
      </div>
    </main>
  );
};

export default ShowCase;
