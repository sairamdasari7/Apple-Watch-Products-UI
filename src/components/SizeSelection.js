import React from "react";

const SizeSelection = ({ setSelectedSize }) => {
  const sizes = ["40mm", "44mm", "45mm"];

  return (
    <div className="size-selection">
      <h3>Choose a Size</h3>
      <div>
        {sizes.map((size, index) => (
          <button key={index} onClick={() => setSelectedSize(size)}>
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelection;
