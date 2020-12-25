import React from "react";
import "./style.css";

function Buttons(props) {
  const { handleName, handleUsername, handleEmail, handleReverseOrder } = props;

  return (
    <div>
      <h4>Sort By:</h4>
      <button
        className="order-btn btn btn-primary"
        name="name"
        onClick={handleName}
      >
        Name
      </button>
      <button
        className="order-btn btn btn-primary"
        name="username"
        onClick={handleUsername}
      >
        Username
      </button>
      <button
        className="order-btn btn btn-primary"
        name="email"
        onClick={handleEmail}
      >
        Email
      </button>
      <div>
        <button id="reverse-btn" onClick={handleReverseOrder}></button>
      </div>
    </div>
  );
}

export default Buttons;
