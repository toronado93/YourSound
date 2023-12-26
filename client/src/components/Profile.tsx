import { Tab } from "@headlessui/react";

import DefaultProfilePic from "../assets/img/profile.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPencil, faImages } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type ListItem = {
  id: number;
  title: string;
  important?: boolean;
};

type HoveredButtons = {
  [key: string]: boolean;
};

function Profile() {
  const navigation: ListItem[] = [
    { id: 1, title: "My Profile" },
    { id: 2, title: "Payment" },
    { id: 3, title: "Billing" },
    { id: 4, title: "Delete Account", important: true },
  ];

  // We create an state object , instead create state variable , in order to group edit buttons
  // when user come over the button we fill the empty object with variable and give them true
  // hence we obtain boolean state variables inside object than we can use this variables to trigger beat animation

  const [hoveredButtons, setHoveredButtons] = useState<HoveredButtons>({});

  // Handler

  // Here when user comes over button we create dynamic state from catching the id and give boolean
  const mouseEnterHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    const buttonId = event.currentTarget.id;
    setHoveredButtons((previosState) => ({
      ...previosState,
      [buttonId]: true,
    }));
  };
  const mouseLeaveHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    const buttonId = event.currentTarget.id;
    setHoveredButtons((previousState) => ({
      ...previousState,
      [buttonId]: false,
    }));
  };

  return (
    <div className=" flex justify-center ">
      <div className="text-black bg-white sm:mt-40 rounded-lg">
        <div>
          {/* <ul>
            {navigation.map((listElement) => (
              <li>{listElement.title}</li>
            ))}
          </ul> */}
          <Tab.Group>
            <div className="flex gap-5 ">
              <Tab.List className="border border-solid border-gray-100 rounded-xl p-2">
                <div className="flex flex-col gap-5 mt-3 mb-2">
                  {navigation.map((listElement) => (
                    <Tab
                      // don't forget to close outline
                      className="text-left text-sm outline-none "
                      key={listElement.id}
                    >
                      {({ selected }) => (
                        <span
                          className={`py-2 px-3  rounded-2xl ${
                            selected
                              ? "text-blue-600 bg-blue-50 "
                              : // if element has importante make it red text color
                              listElement.important
                              ? "text-red-600"
                              : "text-gray-400"
                          }`}
                        >
                          {listElement.title}
                        </span>
                      )}
                    </Tab>
                  ))}
                </div>
              </Tab.List>
              <Tab.Panels>
                {/* Profile Page */}
                <Tab.Panel className="mt-3 w-96 flex flex-col gap-6 pr-6 ">
                  <h2 className="font-bold tracking-wide">My Profile</h2>
                  <div className="flex gap-3 ">
                    <div className="">
                      <img
                        className="w-32 h-32 border border-solid border-black rounded-xl"
                        src={DefaultProfilePic}
                      ></img>
                      <span className="text-xs  text-blue-400 cursor-pointer flex gap-1 mt-1">
                        <FontAwesomeIcon icon={faImages}></FontAwesomeIcon>{" "}
                        Change Profile Image
                      </span>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <h2 className="tracking-wide">Information</h2>
                        <button
                          onMouseEnter={mouseEnterHandler}
                          onMouseLeave={mouseLeaveHandler}
                          id="editbutton1"
                          className="border border-solid border-gray-200 p-2 rounded-3xl text-gray-400 flex gap-2"
                        >
                          <span>Edit</span>
                          <FontAwesomeIcon
                            beat={hoveredButtons["editbutton1"]}
                            icon={faPencil}
                          ></FontAwesomeIcon>
                        </button>
                      </div>
                      <div className="mt-2 font-thin flex flex-col gap-1">
                        <div className="flex flex-col gap-1">
                          <label className="text-gray-400">Name</label>
                          <span>Emin Ertac Pehlivan</span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-gray-400">Email</label>
                          <span>emin.ertac1905@hotmail.com</span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-gray-400">Phone</label>
                          <span>+4407455999999</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-3">
                    <div className="flex justify-between mb-4">
                      <h2 className="font-bold tracking-wide self-center ">
                        Address
                      </h2>
                      <button
                        onMouseEnter={mouseEnterHandler}
                        onMouseLeave={mouseLeaveHandler}
                        id="editbutton2"
                        className="border border-solid border-gray-200 p-2 rounded-3xl text-gray-400 flex gap-2"
                      >
                        <span>Edit</span>
                        <FontAwesomeIcon
                          beat={hoveredButtons["editbutton2"]}
                          icon={faPencil}
                        ></FontAwesomeIcon>
                      </button>
                    </div>
                    <div>
                      <div className="flex justify-between gap-16">
                        <div className="flex flex-col gap-1 ">
                          <label className="text-gray-400">Country</label>
                          <span>England</span>
                        </div>
                        <div className="flex flex-col gap-1 flex-1 items-center">
                          <label className="text-gray-400">City/State</label>
                          <span>Middlebrought</span>
                        </div>
                      </div>
                      <div className="flex justify-between mt-5 gap-10">
                        <div className="flex flex-col gap-1">
                          <label className="text-gray-400">Postal Code</label>
                          <span>bh122la</span>
                        </div>
                        <div className="flex flex-col flex-1 items-center gap-1">
                          <label className="text-gray-400">Street</label>
                          <span>99 Chatsworth Road</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="mt-3 w-96">2</Tab.Panel>
                <Tab.Panel className="mt-3 w-96">3</Tab.Panel>
                <Tab.Panel className="mt-3 w-96">4</Tab.Panel>
              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Profile;
