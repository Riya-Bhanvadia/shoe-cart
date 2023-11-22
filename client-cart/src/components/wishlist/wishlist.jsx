import React, { useContext, useState } from "react";
import DashboardContext from "../dashboardContext/dashboardContext";
import ProductsPage from "../../pages/productsPage/productsPage";

import "./wishlist.css"

const Wishlist = () => {
  const { wishlist, addProduct } = useContext(DashboardContext);
  const [search, setSearch] = useState("");
  console.log(wishlist);
  return (
    <div>
      <ProductsPage
        addHandler={addProduct}
        setSearch={setSearch}
        search={search}
        product={wishlist}
      />
    </div>
  );
};

export default Wishlist;
