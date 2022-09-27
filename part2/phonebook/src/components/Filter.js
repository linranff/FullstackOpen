import React from "react";

const Filter = ({ searchTerm, searchHandler }) => {
  return (
    <div>
      filter shown with:
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={searchHandler}
      />
    </div>
  );
};

export default Filter;
