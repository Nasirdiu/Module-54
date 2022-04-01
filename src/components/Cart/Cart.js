import React from "react";
import "./Cart.css";
const Cart = ({ cart, handerRemoveCart }) => {
  //conditional rendering option
  //1.Element Variable
  //ternary operator
  //&& operator
  //|| operator
  let command;
  if (cart.length === 0) {
    command = <p>akta kisu kin lee..</p>;
  } else if (cart.length === 1) {
    command = <p>Please Add More..</p>;
  } else {
    command = <p>Tui ato kinta kn click kor...</p>;
  }
  return (
    <div>
      <h1>This a cart:-{cart.length}</h1>

      {cart.map((tshart) => (
        <p>
          {tshart.name}
          <button onClick={() => handerRemoveCart(tshart)}>X</button>
        </p>
      ))}
      {
        cart.length===0 || <div className="orange">
          <p>your account add</p>
        </div>
      }
      {cart.length === 3 && (
        <div className="orange">
          <p>Tmi 3 ta kinle gift paba</p>
        </div>
      )}
      {command}
      {cart.length !== 4 ? <p>Keep Adding</p> : <button>Remove All</button>}
      {
        cart.length ===4 && <div className="orange">
          <button>Order review</button>
        </div>
      }
    </div>
  );
};

export default Cart;
