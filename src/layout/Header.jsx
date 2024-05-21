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
import avater from "../assets/user.svg";

const Header = () => {
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
      </li>
      <li>
        <NavLink> My Card</NavLink>
      </li>
      <li>
        <NavLink>Analytics</NavLink>
      </li>
    </ul>
  );
  return (
    <Navbar className="max-w-full rounded-none shadow-none bg-transparent border-0 px-0 py-3">
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
            <Menu>
              <MenuButton>
                {" "}
                <Avatar src={avater} />
              </MenuButton>
              <Transition
                enter="transition ease-out duration-75"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <MenuItems
                  anchor="bottom"
                  className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none"
                >
                  <MenuItem>
                    <a href="#" className="block data-[focus]:bg-blue-100">
                      Profile
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a href="#" className="block data-[focus]:bg-blue-100">
                      Logout
                    </a>
                  </MenuItem>
                </MenuItems>
              </Transition>
            </Menu>
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
              stroke="#fff"
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
              stroke="#fff"
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

export default Header;
