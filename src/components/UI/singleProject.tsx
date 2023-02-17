import React, { FC } from "react";
import { IProject } from "../../types/types";
import { Link } from "react-router-dom";
import { BsSearch, BsViewStacked } from "react-icons/bs";

type singleProjectProps = IProject;

const SingleProject: FC<singleProjectProps> = (props) => {
  return (
    <article className="min-w-[350px] hoverImg relative h-[200px] overflow-hidden rounded-[10px] shadow-md">
      {/* img container */}
      <div className="w-full h-full">
        <img
          src={`./images/projects/${props.image}`}
          alt={props.name}
          className="w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="absolute top-0 left-0 hoverText w-0 h-full overflow-hidden flex flex-col justify-end text-white font-bold p-6">
        <h2 className="text-[18px] font-bold">{props.name}</h2>
        <Link
          to={"/portfolio/" + props.id}
          className="px-3 py-2 bg-mainDarkColor max-w-fit rounded-md shadow-md flex items-center gap-x-4"
        >
          View Project
          <span>
            <BsSearch />
          </span>
        </Link>
      </div>
    </article>
  );
};

export default SingleProject;
