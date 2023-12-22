import { Disclosure, Transition } from "@headlessui/react";

function Navbar() {
  const navigation = ["Home", "Profile", "Friend Zone", "Settings"];

  return (
    <Disclosure as="nav" className="bg-gray-700 p-2">
      {({ open }) => (
        /* Use the `open` state to conditionally change the direction of an icon. */
        <>
          {/* For mobile */}
          <Disclosure.Button className="flex sm:hidden">
            {open ? "X" : "-"}
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
            <Disclosure.Panel as="ul" className="sm:hidden mt-3 h-screen">
              {navigation.map((element) => (
                <li className="mb-2" key={element}>
                  {element}
                </li>
              ))}
            </Disclosure.Panel>
          </Transition>

          {/* For Desktop*/}
          <div className="hidden sm:flex gap-3">
            <ul className="">
              {navigation.map((element) => (
                <li>{element}</li>
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

export default Navbar;
