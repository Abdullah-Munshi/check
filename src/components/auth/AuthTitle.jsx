import React from "react";

const AuthTitle = ({ heading, subHeading }) => {
  return (
    <div className="bg-[#3D3D3D] rounded-xl p-4 md:p-6 text-center -mt-9 max-w-[650px] mx-auto md:pb-7 shadow-lg shadow-black/30">
      <h2 className="text-primary font-russoOne text-xl md:text-3xl lg:text-[42px] leading-tight mb-2">
        {heading}
      </h2>
      <p className="text-white text-base md:text-[22px] lg:text-2xl">
        {subHeading}
      </p>
    </div>
  );
};

export default AuthTitle;
