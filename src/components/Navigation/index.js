import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";

// import { selectGameTitle } from "../../store/game/selectors";
import { selectPlayer } from "../../store/player/selectors";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import NavbarItem from "./NavbarItem";

export default function Navigation() {
  const token = localStorage.getItem("token");
  const player = useSelector(selectPlayer);

  console.log("________________", player);

  const gameAccessControls =
    Object.keys(player).length === 0 && player.constructor === Object ? (
      <></>
    ) : (
      <NavbarItem path="/activeGame" linkText="Soaring Flocks" />
    );
  const loginLogoutControls =
    Object.keys(player).length === 0 && player.constructor === Object ? (
      <LoggedOut />
    ) : (
      <LoggedIn />
    );

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/gameInfo" linkText="Game Info" />
          {/* <NavbarItem path="/createGame" linkText="Create Game" /> */}
          {gameAccessControls}
          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
