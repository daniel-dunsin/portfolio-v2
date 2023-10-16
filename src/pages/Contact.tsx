import React, { ReactElement, useState } from "react";
import Container from "../components/sections/Container";
import Title from "../components/UI/Title";
import { BiEnvelope } from "react-icons/bi";
import { Linkedin, Github, Twiiter } from "../components/Icons";
import ScrollContainers from "../components/sections/ScrollContainers";
import DisplayContainer from "../components/UI/displayContainers";
import Loader from "../components/UI/Loader";
import axios from "axios";
import Swal from "sweetalert2";

type socialProps = {
  href: string;
  icon: ReactElement;
  name: string;
};

const socials: socialProps[] = [
  {
    href: "https://www.linkedin.com/in/daniel-adejare-551a20237",
    icon: <Linkedin fill="#000" size={27} />,
    name: "Linkedin",
  },
  {
    href: "https://twitter.com/DannyWrld12?s=09",
    icon: <Twiiter fill="#000" size={27} />,
    name: "Twitter",
  },
  {
    href: "mailto:adejaredaniel12@gmail.com",
    icon: <BiEnvelope />,
    name: "E-Mail",
  },
];

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const submit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    const { data } = await axios.post("https://daniel-dunsin.onrender.com", {
      name,
      message,
      email,
    });

    setLoading(false);

    await Swal.fire({
      title: "Message Sent",
      text: "Your message has been received, i will respond as soon as possible, thank you!",
      timer: 2000,
      icon: "success",
      showConfirmButton: false,
    });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Container nextPageLink="/" nextPageText="Back to home">
      <>
        {loading && <Loader />}
        <Title
          text="Contact me."
          topOfPage={true}
          subtitle={"Have any project in mind? reach out to me 👋"}
        />
        <ScrollContainers width={100} displayWidgets={false}>
          {socials.map((social, index) => {
            return <DisplayContainer key={index} {...social} />;
          })}
        </ScrollContainers>
        <form onSubmit={submit} className="my-8 w-full max-w-[600px]">
          <input
            type="text"
            className="w-full p-3 bg-white rounded-[10px] placeholder:text-mainDarkColor text-mainDarkColor outline-none border-2 focus:border-mainDarkColor mb-6"
            placeholder="Your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="w-full p-3 bg-white rounded-[10px] placeholder:text-mainDarkColor text-mainDarkColor outline-none border-2 focus:border-mainDarkColor mb-6"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="w-full p-3 bg-white rounded-[10px] placeholder:text-mainDarkColor text-mainDarkColor outline-none border-2 focus:border-mainDarkColor mb-6 h-[200px] resize-none"
            placeholder="Type your message.."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="w-full p-3 bg-mainDarkColor text-white active:scale-[0.97] rounded-[10px]"
          >
            Send
          </button>
        </form>
      </>
    </Container>
  );
};

export default Contact;
