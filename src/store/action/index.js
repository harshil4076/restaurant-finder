import { apiCall } from '../../services/api'
import { SEARCH_RESULT, ADD_ERROR, REMOVE_ERROR } from '../actionTypes'


//action to get restaurant List
function getSearchResult(data){
    return {
        type: SEARCH_RESULT,
        payload : data
    }
}
//action to add error
function addError (err){
    return {
        type: ADD_ERROR,
        payload: err
    }
}
//action to remove error

function removeError (){
    return {
        type: REMOVE_ERROR,
    }
}
export function searchResults(type, userData){
    return function(dispatch) {
        return new Promise((resolve, reject) => {
            return apiCall("get", `/${type}`, userData)
                .then((data) => {
                    dispatch(getSearchResult(data))
                    dispatch(removeError())
                    resolve();
                })
                .catch(err => {
                    dispatch(addError(err))
                    reject();
                })
        })
            }
                    
    }
