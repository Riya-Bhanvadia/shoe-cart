import React, { useContext } from "react";
import "./navbar.css";
import shopcart from "../../utils/shopcart.png";
import Dashboard from "../dashboard/dashboard";
import { NavLink, useNavigate } from "react-router-dom";
import TokenContext from "../tokenContext/tokenContext";
import DashboardContext from "../dashboardContext/dashboardContext";
import { useUpdateCart } from "../../hooks/hooks";

const Navbar = () => {
  const { addToken } = useContext(TokenContext);
  const { setingProduct, product } = useContext(DashboardContext);
  console.log(product);
  const { mutate } = useUpdateCart();
  const id = localStorage.getItem("id");
  const uname = localStorage.getItem("name");
  console.log(uname);
  const navigate = useNavigate();
  
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
    <div className="nav-sty">
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to={"/randomProducts"}>Products</NavLink>
            </li>

            <li onClick={handleLogout}>
              <a>Logout</a>
            </li>
            <li>{uname}</li>
          </ul>
          <div className="cart-icon wrapper">
            <NavLink to={"/cart"}>
              <i className="fas fa-shopping-cart">
                <img className="img" src={shopcart} />
              </i>
              
            </NavLink>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
