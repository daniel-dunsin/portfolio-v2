import Container from "../components/sections/Container";
import React, { ReactElement, Ref, useRef, useState } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import Title from "../components/UI/Title";
import { useGlobalContext } from "../context";
import { BiCommentDots, BiPaperclip, BiPointer } from "react-icons/bi";
import {
  CSS3,
  Cypress,
  Github,
  Gitlab,
  HTML5,
  Javascript,
  NextJS,
  Postman,
  ReactJS,
  ReduxJS,
  Sass,
  StyledComponents,
  TailwindCSS,
  Typescript,
  VSCode,
  EJS,
  ExpressJS,
  Jest,
  MongoDB,
  NestJS,
  NodeJs,
  PostgreSQL,
  SocketIO,
} from "../components/Icons";
import ScrollContainers from "../components/sections/ScrollContainers";
import DisplayContainer from "../components/UI/displayContainers";
import { skillsProps, myDetailsProps, toolsProps } from "../types/types";

const myDetails: myDetailsProps[] = [
  { question: "Full Name", answer: "Adejare Daniel Oluwdunsin" },
  { question: "Age", answer: "17 years" },
  { question: "Phone number", answer: "+2348023720580" },
  { question: "Email", answer: "adejaredaniel12@gmail.com" },
  { question: "Nationality", answer: "Nigerian" },
  { question: "Education Level", answer: "Undergraduate" },
  { question: "Years of experience", answer: "2+ years" },
];

const skills: skillsProps[] = [
  {
    name: "Javascript",
    icon: <Javascript size={27} fill={"#000"} />,
  },
  {
    name: "React JS",
    icon: <ReactJS size={27} fill={"#000"} />,
  },
  {
    name: "Typescript",
    icon: <Typescript size={27} fill={"#000"} />,
  },
  {
    name: "Next JS",
    icon: <NextJS size={27} fill={"#000"} />,
  },
  {
    name: "Redux Toolkit",
    icon: <ReduxJS size={27} fill={"#000"} />,
  },
  {
    name: "Cypress",
    icon: <Cypress size={27} fill={"#000"} />,
  },
  {
    name: "Node JS",
    icon: <NodeJs size={27} fill={"#000"} />,
  },
  {
    name: "Express JS",
    icon: <ExpressJS size={27} fill={"#000"} />,
  },
  {
    name: "Nest JS",
    icon: <NestJS size={27} fill={"#000"} />,
  },
  {
    name: "PostgreSQL",
    icon: <PostgreSQL size={27} fill={"#000"} />,
  },
  {
    name: "Mongo DB",
    icon: <MongoDB size={27} fill={"#000"} />,
  },
  {
    name: "Jest",
    icon: <Jest size={27} fill={"#000"} />,
  },
];

const tools: toolsProps[] = [
  { icon: <VSCode size={27} fill={"#000"} />, name: "Visual Studio Code" },
  { icon: <Github size={27} fill={"#000"} />, name: "Github" },
  { icon: <Gitlab size={27} fill={"#000"} />, name: "Gitlab" },
  { icon: <Postman size={27} fill={"#000"} />, name: "Postman" },
];

