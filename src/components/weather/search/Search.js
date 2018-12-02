import React from "react";
import PropTypes from "prop-types";

import "./Search.scss";
import { Button } from "react-bootstrap/lib";

const Search = args => {
  const { city, handleChangeSearch, handleSubmitForm } = args;

  return (
    <div className="weather-search">
      <form className="weather-search__form" onSubmit={handleSubmitForm}>
        <label htmlFor="searchItem">
          Write a city in Poland:
          <input
            id="searchItem"
            type="text"
            placeholder="city name"
            value={city}
            onChange={handleChangeSearch}
            onBlur={handleChangeSearch}
          />
        </label>
        <Button
          bsStyle="primary"
          type="submit"
          className="weather-search__button"
          onClick={handleSubmitForm}
        >
          Get weather
        </Button>
      </form>
    </div>
  );
};

Search.propTypes = {
  city: PropTypes.string,
  handleChangeSearch: PropTypes.func,
  handleSubmitForm: PropTypes.func
};

export default Search;
