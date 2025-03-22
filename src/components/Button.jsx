import React from "react";

const Button = ({ children, className }) => {
  return (
    <main>
      <button
        className={`w-[95px] h-[34px] rounded-[50px] text-white bg-[linear-gradient(to_right,#0799DF,#2D3594)] ${className}`}
      >
        {children}
      </button>
    </main>
  );
};

export default Button;
