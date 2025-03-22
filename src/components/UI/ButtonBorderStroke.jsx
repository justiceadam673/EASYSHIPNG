import React from "react";

const ButtonBorderStroke = ({ children, className }) => {
  return (
    <main>
      <button
        className={`w-[156px] h-[34px] rounded-[50px] font-bold text-[#0799DF] border-[#0799DF] border-3   ${className}`}
      >
        {children}
      </button>
    </main>
  );
};

export default ButtonBorderStroke;
