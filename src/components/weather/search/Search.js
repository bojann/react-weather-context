import React from 'react'
import PropTypes from "prop-types";


import './Search.scss'
import { Button } from "react-bootstrap/lib";

const Search = (args) => {
  const { 
    city, 
    handleChangeSearch,
    handleSubmitForm,
  } = args;

  return(
      <div className="search-input">
        <form onSubmit={handleSubmitForm}>
          <label htmlFor="searchItem">
            Select a city in Poland:
            <input
              id="searchItem"
              type="text"
              placeholder="search for"
              value={city}
              onChange={handleChangeSearch}
              onBlur={handleChangeSearch}
            />
          </label>
          <Button 
            type="submit" 
            onClick={handleSubmitForm}
          >
            Get weather
          </Button>
        </form>
      </div>
  )
}

Search.propTypes = {
  city: PropTypes.string,
  handleChangeSearch: PropTypes.func,
  handleSubmitForm: PropTypes.func,
};

export default Search;