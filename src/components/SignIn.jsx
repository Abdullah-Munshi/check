import React from "react";

const SignIn = () => {
  return (
    <div className="w-full">
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
    </div>
  );
};

export default SignIn;
