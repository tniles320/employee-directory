import React from "react";
import "./style.css";

function Buttons(props) {
  const { handleName, handleUsername, handleEmail, handleReverseOrder } = props;

  return (
    <div>
      <h3>Sort By:</h3>
      <button className="order-btn" name="name" onClick={handleName}>
        Name
      </button>
      <button className="order-btn" name="username" onClick={handleUsername}>
        Username
      </button>
      <button className="order-btn" name="email" onClick={handleEmail}>
        Email
      </button>
      <div>
        <button id="reverse-btn" onClick={handleReverseOrder}></button>
      </div>
    </div>
  );
}

export default Buttons;
