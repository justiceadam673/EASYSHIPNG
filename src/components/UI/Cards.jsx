import React from "react";

const Cards = ({ logo, children }) => {
  return (
    <main className='mx-[16px] mt-[20px] justify-between items-center'>
      <div className='bg-white rounded-[30px]  flex flex-col space-y-[13px] w-[378px] h-[369px] pb-[25px] px-[15px] '>
        <img src={logo} className=' mt-[57px]' srcSet='' />
        {children}
      </div>
    </main>
  );
};

export default Cards;
