import React from "react";

const Cards = ({ logo, children }) => {
  return (
    <main className='mx-[25px] mt-[20px] justify-between items-center'>
      <div className='bg-white rounded-[30px]  flex flex-col  py-[33px] px-[33px] max-sm:w-[100%] max-sm:mb-[23.25px]  w-[100%] h-[185px] '>
        <img src={logo} srcSet='' />
        {children}
      </div>
    </main>
  );
};

export default Cards;
