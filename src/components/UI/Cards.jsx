import React from "react";

const Cards = ({ logo, children }) => {
  return (
    <main>
      <div className='bg-white rounded-[30px] w-[394px] h-[369px] p-[10px] '>
        <img src={logo} alt='img' srcSet='' />
        {children}
      </div>
    </main>
  );
};

export default Cards;
