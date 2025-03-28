import React from "react";

const Button = ({ children, className }) => {
  return (
    <main>
      <button
        className={`w-[156px] h-[30.5px] rounded-[22.5px] text-white bg-[linear-gradient(to_right,#0799DF,#2D3594)] ${className}`}
      >
        {children}
      </button>
    </main>
  );
};

export default Button;
