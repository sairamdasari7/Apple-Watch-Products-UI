import React, { useState } from "react";
import CaseSelection from "./components/CaseSelection";
import SizeSelection from "./components/SizeSelection";
import BandSelection from "./components/BandSelection";
import CollectionSwitcher from "./components/CollectionSwitcher";
import PriceDisplay from "./components/PriceDisplay";
import "./styles/App.css";

const App = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedBand, setSelectedBand] = useState(null);
  const [collection, setCollection] = useState("Series 10");

  const collections = [
    { id: 1, name: "Series 10" },
    { id: 2, name: "Hermès" },
    { id: 3, name: "SE" },
  ];

  const updatePrice = () => {
    const basePrice = 399; // Example base price
    return basePrice + (selectedCase?.price || 0) + (selectedBand?.price || 0);
  };

  return (
    <div className="app-container">
      <h1>Apple Watch Studio</h1>
      <CollectionSwitcher
        collections={collections}
        collection={collection}
        setCollection={setCollection}
      />
      <div className="customization-workflow">
        <CaseSelection setSelectedCase={setSelectedCase} collection={collection} />
        <SizeSelection setSelectedSize={setSelectedSize} collection={collection} />
        <BandSelection setSelectedBand={setSelectedBand} collection={collection} />
      </div>
      <PriceDisplay price={updatePrice()} />
    </div>
  );
};

export default App;
