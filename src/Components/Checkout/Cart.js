import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Navbar/Navbar";
import "./Cart.css";
import { Button } from "@chakra-ui/react";
import { itemDecrement, itemIncrement, toRemove } from "../../store/Action";
import { useNavigate } from "react-router";
function Cart() {
  const navigate = useNavigate()
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const increase = (id) => {
    dispatch(itemIncrement(id));
    console.log("triggred")
  };

  const toPaymentPage = ()=>{
    navigate("/payment")
  }


  const getTotal = ()=>{
    let sum = 0;
    state.units.map((item)=>{
      sum+=(item.price * item.count)
    })

    return sum;
  }


  const decrease = (id) => {
    dispatch(itemDecrement(id));
    console.log("triggred")
  };
  const remove = (id) => {
    dispatch(toRemove(id));
    console.log("triggred")
  };
  return (
    <>
      <Navbar />
      <div className="cartContainer">
        {state.inCart.length > 0 ? (
          state.toRenderProduct.map((item) => {
            if (state.inCart.includes(item.id)) {
              return (
                <div className="cartItem">
                  <div className="cartImage">
                    <img
                      src={`${item.image}`}
                      alt=""
                      width={"200px"}
                      height={"100px"}
                    />
                  </div>
                  <div className="cartItemInfo">
                    <div className="cartDesc">
                      <div>{item.title}</div>
                    </div>
                    <div className="count">
                      {state.units.map((k) => {
                        if (k.id == item.id) {
                          return (
                            <div>
                              <span> Units : </span>
                              {k.count}
                            </div>
                          );
                        }
                      })}
                    </div>
                    <div className="cartButtons">
                      <Button
                        colorScheme="blue"
                        onClick={() => {
                          increase(item.id);
                        }}
                      >
                        +
                      </Button>
                      <Button
                        colorScheme="blue"
                        onClick={() => {
                          decrease(item.id);
                        }}
                      >
                        -
                      </Button>
                      <Button
                        colorScheme="blue"
                        onClick={() => {
                          remove(item.id);
                        }}
                      >
                        Remove From Cart
                      </Button>
                    </div>
                  </div>
                </div>
              );
            }
          })
        ) : (
          <div
            style={{
              color: "red",
              marginTop: "20px",
              marginLeft: "10px",
              fontWeight: 800,
            }}
          >
            Please add items in cart !
          </div>
        )}
      </div>
      <div className="checkoutDetails">
        <div className="checkout">
          <Button colorScheme="blue" onClick={toPaymentPage}>Proceed to Payment</Button>
        </div>
        <div className="amount">
          Total : ${getTotal()}
        </div>
      </div>
    </>
  );
}

export default Cart;
