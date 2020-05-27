import { SEARCH_RESULT, ADD_ERROR, REMOVE_ERROR } from '../actionTypes'
import { combineReducers } from 'redux'

export const DEFAULT_STATE = {
    list: {
        "id": 21307,
        "name": "Scaramouche Restaurant",
        "address": "1 Benvenuto Place",
        "city": "Toronto",
        "state": "ON",
        "area": "Toronto / SW Ontario",
        "postal_code": "M4V 2L1",
        "country": "CA",
        "phone": "4169618011",
        "lat": 43.68207,
        "lng": -79.40041,
        "price": 4,
        "reserve_url": "http://www.opentable.com/single.aspx?rid=21307",
        "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=21307",
        "image_url": "https://www.opentable.com/img/restimages/21307.jpg"
      }
}

export const matchResults = (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case SEARCH_RESULT: 
            return {
                // ...state, 
               list: action.payload
            };
            case ADD_ERROR: 
            return {
                ...state,
                error: action.payload
            }
            case REMOVE_ERROR: 
            return {
                ...state
            };
        default: 
            return state;
    }
}
export const rootReducer = combineReducers(
                                                {matchResults}
                                            )
 