import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faX,
  faUserPlus,
  IconDefinition,
  faRightToBracket,
  faForward,
  faInfo,
  faMagnifyingGlass,
  faArrowTrendUp,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

import Logo from "../assets/img/logo.svg";

import { Disclosure, Transition } from "@headlessui/react";

import { useState } from "react";
import LogOutNavbar from "./LogOutNavbar";

type NavigationDestination =
  | "/login"
  | "/signup"
  | "/about"
  | "/"
  | `/profile/${string}`
  | "/friends";

type NavigationItem = {
  id: number;
  title: string;
  icon: IconDefinition; // Replace IconType with the actual type for your FontAwesome icons
  to: NavigationDestination; // Make the 'to' property optional
};

function NavbarPublic() {
  const [userId] = useState("658ce352d7eb5f73c7e3a160");

  const [hoveredItem, setHoveredItem] = useState<null | number>(null);

  const navigate = useNavigate();
  const navigation: NavigationItem[] = [
    { id: 1, title: "Sign Up", icon: faUserPlus, to: "/signup" },
    { id: 2, title: "Log In", icon: faRightToBracket, to: "/login" },
    { id: 3, title: "Stream", icon: faForward, to: "/login" },
    { id: 4, title: "About YourSound", icon: faInfo, to: "/login" },
  ];
  const navigationForDesktop: NavigationItem[] = [
    { id: 1, title: "Stream", icon: faForward, to: "/" },
    {
      id: 2,
      title: "Profile",
      icon: faArrowTrendUp,
      to: `/profile/${userId}`,
    },
    { id: 3, title: "Friends", icon: faPeopleArrows, to: "/friends" },
    { id: 4, title: "About YourSound", icon: faInfo, to: "/" },
  ];

  // States

  //   Handlers

  // Handler function for Log in button on PublicNavbar

  // const loginNavigate = (): void => {
  //   navigate("/login");
  // };
  // const signUpNavigate = (): void => {
  //   navigate("/signup");
  // };
  const mainPageNavigate = (): void => {
    navigate("/");
  };

  const navigationHandler = (
    navigateDestination: NavigationDestination
  ): void => {
    navigate(navigateDestination);
  };

  const handleMouseEnter = (index: number): void => {
    setHoveredItem(index);
  };

  // Event handler for leaving a list item
  const handleMouseLeave = (): void => {
    setHoveredItem(null);
  };

  return (
    <Disclosure
      as="nav"
      className="bg-blue-500 p-2 sm:flex sm:justify-around items-center"
    >
      {({ open }) => (
        /* Use the `open` state to conditionally change the direction of an icon. */
        <>
          {/* For mobile */}
          <Disclosure.Button className="flex sm:hidden">
            {!open ? (
              <FontAwesomeIcon icon={faBars} />
            ) : (
              <FontAwesomeIcon icon={faX} />
            )}
          </Disclosure.Button>
          <Transition
            show={open}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* Here logo comes  */}

            <Disclosure.Panel as="div" className="mt-3 flex sm:hidden gap-4  ">
              {/* <img
                onClick={mainPageNavigate}
                className="w-24 h-24 rounded-2xl cursor-pointer"
                src={Logo}
              ></img> */}
              <Disclosure.Button
                onClick={mainPageNavigate}
                as="img"
                className="w-24 h-24 rounded-2xl cursor-pointer"
                src={Logo}
              ></Disclosure.Button>
              <div className="flex flex-col gap-3 mt-2">
                <p className="font-extrabold">YourSound</p>
                <h2 className="font-thin">Play - Listen - Publish</h2>
                <p className="text-xs opacity-50">
                  YourSound is the most social way to share your Sound with
                  Others
                </p>
              </div>
            </Disclosure.Panel>

            <Disclosure.Panel
              as="ul"
              className="flex flex-col sm:hidden gap-2 mt-4 ml-2"
            >
              {navigation.map((item) => (
                <Disclosure.Button
                  onClick={() => {
                    if (item.to) {
                      navigate(item.to);
                    }
                  }}
                  as="li"
                  key={item.id}
                  className="flex gap-4 cursor-pointer text-lg hover:bg-slate-400 rounded-lg"
                >
                  <FontAwesomeIcon
                    className="w-8 self-center "
                    icon={item.icon}
                  ></FontAwesomeIcon>
                  {item.title}
                </Disclosure.Button>
              ))}
            </Disclosure.Panel>
          </Transition>

          {/* For Desktop*/}
          {/* Logo Img */}
          <div className="hidden sm:flex items-center">
            <img
              onClick={mainPageNavigate}
              className="w-20 h-20 rounded-xl cursor-pointer"
              src={Logo}
            ></img>
          </div>

          {/* Middle List */}

          <div className="hidden sm:flex gap-6">
            <ul className="flex gap-2 text-white">
              {navigationForDesktop.map((listElement, index) => (
                <li
                  onClick={() => {
                    navigationHandler(listElement.to);
                  }}
                  key={listElement.id}
                  className="flex flex-col gap-1 cursor-pointer text-lg hover:text-gray-200"
                  // Mouse Enter and leave function for grabbing each index number and trigger animation
                  onMouseEnter={() => {
                    handleMouseEnter(index + 1);
                  }}
                  onMouseLeave={handleMouseLeave}
                >
                  {listElement.title}

                  {/* If the item is hovered item trigger to beat animation */}
                  {index === Number(hoveredItem) - 1 ? (
                    <FontAwesomeIcon
                      icon={listElement.icon}
                      bounce
                    ></FontAwesomeIcon>
                  ) : (
                    <FontAwesomeIcon icon={listElement.icon}></FontAwesomeIcon>
                  )}
                </li>
              ))}
            </ul>
            {/* Search Bar */}
            <div className="flex items-center">
              <label>
                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
              </label>{" "}
              <input
                className="bg-white rounded-xl text-black px-2 py-1"
                type="text"
              />
            </div>
          </div>

          <LogOutNavbar></LogOutNavbar>
        </>
      )}
    </Disclosure>
  );
}

export default NavbarPublic;
