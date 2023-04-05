import React, { useEffect, useState } from "react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import "./Categories.css";
import ProductList from "../ProductList/ProductList";
function Categories() {
  const [value, setValue] = useState("electronics");
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <>
    <div className="input">
      <RadioGroup onChange={setValue} value={value}>
        <Stack direction="row">
          {categories.map((item) => {
            
            return (
              <Radio value={item}>
                <span>{item}</span>
              </Radio>
            );
          })}
        </Stack>
      </RadioGroup>
    </div>
    <ProductList value={value} />
    </>
  );
}

export default Categories;
