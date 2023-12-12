import React, { useRef } from "react";
import { useAddCategory } from "../../hooks/hooks";
import { ToastContainer , toast} from "react-toastify";


const AddCategory = () => {
  const categoryRef = useRef();
  const { mutate } = useAddCategory();
  const categoryHandler = (e) => {
    e.preventDefault();
    const name = categoryRef.current.name.value;
    const imageurl = categoryRef.current.image.value;
    const obj = {
      name,
      imageurl,
    };
    mutate(obj, {
      onSuccess: () => {
        toast.success("Category Added", {
            position: toast.POSITION.BOTTOM_LEFT,
            theme: "dark",
          });
        categoryRef.current.name.value = "";
        categoryRef.current.image.value = "";
      },
    });
  };
  return (
    <div class="admin-form" style={{padding:"150px"}}>
      <form ref={categoryRef} onSubmit={categoryHandler}>
        <label htmlFor="name">Category Name:</label>
        <input type="text" id="name" name="name" class="admin-input" required />

        <label htmlFor="image">Category Image:</label>
        <input
          type="text"
          id="image"
          name="image"
          class="admin-input"
          required
        />

        <button type="submit" class="admin-button">
          Submit
        </button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default AddCategory;
