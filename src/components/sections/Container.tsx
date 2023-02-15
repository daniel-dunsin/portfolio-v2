import React, { FC, ReactElement } from "react";
type ContainerProps = {
  children: ReactElement;
};
const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <section className="w-full bg-mainGrayColor">
      <div className="container min-h-screen">{children}</div>
    </section>
  );
};

export default Container;
