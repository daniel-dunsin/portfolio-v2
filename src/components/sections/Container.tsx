import React, { FC, ReactElement } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
type ContainerProps = {
  children: ReactElement;
  nextPageLink: string;
  nextPageText: string;
};
const Container: FC<ContainerProps> = ({
  children,
  nextPageLink,
  nextPageText,
}) => {
  return (
    <main className="w-full bg-mainGrayColor">
      <div className="container min-h-screen pt-[140px] pb-[80px] relative">
        {children}
        <Link to={nextPageLink}>
          <button className="absolute bottom-[3rem] text-[1rem] md:text-[18px] text-mainDarkColor font-bold hover:text-black hover:scale-[1.08] transition-all duration-300 left-[1rem] md:left-[2rem] flex items-center gap-2">
            {nextPageText} <BsArrowRight />
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Container;
