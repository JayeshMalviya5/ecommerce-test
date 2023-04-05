import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./Payment.css";
import { useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router";
function Payment() {
    const navigate =  useNavigate()
  const state = useSelector((state) => state);
  const getTotal = () => {
    let sum = 0;
    state.units.map((item) => {
      sum += item.price * item.count;
    });

    return sum;
  };
  const uid = uuidv4();
  return (
    <>
      {console.log("uid", uid)}
      <div className="paymenttContainer">
        <div className="orderId">
          <span>OrderId :</span>
          <p>{uid}</p>
        </div>
        <div className="delivery">
          <span>Address</span>
          <br />
            E-370, Pragati Nagar Kotra Near Pink Garder Gokhul Vihar Ajmer,
            Rajasthan
            305004
          {/*  */}
        </div>
        <div className="deliveryDate">
          <span>Expected Delivery Data : </span>
          <p>12/03/2023</p>
        </div>

        <div className="PaymentAmount">
          <span>Amount to be paid : </span>
          <p>{getTotal()}</p>
        </div>
      </div>
      <div className="paymentsButton">
        <Button colorScheme="blue" onClick={()=>{navigate("/")}}>Home</Button>
        <Button colorScheme="blue" onClick={()=>{navigate("/cart")}}>Cart</Button>
        <Button colorScheme="blue" onClick={()=>{navigate("/About")}}>About</Button>
        
      </div>
    </>
  );
}

export default Payment;
