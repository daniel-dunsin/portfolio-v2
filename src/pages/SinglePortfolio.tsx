import React, { useEffect, useState } from "react";
import { BiLink, BiPaperclip, BiShare } from "react-icons/bi";
import { BsArrowUpRight, BsGithub, BsShare } from "react-icons/bs";
import { useParams } from "react-router-dom";
import Container from "../components/sections/Container";
import Title from "../components/UI/Title";
import { projects, useGlobalContext } from "../context";
import { IProject } from "../types/types";
const SinglePortfolio = () => {
  const { id } = useParams();
  const allProjects: IProject[] = [];
  projects.forEach((project) => {
    project.projects.forEach((project) => {
      allProjects.push(project);
    });
  });
  const project = allProjects.find(
    (project) => project.id === parseInt(id as string)
  );

  return (
    <Container nextPageLink={`/portfolio`} nextPageText={`View other projects`}>
      <section className="w-full py-8">
        <img
          src={`../images/projects/${project?.image}`}
          alt={project?.name}
          className="w-full h-full object-contain object-center rounded-[10px]"
          loading="lazy"
        />
        <Title topOfPage={false} text={(project?.name as string) + "."} />
        <h3 className="mt-4 font-light text-[17px]">
          {project?.desc.split(".").map((desc, index) => {
            return (
              <p key={index} className="text-mainDarkColor">
                <span className="inline-block pr-2 align-middle">
                  <BiPaperclip />
                </span>
                {desc}
              </p>
            );
          })}
        </h3>
        <h3 className="font-bold text-[24px] mt-4">Tools.</h3>
        <div className="mt-2 flex flex-wrap gap-4">
          {project?.tools?.map((tool, index) => {
            return (
              <span
                className="items-center px-4 py-2 rounded-md bg-mainDarkColor text-white cursor-pointer"
                key={index}
              >
                {tool}
              </span>
            );
          })}
        </div>
        <h3 className="mt-4 font-bold text-[24px] mb-2">Links.</h3>
        <div className="flex gap-y-2 gap-x-4 w-full sm:flex-row flex-col items-start">
          {project?.links?.live && (
            <a
              target={"_blank"}
              href={project?.links?.live}
              className="items-center px-4 py-2 rounded-md bg-mainDarkColor text-white cursor-pointer"
            >
              View project live{" "}
              <span className="inline-block ml-2 align-middle">
                <BiLink />
              </span>
            </a>
          )}
          {project?.links?.github && (
            <a
              target={"_blank"}
              href={"https://github.com/daniel-dunsin" + project?.links?.github}
              className="items-center px-4 py-2 rounded-md bg-mainDarkColor text-white cursor-pointer"
            >
              View on github{" "}
              <span className="inline-block ml-2 align-middle">
                <BsGithub />
              </span>
            </a>
          )}
        </div>
      </section>
    </Container>
  );
};

export default SinglePortfolio;
