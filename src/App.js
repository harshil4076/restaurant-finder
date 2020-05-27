import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import SearchBar from './components/searchBar/searchBar'
import ResultCard from './components/resultCard/resultCard'
import { searchResults } from './store/action/index'

function App(props) {
  const { searchResults , restaurantList, addError, removeError } = props;

  return (
    <div className="App">
      <header className="App-header">
          <h1>Search Restaurant</h1>
      </header>
        <div className="InputSelection">
            <SearchBar searchResults={searchResults} />
            {addError?<div> <p>Please Enter valid Data.</p>
                             {addError.message}
            <p>The data you entered is City- {addError.config.params.city}</p>
                                      <p>Address- {addError.config.params.address} </p>
                                      <p>Postal code -{addError.config.params.postal_code} </p>
                                      <p>Name -{addError.config.params.name} </p>

                            </div>: removeError}
        </div>
        <div className="SearchResult">
          { 
          restaurantList.list.restaurants? 
            restaurantList.list.restaurants.map(restaurant => (
              <ResultCard restObj={restaurant} key={restaurant.id} />
            ))
            :
            <div>
            <ResultCard restObj={restaurantList.list} key={restaurantList.list.id} />
            </div>

          }
        </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    restaurantList: state.matchResults,
    addError : state.matchResults.error,
    removeError : state.removeError
  }
}
const mapDispatchToProps = { searchResults };

export default connect(mapStateToProps, mapDispatchToProps)(App);
