import React from "react";
import { XMarkIcon, CheckIcon } from "@heroicons/react/20/solid";
import { Checkbox, Field, Label } from "@headlessui/react";
import { useState } from "react";
import AuthBg from "../assets/auth-bg.png";
import SignIn from "../components/SignIn";

const Auth = () => {
  const [enabled, setEnabled] = useState(true);
  return (
    <div
      className="auth-area relative h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${AuthBg})` }}
    >
      <div className="auth-area-inner h-full w-full absolute top-0 left-0 right-0 overflow-y-auto">
        <div className="auth-container">
          <div className="border-b border-[#976d05] font-poppins pb-4 flex items-center justify-between">
            <h4 className="text-white text-base font-semibold mb-0">
              Please signing to continue
            </h4>
            <button>
              <XMarkIcon className="w-6 h-6 text-white" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 my-4">
            <Field className="flex items-center gap-2">
              <Checkbox
                checked={enabled}
                onChange={setEnabled}
                className="block group size-5 rounded-md bg-white p-1 ring-1 ring-white ring-inset data-[checked]:bg-[#ff9c00]"
              >
                <CheckIcon className="hidden size-3 fill-white group-data-[checked]:block" />
              </Checkbox>

              <Label className="text-white text-sm"> I’m a New User</Label>
            </Field>
            <Field className="flex items-center gap-2">
              <Checkbox
                checked={enabled}
                onChange={setEnabled}
                className="block group size-5 rounded-md bg-white p-1 ring-1 ring-white ring-inset data-[checked]:bg-[#ff9c00]"
              >
                <CheckIcon className="hidden size-3 fill-white group-data-[checked]:block" />
              </Checkbox>

              <Label className="text-white text-sm">
                I’m an existing user{" "}
              </Label>
            </Field>
          </div>

          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default Auth;
