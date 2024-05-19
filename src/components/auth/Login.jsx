import React from "react";
import AuthTitle from "./AuthTitle";
import { Button } from "../Utility";

const Login = () => {
  const handleRegistration = () => {
    console.log("Handle Registration Function!");
  };
  const handleLogin = () => {
    console.log("Handle Login Function!");
  };
  return (
    <div className="space-y-9 md:space-y-14">
      <div className="">
        <AuthTitle
          heading="Welcome to Heal.Estate"
          subHeading="Let’s Get Started"
        />
      </div>
      <div className="md:flex justify-between max-w-[650px] mx-auto space-y-8 md:space-y-0">
        <div className="max-w-[300px] mx-auto md:mx-0">
          <p className="text-white text-center text-sm md:text-base font-bold mb-4 md:mb-5">
            New to Heal.Estate?
          </p>
          <Button
            onClick={handleRegistration}
            type="button"
            variant="cyan"
            classes="w-full"
          >
            CREATE AN ACCOUNT
          </Button>
        </div>
        <div className="max-w-[300px] mx-auto md:mx-0">
          <p className="text-white text-center text-sm md:text-base font-bold mb-4 md:mb-5">
            Already have an account?
          </p>
          <Button
            onClick={handleLogin}
            type="button"
            variant="pink"
            classes="w-full"
          >
            LOGIN TO BACKOFFICE
          </Button>
        </div>
      </div>
      <div className="text-center max-w-[650px] mx-auto">
        <p className="text-white text-sm mb-4">
          You were referred by{" "}
          <strong className="inline-block">Username</strong>
        </p>
      </div>
    </div>
  );
};

export default Login;
