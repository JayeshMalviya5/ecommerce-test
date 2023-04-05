import React, { useEffect, useReducer, useState } from "react";
import "./ProductList.css";
import ProductCard from "../../../UI/Card/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { toSelect } from "../../../store/Action";
function ProductList({ value }) {
  // const [list, setList] = useState([]);
  const state = useSelector((state) => state)
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resp) => resp.json())
      .then((data) => {
        dispatch(toSelect(data));
      });
  }, []);
  return (
    <>
      <div className="product">
        <div className="list">
          {state.toRenderProduct.map((item) => {
            if (item.category == value) {
              return (
                <ProductCard
                  key={item.id}
                  id = {item.id}
                  image={item.image}
                  title={item.title}
                  desc={item.description}
                  price={item.price}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default ProductList;
