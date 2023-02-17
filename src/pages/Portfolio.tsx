import React from "react";
import Container from "../components/sections/Container";
import FilterButtons from "../components/UI/FilterButtons";
import SingleProject from "../components/UI/singleProject";
import Title from "../components/UI/Title";
import { useGlobalContext } from "../context";

const Portfolio = () => {
  const { filteredProjects } = useGlobalContext();
  return (
    <Container
      nextPageLink="/contact"
      nextPageText="You love my works? Contact Me"
    >
      <>
        <Title
          text="My Projects."
          subtitle="Below is a list of my selected projects"
          topOfPage={true}
        />
        <FilterButtons />

        <div className="mt-4">
          {filteredProjects.map((project, index: number) => {
            return (
              <section key={index}>
                <Title topOfPage={false} text={project.name} smallSize={true} />
                <div className="grid items-center justify-start flex-wrap gap-[1rem] md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
                  {project.projects.map((project, index) => {
                    return <SingleProject key={index} {...project} />;
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </>
    </Container>
  );
};

export default Portfolio;
