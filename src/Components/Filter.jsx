import React from "react";

const Filter = ({ onTitleChange, onRatingChange }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Filter by title"
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating"
        min="0"
        max="5.0"
        onChange={(e) => onRatingChange(e.target.value)}
        style={{ marginLeft: "10px" }}
      />
    </div>
  );
};

export default Filter;
