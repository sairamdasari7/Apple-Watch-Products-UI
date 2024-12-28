import React from "react";
import PropTypes from "prop-types";
import "../styles/CollectionSwitcher.css";

const CollectionSwitcher = ({ collections, collection, setCollection }) => {
    return (
      <div className="collection-switcher">
        <h3>Switch Collection</h3>
        <select
          value={collection}
          onChange={(e) => setCollection(e.target.value)}
          className="collection-dropdown"
        >
          {collections.map((col) => (
            <option key={col.id} value={col.name}>
              {col.name}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  CollectionSwitcher.propTypes = {
    collections: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    collection: PropTypes.string.isRequired,
    setCollection: PropTypes.func.isRequired,
  };
  
  export default CollectionSwitcher;
