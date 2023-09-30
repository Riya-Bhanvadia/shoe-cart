import React, { useContext, useEffect, useState } from "react";
import { useFindRandProd } from "../../hooks/hooks";
import DashboardContext from "../dashboardContext/dashboardContext";
import ProductsPage from "../../pages/productsPage/productsPage";
import { toast } from "react-toastify";

const RandomProducts = () => {
  const { addProduct } = useContext(DashboardContext);
  const { isLoading, data } = useFindRandProd();
  const [search, setSearch] = useState("");
  const [value, setValue] = useState([]);
  useEffect(() => {
    if (data) {
      const b = data.data.sort(() => 0.5 - Math.random());
      console.log(b);
      const array = [];
      b.map((item) => {
        item.products.map((i) => {
          array.push(i);
        });
      });
      const random = array.sort(() => 0.5 - Math.random());
      setValue(random);
    }
  }, [data]);

  const addHandler = (i) => {
    const value = addProduct(i);
    if (!value) {
      toast.info("Already added!", {
        position: toast.POSITION.BOTTOM_LEFT,
        theme: "dark",
      });
    }
  };
  if (isLoading || value.length === 0) {
    return <div>Loading...</div>;
  }
  console.log(value);
  return (
    <div>
      <ProductsPage
        setSearch={setSearch}
        product={value}
        addHandler={addHandler}
        search={search}
      />
    </div>
  );
};

export default RandomProducts;
