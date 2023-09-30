import React, { useContext } from "react";
import StripeButton from "../stripe-button/stripeButton";
import "./cart.css";
import  cartempty  from "../../utils/cartempty.jpg";
import DashboardContext from "../dashboardContext/dashboardContext";

const Cart = () => {
  const {
    product,
    increaseQuantity,
    decreaseQuantity,
    removeElements,
    removeItem,
  } = useContext(DashboardContext);

  console.log(product.length);
  
  const totalPrice = product.reduce((a, b) => a + b.price * b.quantity, 0)
  return (
    <>
    { product.length ? <div className="body">
    <div className="Cart-Container">
      <div className="Header">
        <h3 className="Heading">Shopping Cart</h3>
        <h5 className="Action" onClick={removeElements}>
          Remove all
        </h5>
      </div>
      {product.map((item) => (
        <div className="Cart-Items" key={item._id}>
          <div className="image-box"></div>
          <div className="about">
            <h1 className="title">{item.name}</h1>
            <img src={item.prodImg} style={{ height: "130px" }} />
          </div>

          <div className="counter">
            <div className="btns" onClick={() => increaseQuantity(item)}>
              +
            </div>
            <div className="count">{item.quantity}</div>
            <div
              className="btns"
              onClick={() => {
                decreaseQuantity(item);
                // console.log(product);
              }}
            >
              -
            </div>
          </div>

          <div className="prices">
            {console.log(item.price)}
            {console.log(item.quantity)}
            <div className="amount">Rs{item.price * item.quantity}</div>

            <div className="remove">
              <u onClick={() => removeItem(item)}>remove</u>
            </div>
          </div>
        </div>
      ))}
      <hr />
      <div className="checkout">
        <div className="total">
          <div>
            <div className="Subtotal">Sub-Total</div>
            <div className="items">{product.length}</div>
          </div>
          <div className="total-amount">
            {totalPrice}
          </div>
        </div>
        <StripeButton price={totalPrice} removeElements={removeElements}/>
        {/* <button className="button">Checkout</button> */}
      </div>
    </div>
  </div>:<div className="body"> <div  className="Cart-Container "><img className="cartempty" src={cartempty}/></div></div>}
  </>
  );
};

export default Cart;
