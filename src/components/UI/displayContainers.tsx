import React, { FC, ReactElement } from "react";

type displayContainerProps = {
  icon: ReactElement;
  name: string;
};

const DisplayContainer: FC<displayContainerProps> = ({ icon, name }) => {
  return (
    <article className="h-[180px] py-6 px-4 min-w-[180px] max-w-[180px] bg-mainDarkColor shadow-md rounded-[10px]">
      <span className="w-[45px] h-[45px] bg-white rounded-full flex justify-center items-center">
        {icon}
      </span>
      <h2 className="text-white font-bold text-[18px] mt-4">{name}</h2>
    </article>
  );
};

export default DisplayContainer;
