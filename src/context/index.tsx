import {
  createContext,
  FC,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { IContext, myExperienceProps, ProjectCategories } from "../types/types";

export type AppProviderProps = { children: ReactElement };

const AppContext = createContext({} as IContext);

const myExperience: myExperienceProps[] = [
  {
    company: "Edssistance",
    start_date: "March 2023",
    end_date: "Present",
    position: "Frontend developer (contract)",
    works: [
      "Developing and maintaining web applications using client side technologies",
      "Integrating backend APIs and data",
      "Developing features to enhance user experience ",
    ],
    skillsets: [
      "React JS",
      "Typescript",
      "Tailwind CSS",
      "Redux toolkit",
      "Git & Github",
    ],
  },
  {
    company: "CodeAlgo Academy",
    start_date: "Oct 2022",
    end_date: "Present",
    position: "Frontend developer (part-time)",
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
      "Cypress",
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

export const projects: ProjectCategories[] = [
  {
    id: 1,
    name: "Web Applications",
    projects: [
      {
        name: "CodeAlgo Academy",
        desc: "I worked with a tem of frontend developers to build this Learning Management System (LMS) where kids are able to learn to code through gamified lessons",
        id: 25,
        links: {
          live: "https://codealgoacademy.com",
        },
        image: "codealgo.png",
      },

      {
        name: "Edssistance",
        desc: "I worked togther with a backend developer to build this role-based School Managment System which helps school admins, parents, staff and students manage their activites seamlessly",
        id: 105,
        links: {
          live: "https://edssistance.com",
        },
        image: "edssistance.png",
      },
      {
        name: "Dblog",
        desc: "Dblog is a blog app with a lot of functionalites. Users can login with google, facebook or their email and password. The homapage lists the blogs that have been created by different users. Users can view others account details as well as yours. Users can create, read, edit and delete posts. Users can update their account details",
        id: 12,
        links: {
          live: "https://dblog-dc3a4.web.app",
          github: "/dblog-v2",
        },
        image: "dblog.png",
        tools: ["React JS", "Tailwind CSS", "Firebase", "Redux Js"],
      },
      {
        name: "Amado",
        desc: "This is an e-commerce app which features great functionalities and sleek design. Users are able to view the list of products. Users can filter the products based on size, color and many other preferences. Products can be added to cart and the quantity added can be edited in the cart page",
        id: 13,
        links: {
          live: "https://daniel-amado.netlify.app",
          github: "/Amado-e-commerce",
        },
        image: "amado.png",
        tools: ["React JS", "Bootstrap", "Context API"],
      },
      {
        name: "Github Search",
        desc: "This is a mini github clone, which uses the github api to provide results based on the users search input. The search results includes the related commits, topics, users and repositories. Ability to view users profile, their repositories, followers and people they follow",
        id: 14,
        links: {
          live: "https://daniel-github-search.vercel.app",
          github: "/Github-Search",
        },
        image: "github.png",
        tools: ["Next JS", "Typescript", "Tailwind CSS", "Context API"],
      },
    ],
  },
  {
    id: 0,
    name: "Web Pages",
    projects: [
      {
        name: "Homeland",
        desc: "Homeland is a real estate webapp that allows you to search and filter houses based on their location and price. It provides a page to view each houses as well as their agents",
        id: 0,
        links: {
          live: "https://daniel-homeland.vercel.app",
          github: "/Homeland",
        },
        image: "homeland.png",
        tools: ["React JS", "Tailwind CSS", "Context API"],
      },
      {
        name: "Holux",
        desc: "Holux is a real estate landing page designed which supports accessibility and is well optimized. It also has cool animation on scroll",
        id: 1,
        links: {
          live: "https://daniel-holux.netlify.app",
          github: "/Real-Estate-Website",
        },
        image: "holux.png",
        tools: ["HTML", "CSS", "AOS", "Javascript"],
      },
      {
        name: "GPT-3",
        desc: "GPT-3 is a landing page design for the OPEN-AI, it features their sponsors, blog posts and other sections",
        id: 2,
        links: {
          live: "https://daniel-gpt3.vercel.app",
          github: "/gpt-3",
        },
        image: "gpt-3.png",
        tools: ["React JS", "CSS"],
      },
      {
        name: "Hoobank",
        desc: "Hoobank is a landing page for a bank platform. It features accessible and nice user interface designs",
        id: 3,
        links: {
          live: "https://daniel-hoobank.vercel.app",
          github: "/Hoobank",
        },
        image: "hoobank.png",
        tools: ["React JS", "CSS"],
      },
      {
        name: "Fitbody",
        desc: "Fitbody is a gym website built with next js.It features great UI designs and nice scroll animations",
        id: 4,
        links: {
          live: "https://fitbody-beta.vercel.app",
          github: "/Fitbody",
        },
        image: "fitbody.png",
        tools: ["Next JS", "AOS", "CSS Modules"],
      },
      {
        name: "Architect Website",
        desc: "This is a landing page for an architectural company built with HTML, CSS and Javascript",
        id: 5,
        links: {
          live: "https://daniel-architect.netlify.app",
          github: "/Architect-Website",
        },
        image: "architect.png",
        tools: ["HTML", "CSS", "Javascript"],
      },
      {
        name: "NFT Marketplace",
        desc: "NFT marketplace is a landing page for NFT Collections. It features a sleek design interface and a filter section where NFT Collections are filtered based on the user's selected category",
        id: 6,
        links: {
          live: "https://daniel-nft-marketplace.vercel.app",
          github: "/nft-marketplace",
        },
        image: "nft.png",
        tools: ["React JS", "CSS"],
      },
    ],
  },

  {
    id: 2,
    name: "Portfolios",
    projects: [
      {
        name: "Adejare Daniel",
        desc: "This is my first portfolio built with HTML, Bootstrap and Javascript",
        id: 17,
        links: {
          live: "https://adejare-daniel.netlify.app",
          github: "/Portfolio",
        },
        image: "adejare-daniel.png",
        tools: ["HTML", "Bootstrap", "Javascript"],
      },
      {
        name: "Adejare Daniel V2",
        desc: "This is my current portfolio built with React JS, Typescript and Tailwind CSS",
        id: 18,
        links: {
          live: "",
          github: "/portfolio-v2",
        },
        image: "daniel-dunsin.png",
        tools: ["React JS", "Typescript", "Context API", "Tailwind CSS"],
      },
      {
        name: "Bamidele Olaoluwa",
        desc: "This is a 3D Designer portfolio. It features great UI and UX principles as well as mobile resposiveness",
        id: 19,
        links: {
          live: "https://bamidele-olaoluwa.netlify.app",
          github: "/Bamidele-Olaoluwa",
        },
        image: "bamidele-olaoluwa.png",
        tools: ["React JS", "Context API", "Tailwind CSS"],
      },
    ],
  },
  {
    id: 3,
    name: "Utilities & Games",
    projects: [
      {
        name: "Text To List Converter",
        desc: "This is a utility app converts list of items seperated by either a comma, space or new lines into HTML <li> tags out of the box",
        id: 7,
        links: {
          live: "https://daniel-text-to-list.vercel.app",
          github: "/text-to-HTML-list-converter",
        },
        image: "text-to-list.png",
        tools: ["HTML", "CSS", "Javascript"],
      },
      {
        name: "Memory Game",
        desc: "This is a memory game built with React JS, CSS and Typescript. It features reusable codes and nice flip animations",
        id: 8,
        links: {
          live: "https://daniel-memory-game.vercel.app",
          github: "/Memory-Game",
        },
        image: "memory-game.png",
        tools: ["React JS", "CSS", "Typescript"],
      },
      {
        name: "Drink Water",
        desc: "This is a game that fills a large drum of water based on the amount of smaller drums selected",
        id: 9,
        links: {
          live: "https://drink-water-kappa.vercel.app",
          github: "/Drink-Water",
        },
        image: "drink-water.png",
        tools: ["HTML", "CSS", "Javascript"],
      },
      {
        name: "Quiz App",
        desc: "This is a quiz app built with HTML, CSS and Javascript. It tracks users scores and the time used and displays them to the user after the session",
        id: 10,
        links: {
          live: "https://daniel-quiz-app.vercel.app",
          github: "/Quiz-App",
        },
        image: "quiz-app.png",
        tools: ["HTML", "CSS", "Javascript"],
      },
      {
        name: "Button Editor",
        desc: "This is a utility web app that allows you to customize your buttons to your taste. Properties like color, background, width and many more can be edited",
        id: 11,
        links: {
          live: "https://daniel-button-editor.vercel.app",
          github: "/Button-Editor",
        },
        image: "button-editor.png",
        tools: ["Next JS", "Styled Components", "Typescript"],
      },
    ],
  },
];

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [sidebarOpened, setSidebarOpened] = useState<boolean>(false);
  const [companies, setCompanies] = useState<string[]>([]);
  const [experienceInView, setExperienceInView] = useState<myExperienceProps>(
    myExperience[0]
  );
  const [filteredProjects, setFilteredProjects] = useState<ProjectCategories[]>(
    [...projects]
  );
  const [filterButtons, setFilterButtons] = useState<string[]>(["All"]);
  const [selectedFilterButton, setSelectedFilterButton] =
    useState<string>("All");

  const selectCompany = (company: string) => {
    setExperienceInView(() => {
      return myExperience.find(
        (exp) => exp.company === company
      ) as myExperienceProps;
    });
  };
  const selectFilterButton = (name: string) => {
    setSelectedFilterButton(name);
    setFilteredProjects(() => {
      if (name === "All") {
        return [...projects];
      } else {
        return projects.filter((project) => project.name === name);
      }
    });
  };

  // get All experiences
  useEffect(() => {
    setCompanies(() => {
      return myExperience.map((exp) => exp.company);
    });
  }, []);
  // get all buttons
  useEffect(() => {
    setFilterButtons(() => {
      return [...projects].reduce(
        (acc, curr) => {
          if (!acc.includes(curr.name)) {
            acc.push(curr.name);
          }
          return acc;
        },
        ["All"]
      );
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
        filteredProjects,
        filterButtons,
        selectedFilterButton,
        selectFilterButton,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = (): IContext => useContext(AppContext);
