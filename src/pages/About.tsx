import Container from "../components/sections/Container";
import React, { ReactElement, Ref, useRef, useState } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import Title from "../components/UI/Title";
import { useGlobalContext } from "../context";
import { BiCommentDots, BiPaperclip, BiPointer } from "react-icons/bi";
import {
  CSS3,
  HTML5,
  Javascript,
  NextJS,
  ReactJS,
  ReduxJS,
  StyledComponents,
  TailwindCSS,
  Typescript,
} from "../components/Icons";
import ScrollContainers from "../components/sections/ScrollContainers";

type myDetailsProps = {
  question: string;
  answer: string;
};
type skillsProps = {
  icon: React.ReactElement;
  name: string;
};

const myDetails: myDetailsProps[] = [
  { question: "Full Name", answer: "Adejare Daniel Oluwdunsin" },
  { question: "Age", answer: "16 years" },
  { question: "Phone number", answer: "+2348023720580" },
  { question: "Email", answer: "adejaredaniel12@gmail.com" },
  { question: "Nationality", answer: "Nigerian" },
  { question: "Education Level", answer: "Undergraduate" },
  { question: "Years of experience", answer: "1+ years" },
];

const skills: skillsProps[] = [
  {
    name: "HTML",
    icon: <HTML5 size={27} fill={"#000"} />,
  },
  {
    name: "CSS",
    icon: <CSS3 size={27} fill={"#000"} />,
  },
  {
    name: "Javascript",
    icon: <Javascript size={27} fill={"#000"} />,
  },
  {
    name: "Tailwind CSS",
    icon: <TailwindCSS size={27} fill={"#000"} />,
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
    name: "Styled Components",
    icon: <StyledComponents size={27} fill={"#000"} />,
  },
  {
    name: "Redux Toolkit",
    icon: <ReduxJS size={27} fill={"#000"} />,
  },
];

const About = () => {
  const [width, setWidth] = useState<number>(0);
  const skillsContainer = useRef<any>(null);

  const { companies, selectCompany, experienceInView } = useGlobalContext();

  React.useEffect(() => {
    console.log(skillsContainer?.current);
  }, []);
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
            <Fade direction={width < 800 ? "left" : "up"} duration={1000}>
              <h1 className="text-mainDarkColor text-[25px] sl:text-[40px] font-bold">
                Adejare Daniel
              </h1>
            </Fade>

            <Fade
              direction={width < 800 ? "left" : "up"}
              duration={1000}
              delay={400}
            >
              <div className="flex flex-col gap-y-2 my-4 text-[17px] max-w-[600px] text-mainDarkColor">
                <p>
                  I am a frontend developer residing in Nigeria. I have over 1
                  year experience in building scalable, user expeirence, user
                  interface and accessible websites with HTML, CSS and
                  JavaScript, as well as some of their libraries and frameworks.
                </p>
                <p>
                  I understand the rudiments of web optimization and
                  accesibility.
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
          </div>
        </div>

        <Title text="Experience." topOfPage={false} />
        <div className="flex gap-y-6 gap-x-[3rem] items-start my-8 md:flex-row flex-col">
          <div className="flex overflow-x-scroll w-full max-w-fit pb-3 flex-1 pt-2">
            <div className="flex md:flex-col gap-2 md:items-start md:justify-start justify-center items-center w-fit">
              {companies?.map((company, index) => {
                return (
                  <article
                    className={`flex flex-col experience cursor-pointer max-w-fit ${
                      company === experienceInView?.company &&
                      "experience-in-view"
                    }`}
                    onClick={() => {
                      selectCompany(company);
                    }}
                    key={index}
                  >
                    <p>{company}</p>
                    <div className="underline"></div>
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

            <h3 className="text-[1.1rem] font-bold text-mainDarkColor mt-4 mb-3">
              Web technologies used:
            </h3>
            <div className="flex flex-row gap-4 flex-wrap">
              {experienceInView?.skillsets?.map((skill, index) => {
                return (
                  <span
                    className="max-w-fit px-4 py-2 bg-mainDarkGrayColor text-white text-[15px] rounded-md"
                    key={index}
                  >
                    {skill}
                  </span>
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
        <ScrollContainers width={1350}>
          {skills.map((skill, index: number) => {
            return (
              <Fade
                direction="up"
                triggerOnce={true}
                key={index}
                delay={index * 50}
                fraction={0.1}
              >
                <article
                  className="h-[180px] py-6 px-4 min-w-[180px] max-w-fit bg-mainDarkColor shadow-md rounded-[10px]"
                  key={index}
                >
                  <span className="w-[45px] h-[45px] bg-white rounded-full flex justify-center items-center">
                    {skill.icon}
                  </span>
                  <h2 className="text-white font-bold text-[18px] mt-4">
                    {skill.name}
                  </h2>
                </article>
              </Fade>
            );
          })}
        </ScrollContainers>
      </section>
    </Container>
  );
};

export default About;
