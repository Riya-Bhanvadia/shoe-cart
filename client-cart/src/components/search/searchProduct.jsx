import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./searchProduct.css";

const SearchProduct = (props) => {
  const { changeHandler, product } = props;
  return (
    <div
      className="input-group mx-5"
      style={{ marginTop: "70px", position: "fixed", zIndex: "1" }}
    >
      {product.length !== 0 ? (
        <>
          <div className="form-outline">
            <input
              type="search"
              placeholder="search"
              onChange={(e) => changeHandler(e.target.value)}
              id="form1"
              style={{marginLeft:"20px"}}
              className="form-control"
            />
          </div>
          <button
            type="button"
            style={{ height: "36.5px", zIndex: "0" }}
            className="btn btn-primary"
          >
            search
          </button>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SearchProduct;
