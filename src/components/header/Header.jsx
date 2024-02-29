import React from "react";
import logo from "../../helpers/logo.png";

const Header = () => {
  return (
    <div className="text-center mt-3 header">
      <img src={logo} alt="logo" width="100px" className="mt-3" />
      <h1 className="pt-3 text-danger">Footboll Legends</h1>
      <p className="px-5 ">
        Players and their statistics are taken from{" "}
        <a href="https://www.transfermarkt.com.tr/" target="blank">
          transfermarkt.com
        </a>{" "}
        in <u>alphabetical</u> order.
      </p>
    </div>
  );
};

export default Header;
