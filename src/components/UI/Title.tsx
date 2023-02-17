import React, { FC } from "react";

type TitleProps = {
  text: string;
  topOfPage: boolean;
  subtitle?: string;
  smallSize?: boolean;
};

const Title: FC<TitleProps> = ({ text, topOfPage, subtitle, smallSize }) => {
  return (
    <header className={`${topOfPage ? "mb-3" : "mt-12 mb-3"}`}>
      <h1
        className={`${
          smallSize
            ? `text-[23px] sm:text-[25px] md:text-[30px]`
            : "text-[40px] sm:text-[45px] md:text-[50px]"
        } text-mainDarkColor font-bold leading-[1.3]`}
      >
        {text}
      </h1>
      {subtitle && (
        <p className="mt-3 text-[1.1rem] text-mainDarkColor">{subtitle}</p>
      )}
    </header>
  );
};

export default Title;
