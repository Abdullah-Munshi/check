import React from "react";
import { XMarkIcon, CheckIcon } from "@heroicons/react/20/solid";
import { Checkbox, Field, Label } from "@headlessui/react";
import { useState } from "react";
import AuthBg from "../assets/auth-bg.png";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const Auth = () => {
  const [selected, setSelected] = useState({
    signIn: true,
    signUp: false,
  });
  const handleSignIn = () => {
    setSelected({
      signIn: true,
      signUp: false,
    });
  };
  const handleSignUp = () => {
    setSelected({
      signIn: false,
      signUp: true,
    });
  };

  return (
    <div
      className="auth-area min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${AuthBg})` }}
    >
      <div className="auth-area-inner flex flex-col min-h-screen p-0">
        <div className=" min-h-screen w-full flex items-center justify-center">
          <div className="auth-container">
            <div className="border-b border-[#976d05] font-poppins pb-4 flex items-center justify-between">
              <h4 className="text-white text-base font-semibold mb-0">
                Please signing to continue
              </h4>
              <button>
                <XMarkIcon className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 my-5">
              <Field className="flex items-center gap-2 cursor-pointer">
                <Checkbox
                  checked={selected.signUp}
                  onChange={handleSignUp}
                  className="block group size-5 rounded-md bg-white p-1 ring-1 ring-white ring-inset data-[checked]:bg-[#ff9c00]"
                >
                  <CheckIcon className="hidden size-3 fill-white group-data-[checked]:block" />
                </Checkbox>

                <Label className="text-white text-sm cursor-pointer">
                  {" "}
                  I’m a New User
                </Label>
              </Field>
              <Field className="flex items-center gap-2 cursor-pointer">
                <Checkbox
                  checked={selected.signIn}
                  onChange={handleSignIn}
                  className="block group size-5 rounded-md bg-white p-1 ring-1 ring-white ring-inset data-[checked]:bg-[#ff9c00]"
                >
                  <CheckIcon className="hidden size-3 fill-white group-data-[checked]:block" />
                </Checkbox>

                <Label className="text-white text-sm cursor-pointer">
                  I’m an existing user{" "}
                </Label>
              </Field>
            </div>

            {selected.signIn && <SignIn />}
            {selected.signUp && <SignUp />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
