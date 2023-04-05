import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import ProductCard from "../../UI/Card/ProductCard";
import { Button } from "@chakra-ui/react";
import Btn from "../../UI/Button/Btn";
import Navbar from "../../Navbar/Navbar";
import "./Details.css";
// import DetailCard from "../../UI/Card/DetailCard";

function Details() {
  const { ID } = useParams();
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div>
      <Navbar />
      {console.log(state)}
      {state.toRenderProduct.map((item) => {
        if (item.id == ID) {
          return (
            <div className="container">
              <div className="image">
                <img src={item.image} alt="" width={"300px"} />
              </div>
              <div className="description">
                <div>
                  <p>Title : </p>
                  <span>{item.title}</span>
                </div>
                <div>
                  <p>Description : </p>
                  <span>{item.description}</span>
                </div>
                <div>
                  <p>Category : </p>
                  <span>{item.category}</span>
                </div>
                <div>
                  <p>Price : </p>
                  <span>${item.price}</span>
                </div>
              </div>
              <button
                style={{
                  border: "2px solid black",
                  marginTop: "10px",
                  backgroundColor: "Grey",
                  fontWeight: 800,
                }}
                onClick={goToHome}
              >
                Back
              </button>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Details;
