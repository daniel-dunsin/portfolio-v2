import Container from "../components/sections/Container";
import React from "react";
import { Bounce, Fade, Flip, Zoom } from "react-awesome-reveal";

type myDetailsProps = Array<{
  question: string;
  answer: string;
}>;

const myDetails: myDetailsProps = [
  { question: "Full Name", answer: "Adejare Daniel Oluwdunsin" },
  { question: "Age", answer: "16 years" },
  { question: "Phone number", answer: "+2348023720580" },
  { question: "Email", answer: "adejaredaniel12@gmail.com" },
  { question: "Nationality", answer: "Nigerian" },
  { question: "Education Level", answer: "Undergraduate" },
  { question: "Years of experience", answer: "1+ years" },
];

const About = () => {
  return (
    <Container nextPageLink="/portfolio" nextPageText="See my projects">
      <section className="w-full h-full pb-[2rem]">
        {/* main details */}
        <div className="flex items-start justify-between gap-8  sl:flex-row flex-col">
          <div className="flex-1 sl:max-w-fit">
            <Zoom direction="up" duration={1000}>
              <img
                src={"./images/daniel-1.jpg"}
                alt="daniel"
                loading="lazy"
                className="w-full sl:h-[450px] sl:max-w-[400px] object-cover object-center rounded-[10px]"
              />
            </Zoom>
          </div>
          <div className="flex-1 w-full">
            <Fade direction="up" duration={1000}>
              <h1 className="text-mainDarkColor text-[25px] sl:text-[40px] font-bold">
                Adejare Daniel
              </h1>
            </Fade>

            <Fade direction="up" duration={1000} delay={400}>
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
                    direction="up"
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
      </section>
    </Container>
  );
};

export default About;
