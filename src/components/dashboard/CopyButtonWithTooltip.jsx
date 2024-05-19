import React from "react";
import { Typography, Button, Tooltip } from "@material-tailwind/react";
import { useCopyToClipboard } from "usehooks-ts";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";

export default function CopyButtonWithTooltip() {
  const [value, copy] = useCopyToClipboard();
  const [copied, setCopied] = React.useState(false);

  return (
    <Tooltip content={copied ? "Copied" : "Copy"}>
      <Button
        onMouseLeave={() => setCopied(false)}
        onClick={() => {
          copy("https://app.newunity.io/register/hello");
          setCopied(true);
        }}
        className="w-full justify-between flex items-center gap-x-3 px-5 py-2 lowercase bg-[#F4F4F4] shadow-none hover:shadow-none rounded-[100px]"
      >
        <p className="text-sm font-medium text-[#303030] text-left">
          <span className="block text-[#949494] text-xs">
            Invitation Link :
          </span>{" "}
          https://app.newunity.io/register/hello
        </p>
        <span className="bg-white rounded-lg px-3 py-2 pt-[6px] text-xs text-[#1A1D1F] font-semibold">
          {copied ? "Copied" : "Copy"}
        </span>
      </Button>
    </Tooltip>
  );
}