const About = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const skillsContainer = useRef<any>(null);

  const { companies, selectCompany, experienceInView } = useGlobalContext();

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);
  return (
    <Container nextPageLink="/portfolio" nextPageText="See my projects">
      <section className="w-full h-full pb-[2rem]">
        {/* main details */}
        <Title text="About Me." topOfPage={true} />
        <div className="flex items-start justify-between gap-8  sl:flex-row flex-col">
          <div className="flex-1 sl:max-w-fit">
            <img
              src={"./images/daniel-1.jpg"}
              alt="daniel"
              loading="lazy"
              className="w-full sl:h-[450px] sl:max-w-[400px] object-cover object-center rounded-[10px]"
            />
          </div>
          <div className="flex-1 w-full">
            <Fade
              direction={width < 800 ? "left" : "up"}
              duration={1000}
              triggerOnce={true}
            >
              <h1 className="text-mainDarkColor text-[25px] sl:text-[40px] font-bold">
                Adejare Daniel
              </h1>
            </Fade>

            <Fade
              direction={width < 800 ? "left" : "up"}
              duration={1000}
              delay={400}
              triggerOnce={true}
            >
              <div className="flex flex-col gap-y-2 my-4 text-[17px] max-w-[600px] text-mainDarkColor">
                <p>
                  I am a versatile full stack engineer with a diverse skill set,
                  I have a proven history of crafting web solutions that leave a
                  lasting impact on clients. My drive to harness the power of
                  software development in solving problems is rivaled only by my
                  unyielding pursuit of perfection. I have a sharp attention to
                  detail and a strong focus on staying at the forefront of
                  industry trends, I am wholeheartedly devoted to delivering
                  exceptional outcomes that consistently surpass expectations
                </p>
              </div>
            </Fade>
            <div className="grid sl:grid-cols-2 grid-cols-1 gap-[1rem]">
              {myDetails.map((myDetail, index: number) => {
                return (
                  <Fade
                    key={index}
                    direction={width < 800 ? "left" : "up"}
                    duration={1000}
                    triggerOnce={true}
                    delay={(index + 1) * 400}
                  >
                    <div className="flex items-center gap-x-2 flex-wrap">
                      <p className="font-bold">{myDetail.question} :</p>
                      <p>{myDetail.answer}</p>
                    </div>
                  </Fade>
                );
              })}
            </div>
            <Fade
              direction={width < 800 ? "left" : "up"}
              duration={1000}
              triggerOnce={true}
              delay={2400}
            >
              <a href="https://drive.google.com/file/d/1zNzHQwUMSspctu_PWfxhV_k0Y4-6iAHU/view?usp=drive_link">
                <button className="mt-4 max-w-fit px-4 py-2 bg-mainDarkColor text-white text-[15px] rounded-md">
                  Download CV
                </button>
              </a>
            </Fade>
          </div>
        </div>

        <Title text="Experience." topOfPage={false} />
        <div className="flex gap-y-6 gap-x-[3rem] items-start my-8 md:flex-row flex-col">
          <div className="flex overflow-x-scroll w-[100%] max-w-fit pb-3 flex-1 pt-2 horizontal-scrollbar min-w-fit">
            <div className="flex md:flex-col gap-2 md:items-start md:justify-start justify-center items-center min-w-fit">
              {companies?.map((company, index) => {
                return (
                  <article
                    className={`flex flex-col experience cursor-pointer min-w-fit max-w-fit ${
                      company === experienceInView?.company &&
                      "experience-in-view"
                    }`}
                    onClick={() => {
                      selectCompany(company);
                    }}
                    key={index}
                  >
                    <p>{company}</p>
                    <div className="custom-underline"></div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="w-full flex-1">
            <h1 className="text-mainDarkerColor text-[25px] sl:text-[40px] font-bold leading-[1]">
              {experienceInView?.company}
            </h1>
            <h2 className="text-mainDarkColor text-[1.3rem] sl:text-[2rem] font-bold my-3 leading-[1]">
              {experienceInView?.position}
            </h2>
            <p className="text-[1.1rem] text-mainDarkGrayColor">
              {experienceInView?.start_date} - {experienceInView?.end_date}
            </p>

            <h3 className="text-[1.1rem] font-bold text-mainDarkColor mt-4 mb-3">
              Tasks
            </h3>
            <div className="flex flex-col gap-y-4">
              {experienceInView?.works?.map((work, index) => {
                return (
                  <p key={index}>
                    <BiPaperclip className="inline-block mr-2" />
                    {work}
                  </p>
                );
              })}
            </div>
          </div>
        </div>

        <Title
          text="Skills."
          subtitle="Below is a list of web technologies i use."
          topOfPage={false}
        />
        <ScrollContainers width={620} displayWidgets={true}>
          {skills.map((skill, index: number) => {
            return <DisplayContainer key={index} {...skill} />;
          })}
        </ScrollContainers>

        <Title
          text="Tools."
          subtitle="Discover what tools i use for work."
          topOfPage={false}
        />
        <ScrollContainers width={150} displayWidgets={false}>
          {tools.map((tool, index: number) => {
            return <DisplayContainer key={index} {...tool} />;
          })}
        </ScrollContainers>
      </section>
    </Container>
  );
};

export default About;
