import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins outline-none font-medium text-[18px] text-primary ${styles} rounded-[10px]`}
    >
      get Started
    </button>
  );
};

export default Button;
