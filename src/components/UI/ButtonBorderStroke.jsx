import React from "react";

const ButtonBorderStroke = ({ children, className }) => {
  return (
    <main>
      <button
        className={`w-[156px] h-[34px] rounded-[50px] text-white border-3 border-[ linear-gradient(to_right,#0799DF,#2D3594)]  ${className}`}
      >
        {children}
      </button>
    </main>
  );
};

export default ButtonBorderStroke;
