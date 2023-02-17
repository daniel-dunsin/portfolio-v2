import React from "react";
import { useGlobalContext } from "../../context";

const FilterButtons = () => {
  const { filterButtons, selectFilterButton, selectedFilterButton } =
    useGlobalContext();
  return (
    <div className="max-w-[90vw] overflow-x-scroll horizontal-scrollbar  mx-auto">
      <header className="flex items-center justify-center min-w-fit">
        {filterButtons.map((button, index: number) => {
          return (
            <button
              key={index}
              className={`px-4 py-2 ${
                button === "All" ? "min-w-[100px]" : "min-w-[160px]"
              } rounded-[10px] cursor-pointer transition duration-300 ${
                selectedFilterButton === button && "bg-mainDarkColor text-white"
              }`}
              onClick={() => {
                selectFilterButton(button);
              }}
            >
              {button}
            </button>
          );
        })}
      </header>
    </div>
  );
};

export default FilterButtons;
