import {
  createContext,
  FC,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { IContext, myExperienceProps } from "../types/types";

export type AppProviderProps = { children: ReactElement };

const AppContext = createContext({} as IContext);

const myExperience: myExperienceProps[] = [
  {
    company: "CodeAlgo Academy",
    start_date: "Oct 2022",
    end_date: "Present",
    position: "Frontend developer intern",
    works: [
      "Converted figma designs into reusable, testable and well-defined codes",
      "Implemented APIs on the frontend",
      "Optimized webpages for maximum speed and scalability",
    ],
    skillsets: [
      "Next JS",
      "Typescript",
      "Tailwind CSS",
      "Redux toolkit",
      "Jest",
      "Git & Gitlab",
    ],
  },
  {
    company: "Ominiversity",
    start_date: "Oct 2022",
    end_date: "Dec 2022",
    position: "Frontend developer intern",
    works: [
      "Developed features to enhance user experience",
      "Implementing & consuming backend APIs and data",
      "Writing resuable codes for future use.",
    ],
    skillsets: ["React JS", "Sass", "Redux toolkit", "Git & Github"],
  },
];

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [sidebarOpened, setSidebarOpened] = useState<boolean>(false);
  const [companies, setCompanies] = useState<string[]>([]);
  const [experienceInView, setExperienceInView] = useState<myExperienceProps>(
    myExperience[0]
  );

  const selectCompany = (company: string) => {
    setExperienceInView(() => {
      return myExperience.find(
        (exp) => exp.company === company
      ) as myExperienceProps;
    });
  };

  // get All experiences
  useEffect(() => {
    setCompanies(() => {
      return myExperience.map((exp) => exp.company);
    });
  }, []);
  return (
    <AppContext.Provider
      value={{
        sidebarOpened,
        setSidebarOpened,
        experienceInView: experienceInView as myExperienceProps,
        companies,
        selectCompany,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = (): IContext => useContext(AppContext);
