import React from "react";
import { ToastContainer } from "react-toastify";
// import {AiOutlineHeart} from "react-icons"
import SearchProduct from "../../components/search/searchProduct";

import './productpage.css'

const ProductsPage = (props) => {
    const {addHandler, setSearch, search,product} = props
  return (
    <>
      <div className="main" style={{ minHeight: "80vh" }}>
        <SearchProduct changeHandler={setSearch} />
        {product
          .filter((i) => (search === "" ? i : i.name.includes(search)))
          .map((i) => (
            <section className="card pro-card" key={i._id} style={{width: "18rem"}}>
              <img className="pro-image" src={i.prodImg} alt="Product 1" />
              <div className="card-body">
                {/* <i>{AiOutlineHeart}</i> */}
              <h2>{i.name}</h2>
              <p className="card-text">Rs.{i.price}</p>
              <button className="pro-button" onClick={() => addHandler(i)}>Add to Cart</button></div>
            </section>
          ))}
      </div>
      <ToastContainer  />
    </>
  );
};

export default ProductsPage;
