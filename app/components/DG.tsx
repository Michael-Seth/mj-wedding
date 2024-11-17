import React from "react";
import { Donate } from "./Donate";
import { Gift } from "./Gift";

export const DG = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid md:grid-cols-2 items-center gap-12">
        <Donate />
        <Gift />
      </div>
    </div>
  );
};
