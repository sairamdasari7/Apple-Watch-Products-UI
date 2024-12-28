import React from "react";
import "../styles/BandSelection.css";

const BandSelection = ({ setSelectedBand, collection }) => {
    const bands = {
      "Series 10": ["Sport Band", "Milanese Loop"],
      "Hermès": ["Leather Band", "Cuff Band"],
      "SE": ["Sport Loop", "Solo Loop"],
    };
  
    return (
      <div className="band-selection">
        <h3>Choose a Band ({collection})</h3>
        <div>
          {bands[collection]?.map((bandType, index) => (
            <button
              key={index}
              onClick={() => setSelectedBand({ type: bandType, price: index * 30 })}
            >
              {bandType}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default BandSelection;
