import React, { FC } from "react";
import { IProject } from "../../types/types";
import { Link } from "react-router-dom";

type singleProjectProps = IProject;

const SingleProject: FC<singleProjectProps> = (props) => {
  return (
    <article className="min-w-[350px] relative h-[200px] overflow-hidden rounded-[10px] shadow-md">
      {/* img container */}
      <div className="w-full h-full">
        <img
          src={`./images/projects/${props.image}`}
          alt={props.name}
          className="w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="absolute top-0 left-0 hoverText w-full h-full flex flex-col justify-end text-white font-bold p-6">
        <h2>{props.name}</h2>
        <Link to={"/portfolio/" + props.id}>View Project</Link>
      </div>
    </article>
  );
};

export default SingleProject;
