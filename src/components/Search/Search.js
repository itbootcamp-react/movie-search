import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./styled.css";

const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleReset = () => {
    setSearchValue("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    search(searchValue);
    handleReset();
  };

  return (
    <form className="search">
      <input
        className="search-input"
        value={searchValue}
        placeholder="Search for favorite movie"
        aria-label="Search"
        type="text"
        onChange={handleChange}
      />
      <button
        onClick={handleSearch}
        type="submit"
        value="SEARCH"
        className="search-button"
      >
        <FontAwesomeIcon icon={faSearch} />
        <span>Search</span>
      </button>
    </form>
  );
};

export default Search;
