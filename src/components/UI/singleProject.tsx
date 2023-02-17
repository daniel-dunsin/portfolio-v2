import React, { FC } from "react";
import { IProject } from "../../types/types";

type singleProjectProps = IProject;

const SingleProject: FC<singleProjectProps> = (props) => {
  return (
    <article className="w-full relative h-[200px] overflow-hidden rounded-[10px] shadow-md">
      {/* img container */}
      <div className="w-full h-full">
        <img
          src={`./images/projects/${props.image}`}
          alt={props.name}
          className="w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="absolute top-0 left-0 hoverText w-full h-full"></div>
    </article>
  );
};

export default SingleProject;
