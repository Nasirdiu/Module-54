import React from "react";
import "./Tshart.css";
const Tshart = ({ handler, TShart }) => {
  const { name, price, picture } = TShart;

  
  
  return (
    <div className="t-shart">
     
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <p>Price:${price}</p>
      <button onClick={() => handler(TShart)}>Add to Card</button>
    </div>
  );
};

export default Tshart;
