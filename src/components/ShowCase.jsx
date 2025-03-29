import React from "react";
import WhyEasyShip from "./WhyEasyShip";
import HowEastShipWorks from "./HowEastShipWorks";
import Testimonials from "./Testimonials";

const ShowCase = () => {
  return (
    <main>
      <div className='h-auto max-w-[1413px] mx-auto'>
        <WhyEasyShip />
        <HowEastShipWorks />
        <Testimonials />
      </div>
    </main>
  );
};

export default ShowCase;
