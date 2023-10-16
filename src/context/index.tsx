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
    position: "Full stack developer (contract)",
    works: [
      "Collaborated with UI/UX designers, software engineers and product manager to create an easy-to-use product",
      "Stayed in touch with clients from start to finish, making sure they were part of the journey. Also, shared project ideas and progress with them and the project owner.",
      "Developed a safe and secure wallet system and payment gateway",
      "Developed a seucre role-based authentication system",
    ],
    skillsets: [
      "React JS",
      "Node JS",
      "Mongo DB",
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
    position: "Frontend developer",
    works: [
      "Led the architectural planning and execution of solutions by utilizing the React.js JavaScript framework to craft diverse front-end screens. Employed pre-existing components from NPM (Node Package Manager) and seamlessly integrated them with the Redux library, ensuring seamless connectivity with API endpoints.",
      "Developed code that works smoothly across multiple web browsers, ensuring a broad user reach.",
      "Implemented performance enhancements such as lazy loading, code splitting, and minimizing HTTP requests to improve website speed and loading times.",
      "Worked closely with back-end developers to ensure a seamless integration of the front-end with the back-end systems.",
      "Designed front-end systems with scalability in mind, allowing for future expansion and new feature integration.",
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
        desc: "I worked with other full stack developers to build this role-based School Managment System which helps school admins, parents, staff and students manage their activites seamlessly",
        id: 105,
        links: {
          live: "https://edssistance.com",
        },
        image: "edssistance.png",
      },
      {
        name: "Dblog",
        desc: "DBlog is a feature-rich blog application that offers a wide range of functionalities. Users can conveniently log in using their Google, Facebook, or email and password credentials. The homepage showcases a collection of blogs created by various users. With Dblog, users can explore other users' account details alongside their own. Furthermore, users have the flexibility to create, read, edit, and delete their blog posts. Dblog also empowers users to easily update their account information.",
        id: 12,
        links: {
          live: "https://dblog-dc3a4.web.app",
          github: "/dblog-v2",
        },
        image: "dblog.png",
        tools: ["React JS", "Tailwind CSS", "Firebase", "Redux Js"],
      },
      {
        name: "Realtor",
        desc: "A robust Real Estate API that empowers users to effortlessly create property listings, facilitate seamless communication with potential buyers, tenants, and fellow agents. In addition, our API offers an integrated wallet system leveraging Paystack for secure financial transactions.",
        id: 109210291,
        links: {
          live: "https://daniel-realtor.onrender.com",
          github: "/realtor-api",
        },
        image: "realtor.png",
        tools: [
          "Node JS",
          "Express JS",
          "Mongo DB",
          "Typescript",
          "Swagger UI",
          "Paystack",
        ],
      },
      {
        name: "Amado",
        desc: "This e-commerce app boasts a wide array of impressive features and a sleek, user-friendly design. Users can effortlessly browse through the extensive product catalog. With the ability to filter products based on size, color, and various other preferences, finding the perfect item is a breeze. Adding products to the cart is a simple process, and users have the flexibility to adjust the quantity of items in their cart directly from the cart page.",
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
        desc: "This is a mini github clone, which leverages the github api to provide results based on the users search input. The search results includes the related commits, topics, users and repositories. Ability to view users profile, their repositories, followers and people they follow",
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
        desc: "Holux is a real estate landing page designed which supports accessibility and is well optimized.  it features captivating scroll animations that add a touch of elegance to your browsing journey",
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
        desc: "GPT-3 is a landing page design for the OPEN-AI. This page showcases their sponsors, offers insightful blog posts, and provides various other engaging sections to explore.",
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
        name: "NFT Marketplace",
        desc: "NFT marketplace is a landing page for NFT Collections. The inclusion of a filter section enables users to easily sort and discover NFT Collections based on their preferred categories.",
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
        desc: "This is a 3D Designer's portfolio, expertly designed to embody exceptional UI and UX principles. It offers a seamless and visually pleasing experience, with full mobile responsiveness to ensure accessibility from any device.",
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
