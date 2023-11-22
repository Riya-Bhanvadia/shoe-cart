import React, { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import wishEmpty from "../../utils/wishEmpty.png";
import SearchProduct from "../../components/search/searchProduct";

import "./productpage.css";
import DashboardContext from "../../components/dashboardContext/dashboardContext";

const ProductsPage = (props) => {
  const { addHandler, setSearch, search, product } = props;
  const { addWishlist, wishlist } = useContext(DashboardContext);
  // const [wish, setWish] = useState([]);
  const wishlistHandler = (i) => {
    console.log(i);
    addWishlist(i);
    //  console.log(value);
    //  if(!value){
    //   alert("already added")
    //  }
  };
  console.log(product);
  return (
    <>
      <div className="main">
        <SearchProduct changeHandler={setSearch} product={product}/>

        <div className="main-sub">
          {product.length !== 0 ? (
            product
              .filter((i) => (search === "" ? i : i.name.includes(search)))
              .map((i) => (
                <section
                  className="card pro-card"
                  key={i._id}
                  style={{ width: "18rem" }}
                >
                  <img className="pro-image" src={i.prodImg} alt="Product 1" />
                  <div className="card-body">
                    <h2>{i.name}</h2>
                    <p className="card-text">Rs.{i.price}</p>
                    <i onClick={() => wishlistHandler(i)}>
                      {console.log(wishlist)}
                      {!wishlist.includes(i) ? (
                        <AiOutlineHeart
                          style={{ width: "30px", height: "30px" }}
                        />
                      ) : (
                        <AiFillHeart
                          style={{ width: "30px", height: "30px" }}
                        />
                      )}
                    </i>
                    &nbsp; &nbsp;
                    <button
                      className="pro-button"
                      onClick={() => addHandler(i)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </section>
              ))
          ) : (
            <div>
              <img
                src={wishEmpty}
                alt="img not available"
                style={{
                  marginBottom: "25px",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
              />
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ProductsPage;
