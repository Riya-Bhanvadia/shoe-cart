import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Dashboard from "./components/dashboard/dashboard";
import Footer from "./components/footer/footer";
import PageNotFound from "./pages/pageNotFound";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
// import Cart from "./components/cart/cart";
import Products from "./components/products/products";
import RandomProducts from "./components/RandomProducts/randomProducts";
import { useContext, useEffect } from "react";
import TokenContext from "./components/tokenContext/tokenContext";
import DashboardContext from "./components/dashboardContext/dashboardContext";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const LazyCart = React.lazy(() => import("./components/cart/cart"));


function App() {
  const { token, addToken } = useContext(TokenContext);
  const { product, setingProduct } = useContext(DashboardContext);
  // console.log(product);

  const tok = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  console.log(product);
  const data = {
    _id: id,
    cart: product,
  };
  useEffect(() => {
    const cart = localStorage.getItem("cart");
    console.log(cart);
    if (cart) {
      const parsedCart = JSON.parse(cart);
      setingProduct(parsedCart);
      localStorage.removeItem("cart");
    }
  });

  useEffect(() => {
    addToken(tok);
    window.addEventListener("beforeunload", () => {
      // console.log(product);
      // mutate({ _id: id, cart: product });
      const string = JSON.stringify(product);
      localStorage.setItem("cart", string);
    });
    return () => {
      window.removeEventListener("beforeunload", console.log("removed"));
    };
  });
  console.log(token);
  return (
    <>
      {token ? <Navbar /> : <div></div>}
      <Routes>
        <Route path="/register" element={tok ? <Dashboard /> : <Register />} />
        <Route path="/login" element={tok ? <Dashboard /> : <Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/productsByCat" element={<Products />} />
        <Route path="/randomProducts" element={<RandomProducts />} />
        <Route
          path="/cart"
          element={
            <React.Suspense fallback="Loading">
              <LazyCart />
            </React.Suspense>
          }
        />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
