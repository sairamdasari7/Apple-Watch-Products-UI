import React from "react";
import "../styles/PriceDisplay.css";

const PriceDisplay = ({ price }) => {
  return (
    <div className="price-display">
      <h3>Total Price</h3>
      <p>${price.toFixed(2)}</p>
    </div>
  );
};

export default PriceDisplay;
