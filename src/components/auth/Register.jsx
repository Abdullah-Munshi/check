import React from "react";
import AuthTitle from "./AuthTitle";
import { Button } from "../Utility";

const Register = () => {
  const handleRegister = () => {
    console.log("Handle Register");
  };
  const handleWallet = () => {
    console.log("Handle Wallet");
  };
  return (
    <div className="space-y-9 md:space-y-14">
      <div className="">
        <AuthTitle
          heading="Create new account"
          subHeading="It’s free and easy"
        />
      </div>
      <div className="md:grid grid-cols-2 gap-6 lg:gap-0 lg:flex justify-between max-w-[920px] mx-auto space-y-8 md:space-y-0 lg:space-x-8">
        <div className="max-w-[300px] mx-auto md:mx-0">
          <span className="text-black font-russoOne text-2xl font-bold inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary mb-4">
            1
          </span>
          <Button
            onClick={handleWallet}
            type="button"
            variant="cyan"
            classes="w-full"
          >
            CONNECT WALLET
          </Button>
          <p className="text-[#D1D1D1] text-sm font-medium mt-2.5">
            Connected to 0xb3D4...f03e
          </p>
        </div>
        <div className="max-w-[300px] mx-auto md:mx-0">
          <span className="text-black font-russoOne text-2xl font-bold inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary mb-4">
            2
          </span>
          <input
            type="text"
            placeholder="Username"
            className="border-[3px] border-primary rounded-2xl w-full h-[68px] bg-transparent text-primary font-bold px-4 focus:outline-none placeholder:text-primary"
          />
          <p className="text-[#D1D1D1] text-sm font-medium mt-2.5">
            Enter your referrer username
          </p>
        </div>
        <div className="max-w-[300px] mx-auto md:mx-0">
          <span className="text-black font-russoOne text-2xl font-bold inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary mb-4">
            3
          </span>
          <Button
            onClick={handleRegister}
            type="button"
            variant="pink"
            classes="w-full"
          >
            REGISTER NOW
          </Button>
          <p className="text-[#D1D1D1] text-sm font-medium mt-2.5">
            Sign from your wallet to register
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
