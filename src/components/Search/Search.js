import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./styled.css";

const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <form className="search">
      <input
        className="search-input"
        value={searchValue}
        placeholder="Search for favorite movie"
        aria-label="Search"
        type="text"
      />
      <button type="submit" value="SEARCH" className="search-button">
        <FontAwesomeIcon icon={faSearch} />
        <span>Search</span>
      </button>
    </form>
  );
};

export default Search;
