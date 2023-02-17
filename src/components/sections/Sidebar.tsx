import React, { FC, ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGlobalContext } from "../../context";
import { Github, Linkedin, Twiiter } from "../Icons";
import { BiEnvelope } from "react-icons/bi";

type LinksProps = Array<{ href: string; text: string }>;
type SocialsProps = Array<{ href: string; icon: ReactElement }>;

const links: LinksProps = [
  {
    href: "/",
    text: "Home",
  },
  { href: "/about", text: "About Me" },
  {
    href: "/portfolio",
    text: "My Portfolio",
  },
  {
    href: "/contact",
    text: "Contact Me",
  },
];

const socials: SocialsProps = [
  {
    href: "https://www.linkedin.com/in/daniel-adejare-551a20237",
    icon: <Linkedin fill="#fff" size={24} />,
  },
  {
    href: "https://github.com/daniel-dunsin",
    icon: <Github fill="#fff" size={24} />,
  },
  {
    href: "twitter",
    icon: <Twiiter fill="#fff" size={24} />,
  },
  {
    href: "mailto:adejaredaniel12@gmail.com",
    icon: <BiEnvelope />,
  },
];

const Sidebar: FC = () => {
  const { sidebarOpened, setSidebarOpened } = useGlobalContext();
  const location = useLocation();
  return (
    <aside
      className={`fixed top-0 left-0 z-[2] w-screen min-h-screen bg-mainDarkColor text-white flex flex-col justify-center items-center ${
        sidebarOpened ? "sidebar-open" : "sidebar-hidden"
      }`}
    >
      <ul className="flex flex-col justify-center items-center gap-y-4 w-screen max-w-[1200px] mx-auto">
        {links.map((link, index) => {
          const content = (
            <>
              <Link
                to={link.href}
                className="mb-[4px] text-[20px] sm:text-[25px] md:text-[30px]"
              >
                {link.text}
              </Link>
              <div
                className={`underline ${
                  location.pathname === link.href && "link-in-view"
                }`}
              ></div>
            </>
          );
          return (
            <li
              key={index}
              className="link"
              onClick={() => {
                setSidebarOpened(false);
              }}
            >
              {content}
            </li>
          );
        })}
      </ul>
      <ul className="w-[70vw] max-w-[500px] mt-14 pt-4 border-t-2 border-white mx-auto flex justify-center items-center gap-x-4">
        {socials.map((social, index) => (
          <li
            key={index}
            className="text-white socials text-[24px] w-[45px] h-[45px] flex justify-center items-center rounded-full"
          >
            <a href={social.href} target="_blank">
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
