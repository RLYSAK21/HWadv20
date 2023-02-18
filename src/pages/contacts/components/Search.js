import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';
import "./styles.css"

function Search({ details }) {

  const [searchField, setSearchField] = useState("");

  const filteredPersons = details.filter(
    person => {
      return (
        person
        .firstName
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        person
        .lastName
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        person
        .phone
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );
  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      <Scroll>
        <SearchList filteredPersons={filteredPersons} />
      </Scroll>
    );
  }

  return (
    <section className="search">
      <div className='bangs'></div>
      <div >
        <h2 className='searchH'>Search contact</h2>
      </div>
      <div>
        <input 
          type = "search" 
          placeholder = "Search..." 
          onChange = {handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Search;