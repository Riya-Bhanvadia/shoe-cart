import React, { useState } from "react";
import DashboardContext from "./dashboardContext";

const DashboardState = (props) => {
  const [product, setProduct] = useState([]);

  const addProduct = (data) => {
    console.log(data);
    const l = product.findIndex((item) => item._id === data._id);
    if (l === -1) {
      setProduct([...product, { ...data, quantity: 1 }]);
      return true;
    } else {
      return false;
    }
  };
  const setingProduct = (data) => {
    setProduct(data);
  };
  const increaseQuantity = (data) => {
    const q = product.findIndex((i) => i._id === data._id);

    product[q].quantity = product[q].quantity + 1;

    setProduct([...product]);
  };

  const removeElements = () => {
    product.length = 0;
    setProduct([...product]);
  };

  const decreaseQuantity = (data) => {
    const d = product.findIndex((i) => i._id === data._id);
    if (product[d].quantity === 1) {
      const l = product.filter((obj) => obj._id !== data._id);
      setProduct([...l]);
    } else {
      product[d].quantity = product[d].quantity - 1;
      setProduct([...product]);
    }
  };
  const removeItem = (data) => {
    const item = product.findIndex((i) => i._id === data._id);
    console.log(item);
    const l = product.filter((obj) => obj._id !== data._id);
    setProduct([...l]);
  };

  return (
    <DashboardContext.Provider
      value={{
        product,
        addProduct,
        increaseQuantity,
        decreaseQuantity,
        removeElements,
        removeItem,
        setingProduct,
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
};

export default DashboardState;
