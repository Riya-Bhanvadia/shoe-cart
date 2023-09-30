import React, { useContext, useState } from "react";

import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { useGetProducts } from "../../hooks/hooks";
import DashboardContext from "../dashboardContext/dashboardContext";
import ProductsPage from "../../pages/productsPage/productsPage";

const Products = () => {
  const location = useLocation();
  const [search, setSearch] = useState("");
  const { addProduct } = useContext(DashboardContext);
  const id = location.state.id;
  const { isLoading, data } = useGetProducts(id);

  const addHandler = (i) => {
    const value = addProduct(i);
    if (!value) {
      toast.info("Already added!", {
        position: toast.POSITION.BOTTOM_LEFT,
        theme: "dark",
      });
    }
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <ProductsPage
        addHandler={addHandler}
        setSearch={setSearch}
        search={search}
        product={data.data.products}
      />
    </div>
  );
};

export default Products;
