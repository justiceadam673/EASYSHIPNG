import React from "react";

const ButtonGray = ({ children, className }) => {
  return (
    <main>
      <button
        className={`w-[156px] h-[33px] rounded-[50px] text-white bg-opacity-60 bg-white/30 font-bold  backdrop-blur-[30px] shadow-md z-50 ${className}`}
      >
        {children}
      </button>
    </main>
  );
};

export default ButtonGray;
