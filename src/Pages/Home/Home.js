import React from "react";
import { AiFillWarning } from "react-icons/ai";
import WalletForm from "../../components/WalletForm/WalletForm";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="notice-board d-flex justify-content-center align-items-center">
        <p className="m-0 text-white fw-semibold">Notice here</p>
      </div>

      <div className="content-title px-5 my-5 custom-font  ">
        <h2 className="custom-color fw-bold fs-1 mb-3">Request testnet LINK</h2>
        <p className="w-50 text-secondary">
          Get testnet LINK for an account on one of the supported blockchain
          testnets so you can create and test your own oracle and Chainlinked
          smart contract
        </p>
      </div>

      <div className="mx-5 p-3 bg-white">
        <div className="warning flex align-items-center">
          <p className="m-0 p-2 ">
            <AiFillWarning className="mb-1 fs-5 me-2 custom-color"></AiFillWarning>{" "}
            Your wallet is connected to{" "}
            <span className="fw-bold">Ethereum Kovan</span>, so you are
            requesting <span className="fw-bold">Ethereum Kovan</span> Link/ETH.
          </p>
        </div>

        <div>
          <WalletForm></WalletForm>
        </div>
      </div>
    </div>
  );
};

export default Home;
