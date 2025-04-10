import React from "react";
import WhyEasyShip from "./WhyEasyShip";
import HowEastShipWorks from "./HowEastShipWorks";
import Testimonials from "./Testimonials";
import WhatWeDo from "./WhatWeDo";
import MissionAndVision from "./MissionAndVision";
import About from "./About";

const ShowCase = () => {
  return (
    <main>
      <div className='h-auto max-w-[1413px] mx-auto'>
        <About />
        <HowEastShipWorks />
        <MissionAndVision />
        <WhyEasyShip />
        <WhatWeDo />
        <Testimonials />
      </div>
    </main>
  );
};

export default ShowCase;
