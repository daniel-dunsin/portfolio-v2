import React from "react";
import { Squash as Hamburger } from "hamburger-react";
import { useGlobalContext } from "../../context";
const Navbar = () => {
  const { setSidebarOpened, sidebarOpened } = useGlobalContext();
  return (
    <nav className="w-full fixed top-0 left-0 z-[6] text-white">
      <div className="w-full max-w-[1200px] p-3 flex justify-between items-center mx-auto z-6">
        {/* navbar brand */}
        <div>
          <img
            src={
              sidebarOpened
                ? "./images/logo-white.png"
                : "./images/logo-black.png"
            }
            alt="Logo"
            loading="lazy"
            className="w-[90px] h-[90px]"
          />
        </div>
        <div>
          <Hamburger
            size={28}
            toggle={setSidebarOpened}
            toggled={sidebarOpened}
            color={sidebarOpened ? "#fff" : "#000"}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
