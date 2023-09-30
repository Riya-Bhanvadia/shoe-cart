import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const SearchProduct = (props) => {
  const { changeHandler } = props;
  return (
    <div class="input-group mx-5">
      <div class="form-outline">
        <input
          type="search"
          placeholder="search"
          onChange={(e) => changeHandler(e.target.value)}
          id="form1"
          class="form-control"
        />
      </div>
      <button type="button" class="btn btn-primary">
        search
      </button>
    </div>
  );
};

export default SearchProduct;
