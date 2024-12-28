import React from "react";
import "../styles/CaseSelection.css";

const CaseSelection = ({ setSelectedCase, collection }) => {
    const cases = {
      "Series 10": ["Aluminum", "Stainless Steel"],
      "Hermès": ["Leather", "Titanium"],
      "SE": ["Polycarbonate", "Aluminum"],
    };
  
    return (
      <div className="case-selection">
        <h3>Choose a Case ({collection})</h3>
        <div>
          {cases[collection]?.map((caseType, index) => (
            <button
              key={index}
              onClick={() => setSelectedCase({ type: caseType, price: index * 50 })}
            >
              {caseType}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default CaseSelection;