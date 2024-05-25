import React from "react";

const SignIn = () => {
  return (
    <form className="w-full auth-form">
      <div className="input-inside auth">
        <input
          type="text"
          placeholder="Official Email or Phone number"
          className="custom-input"
        />
      </div>
      <div className="input-inside auth">
        <input
          type="text"
          placeholder="Enter your password"
          className="custom-input"
        />
      </div>
      <button className="box-btn w-full">Login</button>
      <a
        href="#"
        className="text-[#a3a3a3] text-[13px] font-medium font-poppins transition duration-200 hover:text-[#69b1ff] mt-4 inline-block"
      >
        Forgot Password?
      </a>
    </form>
  );
};

export default SignIn;
