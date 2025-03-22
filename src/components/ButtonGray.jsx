import React from "react";

const ButtonGray = ({ children, className }) => {
  return (
    <main>
      <button
        className={`w-[156px] h-[34px] rounded-[50px] text-white bg-opacity-60  backdrop-blur-[30px] shadow-md z-50 ${className}`}
      >
        {children}
      </button>
    </main>
  );
};

export default ButtonGray;
