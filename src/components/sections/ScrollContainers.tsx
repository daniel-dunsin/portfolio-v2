import React, { FC, ReactElement, useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

type scrollContainerProps = {
  children: ReactElement[];
  width: number;
  displayWidgets: boolean;
};

const ScrollContainers: FC<scrollContainerProps> = ({
  children,
  width,
  displayWidgets,
}) => {
  const container = React.useRef<any>(null);
  const [scrollWidth, setScrollWidth] = useState<number>(0);

  useEffect(() => {
    container?.current?.scroll({
      left: scrollWidth,
    });
  }, [scrollWidth]);

  return (
    <>
      <div
        className="flex items-center gap-x-4 horizontal-scrollbar flex-nowrap overflow-x-scroll skills-container pb-4 transition duration-300"
        ref={container}
      >
        {children}
      </div>
    </>
  );
};

export default ScrollContainers;
