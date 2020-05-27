import {SEARCH_RESULT } from '../actionTypes';
import { matchResults} from './index';

describe('matchResults reducer', () => {
    it('should return default state', () =>{
        const initialState = {}
        const newState = matchResults(initialState, {});
        expect(newState).toEqual(initialState)
    });

    it ('should return new state if receaving any types', () => {
        const initialState = {}
        const resList = { restaurant: "Food"};
        const expextedState = { list : { restaurant: "Food"}}
        const newState = matchResults(initialState, {
            type: SEARCH_RESULT,
            payload: resList 
        })
        expect(newState).toEqual(expextedState)
    })
})