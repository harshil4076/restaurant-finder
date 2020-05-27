import React , { useState} from 'react';
import './searchBar.css'


function SearchBar (props) {
  const { searchResults } = props
    const [item, setItem] =useState();
    //to handle user input
      const handleChange = (e) => {
        setItem({
          [e.target.name] : e.target.value
        })
      }
      //handle api call
      const handleSubmit = (e) => {
          e.preventDefault()
          e.stopPropagation()
          const type = "restaurants";
          searchResults(type, item).then(() => {
            return
          }).catch((err) => {
            return
          })
      }
    return (
        <div className="searchBar">
              <form onChange={(e) => handleChange(e)} onSubmit={(e) => handleSubmit(e)}>
                  <input required aria-label="Enter City" type="text" className="Input" name="city" placeholder="Enter City" />
                  <input aria-label="Enter Address" type="text" className="Input" name="address" placeholder="Enter Address" />
                  <input aria-label="Enter Postal code" type="text" className="Input" name="postal_code" placeholder="Enter Postal code" />
                  <input aria-label="Restaurant Name" type="text" className="Input" name="name" placeholder="Restaurant Name" />
                  <button className="SearchButton">Search</button>
              </form>
        </div>
    )
}

export default SearchBar;