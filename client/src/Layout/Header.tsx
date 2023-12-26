import { useState } from "react";
import Navbar from "../components/Navbar";
import NavbarPublic from "../components/NavbarPublic";

function Header() {
  const [auth] = useState(true);
  return (
    // There will be two navbar version here loged In version and public version.
    <>{!auth ? <NavbarPublic></NavbarPublic> : <Navbar></Navbar>}</>
  );
}

export default Header;
