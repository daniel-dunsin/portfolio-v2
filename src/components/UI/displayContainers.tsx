import React, { FC, ReactElement } from "react";
import { BsArrowRight } from "react-icons/bs";

type displayContainerProps = {
  icon: ReactElement;
  name: string;
  href?: string;
};

const DisplayContainer: FC<displayContainerProps> = ({ icon, name, href }) => {
  return (
    <article className="h-[180px] py-6 px-4 min-w-[180px] max-w-[180px] bg-mainDarkColor shadow-md rounded-[10px]">
      <span className="w-[45px] h-[45px] bg-white rounded-full flex justify-center items-center text-[27px]">
        {icon}
      </span>
      <h2 className="text-white font-bold text-[18px] mt-4">{name}</h2>
      {href && (
        <a
          href={href}
          target="_blank"
          className="text-[17px] text-white font-[400] flex items-center gap-x-2 mt-2"
        >
          View <BsArrowRight />
        </a>
      )}
    </article>
  );
};

export default DisplayContainer;
