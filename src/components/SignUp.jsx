import React, { useState } from "react";
import clsx from "clsx";
import { Checkbox, Field, Label, Select } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import CountryDropdownWithPhone from "./CountryDropdownWithPhone";

const SignUp = () => {
  const [enabled, setEnabled] = useState(true);
  return (
    <form className="w-full auth-form">
      <div className="input-inside auth">
        <Select
          className={clsx(
            "block w-full appearance-none rounded-[4px] border border-[#4e3002] bg-[#222222] py-1.5 px-3 text-sm text-secondary",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
          )}
        >
          <option value="organization">Organization</option>
          <option value="individual">Individual</option>
        </Select>
      </div>
      <div className="input-inside auth">
        <input
          type="text"
          placeholder="Organization name"
          className="custom-input"
        />
      </div>
      <div className="input-inside auth">
        <input
          type="email"
          placeholder="Email address"
          className="custom-input"
        />
      </div>
      <div className="input-inside auth">
        <CountryDropdownWithPhone />
      </div>
      <div className="input-inside auth">
        <input
          type="text"
          placeholder="Enter Industry"
          className="custom-input"
        />
      </div>
      <div className="input-inside auth">
        <input type="text" placeholder="Password" className="custom-input" />
      </div>
      <div className="input-inside auth">
        <input
          type="text"
          placeholder="Confirm Password"
          className="custom-input"
        />
      </div>

      <Field className="flex items-center gap-2 mb-5">
        <Checkbox
          checked={enabled}
          onChange={setEnabled}
          className="block group size-5 rounded-md bg-white p-1 ring-1 ring-white ring-inset data-[checked]:bg-[#ff9c00]"
        >
          <CheckIcon className="hidden size-3 fill-white group-data-[checked]:block" />
        </Checkbox>

        <Label className="text-white text-sm">
          Accept the{" "}
          <a
            href="#"
            className="text-white text-[13px] font-medium font-poppins transition duration-200 hover:text-[#69b1ff]  inline-block"
          >
            Terms of Use and Privacy Policy.
          </a>{" "}
        </Label>
      </Field>
      <button className="box-btn w-full">Signup</button>
    </form>
  );
};

export default SignUp;
