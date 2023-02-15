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
    <section className="w-full bg-mainGrayColor">
      <div className="container min-h-screen pt-[160px] pb-[80px] relative">
        {children}
        <Link to={nextPageLink}>
          <button className="absolute bottom-[3rem] left-[1rem] md:left-[2rem] flex items-center gap-2">
            {nextPageText} <BsArrowRight />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Container;
