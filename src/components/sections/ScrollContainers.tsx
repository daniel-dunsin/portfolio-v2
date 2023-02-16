import React, { FC, ReactElement, useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

type scrollContainerProps = {
  children: ReactElement[];
  width: number;
};

const ScrollContainers: FC<scrollContainerProps> = ({ children, width }) => {
  const container = React.useRef<any>(null);
  const [scrollWidth, setScrollWidth] = useState<number>(0);

  const increaseScrollWidth = () => {
    setScrollWidth(() => {
      if (scrollWidth < width) {
        return scrollWidth + 100;
      } else {
        return scrollWidth;
      }
    });
  };
  const decreaseScrollWidth = () => {
    setScrollWidth(() => {
      if (scrollWidth !== 0) {
        return scrollWidth - 100;
      } else {
        return scrollWidth;
      }
    });
  };

  useEffect(() => {
    container?.current?.scroll({
      left: scrollWidth,
    });
  }, [scrollWidth]);

  return (
    <>
      <div
        className="flex items-center gap-x-4 flex-nowrap overflow-x-scroll skills-container pb-4 transition duration-300"
        ref={container}
      >
        {children}
      </div>
      <div className="w-full flex items-center gap-x-4 justify-end">
        <span
          className="w-[40px] h-[40px] flex justify-center items-center text-[40px] text-white bg-mainDarkColor rounded-full"
          onClick={decreaseScrollWidth}
        >
          <BiChevronLeft />
        </span>
        <span
          className="w-[40px] h-[40px] flex justify-center items-center text-[40px] text-white bg-mainDarkColor rounded-full"
          onClick={increaseScrollWidth}
        >
          <BiChevronRight />
        </span>
      </div>
    </>
  );
};

export default ScrollContainers;
