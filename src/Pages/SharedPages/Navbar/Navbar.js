import React from "react";
import {  Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { IoWalletSharp } from "react-icons/io5";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <Navbar
        className="px-5 py-2"
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
      >
        <Link to="/" className=" text-decoration-none">
          <h2 className="fs-3 custom-color fw-semibold custom-font mb-0">Faucets</h2>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <select
                className="drop-down rounded-1"
              >
                <option>Arbitrum Rinkeby</option>
                <option>Avalanche Fuji</option>
                <option>BNB Chain Testnet</option>
              </select>
            </Nav.Link>

            <Nav.Link >
              <button
                className="rounded-1 wallet-button fw-semibold"
                variant="outline-secondary"
              >
               <IoWalletSharp></IoWalletSharp>  Connect Wallet
              </button>{" "}
            </Nav.Link>
            <button className="profile-button ">
              <BiUserCircle className="fs-2  text-secondary"></BiUserCircle>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
