import React, { useRef, useState } from "react";
import "./addProd.css";
import { useAppProduct, useGetCategory } from "../../hooks/hooks";
import { ToastContainer, toast } from "react-toastify";

const AddProd = () => {
  const [error, setError] = useState();
  const formRef = useRef();
  const [category, setCategory] = useState();
  const { isLoading, data } = useGetCategory();
  const { mutate } = useAppProduct();

  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };
  if (data?.data.data.length === 0) {
    setError("Add Category First");
  }
  const handleFrom = (e) => {
    e.preventDefault();
    const name = formRef.current.name.value;
    const price = formRef.current.price.value;
    const imageurl = formRef.current.imageurl.value;
    const category = formRef.current.category.value;
    const obj = { name, price, imageurl, category };

    mutate(obj, {
      onSuccess: () => {
        toast.success("Product Added", {
          position: toast.POSITION.BOTTOM_LEFT,
          theme: "dark",
        });
        formRef.current.name.value = "";
        formRef.current.price.value = "";
        formRef.current.imageurl.value = "";
        formRef.current.category.value = "";
      },
    });
  };
  if (isLoading) {
    return (
      <div style={{ padding: "150px", paddingTop: "100px" }}>Loading...</div>
    );
  }
  console.log(data);
  return (
    <div style={{ padding: "150px", paddingTop: "100px" }}>
      <div className="admin-form">
        <form ref={formRef} onSubmit={handleFrom}>
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="admin-input"
            required
          />

          <label htmlFor="price">Product Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            className="admin-input"
            required
          />

          <label htmlFor="imageurl">Image URL:</label>
          <input
            type="text"
            id="imageurl"
            name="imageurl"
            className="admin-input"
            required
          />

          <label htmlFor="category">Product Category:</label>
          <select
            id="category"
            name="category"
            className="admin-dropdown"
            onChange={(e) => categoryHandler(e)}
            placeholder="select department"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select Department
            </option>
            {data.data.data.map((i) => (
              <option value={i.category} key={i._id}>
                {i.category}
              </option>
            ))}
          </select>
          <div>
            <span style={{ color: "red" }}>{error}</span>
          </div>
          <button
            type="submit"
            className="admin-button"
            style={{ marginTop: "20px" }}
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddProd;
