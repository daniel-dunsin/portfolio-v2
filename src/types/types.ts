import { Dispatch, SetStateAction, ReactElement } from "react";

export type IContext = {
  sidebarOpened: boolean;
  setSidebarOpened: Dispatch<SetStateAction<boolean>>;
  companies: string[];
  selectCompany: (company: string) => void;
  experienceInView: myExperienceProps;
  filteredProjects: ProjectCategories[];
  filterButtons: string[];
  selectedFilterButton: string;
  selectFilterButton: (name: string) => void;
};

export type myExperienceProps = {
  company: string;
  start_date: string;
  position: string;
  end_date: string;
  works: string[];
  skillsets: string[];
};

export type myDetailsProps = {
  question: string;
  answer: string;
};
export type skillsProps = {
  icon: React.ReactElement;
  name: string;
};
export type toolsProps = {
  icon: ReactElement;
  name: string;
};

export type ProjectCategories = {
  id: number;
  name: string;
  projects: IProject[];
};

export type IProject = {
  id: number;
  name: string;
  links: {
    live?: string;
    github?: string;
  };
  image: string;
  desc: string;
  tools?: string[] | undefined;
};
