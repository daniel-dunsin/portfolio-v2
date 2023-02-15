import React from "react";
import Container from "../components/sections/Container";
import { Fade } from "react-awesome-reveal";
const Home = () => {
  return (
    <Container nextPageLink="/about" nextPageText="Learn more about me">
      <header className="h-full w-full">
        <Fade direction="up" delay={300}>
          <p className="text-mainGrayColor px-4 py-2 bg-mainDarkColor rounded-md max-w-fit text-center text-[1.1rem]">
            Hey there 👋, my name is :
          </p>
        </Fade>
        <Fade
          direction="up"
          delay={1000}
          className="text-[60px] sm:text-[70px] md:text-[100px] text-mainDarkColor font-bold leading-[1.3] mt-3"
        >
          <h1>
            Adejare <br className="sm:hidden block" /> Daniel
          </h1>
        </Fade>
        <Fade direction="up" delay={1700}>
          <p className="text-[1rem] max-w-[600px] leading-[1.2] mt-4">
            I build things for the web! 🙂 <br />
            I'm a frontend developer that possesses passion for User Interface,
            User Experience, accessible and responsive websites
          </p>
        </Fade>
      </header>
    </Container>
  );
};

export default Home;
