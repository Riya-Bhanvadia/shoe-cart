import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import TokenContext from "../tokenContext/tokenContext";
import DashboardContext from "../dashboardContext/dashboardContext";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useUpdateCart } from "../../hooks/hooks";

import "./navbar.css";
const Navbar = () => {
  const { addToken } = useContext(TokenContext);
  const { setingProduct, product, totalItems } = useContext(DashboardContext);
  const role = localStorage.getItem("role");
  console.log(typeof role);
  // console.log(product);
  const { mutate } = useUpdateCart();
  const id = localStorage.getItem("id");
  const uname = localStorage.getItem("name");
  // console.log(uname);
  const navigate = useNavigate();

  const handleProduct = () => {
    navigate("/addProd");
  };
  const handleCategory = () => {
    navigate("/addCategory");
  };

  const handleLogout = () => {
    mutate({ _id: id, cart: product });
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("cart");
    setingProduct([]);

    addToken("");
    navigate("/login");
  };
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to={"/randomProducts"}>Products</NavLink>
          </li>
          {/* <NavLink to={"/productsByCat"}> */}
          <li>
            <NavLink to={"/wishlist"}>Wishlist</NavLink>
          </li>
          {/* </NavLink> */}

          <li onClick={handleLogout}>
            <Link>Logout</Link>
          </li>
          {role === "true" ? (
            <>
              <li onClick={handleProduct}>
                <Link>Add Product</Link>
              </li>
              <li onClick={handleCategory}>
                <Link>Add Category</Link>
              </li>
            </>
          ) : (
            <div></div>
          )}

          <li>{uname}</li>
        </ul>
        <div className="cart-icon wrapper">
          <NavLink to={"/cart"}>
            <i className="fas fa-shopping-cart">
              <BsFillCartCheckFill
                style={{
                  width: "30px",
                  height: "30px",
                  color: "blue",
                  marginBottom: "20px",
                }}
              />
            </i>
            <div style={{ position: "relative", bottom: "60px" }}>
              <span
                style={{
                  border: "1px solid black",
                  borderRadius: "100%",
                  background: "red",
                  fontSize: "13px",
                  width: "15px",
                  height: "20px",
                }}
              >
                {totalItems}
              </span>
            </div>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
