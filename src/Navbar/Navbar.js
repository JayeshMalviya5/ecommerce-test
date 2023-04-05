import React from "react";
import Btn from "../UI/Button/Btn";
import "./Navbar.css";
import { useNavigate } from "react-router";
import { Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
function Navbar() {
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  function toCart() {
    console.log("button pressed");
    navigate("/cart");
  }

  const toHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="navbar">
        <div className="welcome">Welcome to store</div>
        <div className="links">
          <Button onClick={toHome}>Home</Button>
          <Button onClick={toCart}>Cart({state.inCart.length})</Button>
          <Button
            onClick={() => {
              navigate("/about");
            }}
          >
            AboutUs
          </Button>
          {/* <Button onClick={toAboutUs}>About Us</Button> */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
