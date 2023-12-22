import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faX,
  faUserPlus,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

// Material UI
// import List from "@mui/joy/List";
// import ListItem from "@mui/joy/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";

import Logo from "../assets/img/logo.svg";

import { Disclosure, Transition } from "@headlessui/react";
import { useState } from "react";

type NavigationDestination = "/login" | "/signup" | "/about";

type NavigationItem = {
  id: number;
  title: string;
  icon: IconDefinition; // Replace IconType with the actual type for your FontAwesome icons
  to?: NavigationDestination; // Make the 'to' property optional
};

function NavbarPublic() {
  const navigate = useNavigate();
  const navigation: NavigationItem[] = [
    { id: 1, title: "Sign Up", icon: faUserPlus, to: "/signup" },
    { id: 2, title: "Log In", icon: faUserPlus, to: "/login" },
    { id: 3, title: "Stream", icon: faUserPlus, to: "/login" },
    { id: 4, title: "About YourSound", icon: faUserPlus, to: "/login" },
  ];

  return (
    <Disclosure as="nav" className="bg-gray-700 p-2">
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

            <Disclosure.Panel as="div" className="mt-3 flex gap-4 ">
              <img className="w-24 h-24 rounded-2xl" src={Logo}></img>
              <div className="flex flex-col gap-3 mt-2">
                <p className="font-extrabold">YourSound</p>
                <h2 className="font-thin">Play - Listen - Publish</h2>
                <p className="text-xs opacity-50">
                  YourSound is the most social way to share your Sound with
                  Others
                </p>
              </div>
            </Disclosure.Panel>

            {/* <Disclosure.Panel as="ul" className="sm:hidden mt-3 h-screen ">
            
              {navigation.map((element) => (
                <li className="mb-2" key={element}>
                  {element}
                </li>
              ))}
            </Disclosure.Panel> */}

            <Disclosure.Panel as="ul" className="flex flex-col gap-2 mt-4 ml-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  onClick={() => {
                    if (item.to) {
                      navigate(item.to);
                    }
                  }}
                  as="li"
                  className="flex gap-3 cursor-pointer text-lg"
                >
                  <FontAwesomeIcon icon={item.icon}></FontAwesomeIcon>
                  {item.title}
                </Disclosure.Button>
              ))}
            </Disclosure.Panel>
          </Transition>

          {/* For Desktop*/}
          <div className="hidden sm:flex gap-3 ">
            <ul className="">
              {navigation.map((listElement) => (
                <li>{listElement.title}</li>
              ))}
            </ul>
            <div>
              <label>Search</label>{" "}
              <input className="bg-white rounded-xl" type="text" />
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}

export default NavbarPublic;
