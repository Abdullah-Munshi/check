import React from "react";
import { Avatar, Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import logo from "../assets/logo.png";
import activeLink from "../assets/active-link.svg";

const HeaderBefore = () => {
  const [openNav, setOpenNav] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="main-menu mt-2 mb-4 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <li>
        <NavLink>Home</NavLink>
        <img
          className="active-sign absolute left-1/2 -translate-x-1/2 bottom-0 w-[calc(100%+8px)] max-w-[calc(100%+8px)]"
          src={activeLink}
          alt=""
        />
      </li>
      <li>
        <NavLink>About Us</NavLink>
      </li>
      <li>
        <NavLink>Contact</NavLink>
      </li>
    </ul>
  );
  return (
    <Navbar className="header-before max-w-full rounded-none shadow-none bg-transparent border-0 px-0 py-3 absolute w-full left-0 right-0 z-20">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <img className="w-[130px]" src={logo} alt="logo" />
        </Typography>
        <div className="flex items-center justify-end">
          <div className="hidden lg:block">{navList}</div>
          <div className="hidden lg:block">
            <div className="access-btns-outer">
              <div className="access-btns">
                <a href="#">Log-In</a>
                <span className="mx-[10px] opacity-60">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAXCAYAAADKmiUPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAeSURBVHgBvcQxEQAADAKxvyqqEQTiFlSQIejxUbMChCYBQ+JPYSIAAAAASUVORK5CYII="
                    alt=""
                  />
                </span>
                <a href="#">Create your card</a>
              </div>
            </div>
          </div>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-7 w-7 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="#000"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="#000"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </Collapse>
    </Navbar>
  );
};

export default HeaderBefore;
