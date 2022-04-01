import React, { useState } from "react";
import useTShart from "../../hooks/useTShart";
import Cart from "../Cart/Cart";
import Tshart from "../Tshart/Tshart";
import "./Home.css";
const Home = () => {
  const [tshart, setTshart] = useTShart();
  const [cart, setCart] = useState([]);

  // cart a item added
  const handler = (selectItem) => {
    const exited = cart.find((tshart) => tshart._id === selectItem._id);
    if (!exited) {
      const newCart = [...cart, selectItem];
      setCart(newCart);
    } else {
      alert("All Ready Done Item");
    }
  };
  //cart option remove
  const handerRemoveCart = (selectItem) => {
    const rset = cart.filter((tshart) => tshart._id !== selectItem._id);
    setCart(rset);
  };
  return (
    <div className="home-container">
      <div className="tshart-container">
        {tshart.map((TShart) => (
          <Tshart key={TShart._id} TShart={TShart} handler={handler}></Tshart>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handerRemoveCart={handerRemoveCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
