import React from "react";
import { Dropdown, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { IoWalletSharp } from "react-icons/io5";
import "./NavBar.css";
import ProfileDropdown from "../../../components/ProfileDropdown/ProfileDropdown";

const currencies = [
  {
    id: 1,
    name: "BNB Chain Testnet",
    logo: "https://cryptonodes.io/wp-content/uploads/2022/06/Binance-Icon-Logo.wine_.svg",
  },
  {
    id: 2,
    name: "BNB Chain Testnet",
    logo: "https://cryptonodes.io/wp-content/uploads/2022/06/Binance-Icon-Logo.wine_.svg",
  },
  {
    id: 3,
    name: "BNB Chain Testnet",
    logo: "https://cryptonodes.io/wp-content/uploads/2022/06/Binance-Icon-Logo.wine_.svg",
  },
];

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
          <h2 className="fs-3 custom-color fw-semibold custom-font mb-0">
            Faucets
          </h2>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <select className="drop-down rounded-1">
                <option> Arbitrum Rinkeby</option>
                <option>Avalanche Fuji</option>
                <option>BNB Chain Testnet</option>
              </select>
            </Nav.Link>

            <Nav.Link>
              <button
                className="rounded-1 wallet-button fw-semibold"
                variant="outline-secondary"
              >
                <IoWalletSharp></IoWalletSharp> Connect Wallet
              </button>{" "}
            </Nav.Link>

            <button className="profile-button">
              <BiUserCircle className="fs-2  text-secondary"></BiUserCircle>
            </button>
            <ProfileDropdown></ProfileDropdown>

            {/* <Dropdown>
              <Dropdown.Toggle
                variant="light"
                className="profile-button p-0 m-0 rounded-circle "
                id="dropdown-basic"
              >
                
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item to="/">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
