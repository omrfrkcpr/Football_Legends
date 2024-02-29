import React from "react";
import logo from "../../helpers/logo.png";

const Header = () => {
  return (
    <div className="text-center mt-3">
      <img src={logo} alt="logo" width="100px" />
      <h1 className="mt-3 text-danger">Footboll Legends</h1>
    </div>
  );
};

export default Header;
