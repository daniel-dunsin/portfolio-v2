import Container from "../components/sections/Container";
import React from "react";

type myDetailsProps = Array<{
  question: string;
  answer: string;
}>;

const myDetails: myDetailsProps = [];

const About = () => {
  return (
    <Container nextPageLink="/portfolio" nextPageText="See my projects">
      <section className="w-full h-full pb-[2rem]">
        {/* main details */}
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
            <h1 className="text-mainDarkColor text-[25px] sl:text-[40px] font-bold">
              Adejare Daniel
            </h1>

            <div className="flex flex-col gap-y-2 my-4 text-[17px] max-w-[600px] text-mainDarkColor">
              <p>
                I am a frontend developer residing in Nigeria. I have over 1
                year experience in building scalable, user expeirence, user
                interface and accessible websites with HTML, CSS and JavaScript,
                as well as some of their libraries and frameworks.
              </p>
              <p>
                I understand the rudiments of web optimization and accesibility.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default About;
