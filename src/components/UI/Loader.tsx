import { BiLoaderAlt } from "react-icons/bi";
import React from "react";

const Loader = () => {
  return (
    <section className="w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.4)] flex flex-col gap-y-[.6rem] items-center justify-center text-white">
      <span className="text-[2.2rem] animate-spin">
        <BiLoaderAlt />
      </span>
      <p>Sending message</p>
    </section>
  );
};

export default Loader;
