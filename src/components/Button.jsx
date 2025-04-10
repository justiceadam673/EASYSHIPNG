import React from "react";

const Button = ({ children, className }) => {
  return (
    <main>
      <button
        className={`w-[156px] h-[30.5px]  rounded-[22.5px] text-white bg-[#1858BE] ${className}`}
      >
        {children}
      </button>
    </main>
  );
};

export default Button;
