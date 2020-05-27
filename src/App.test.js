import React from 'react';
import { shallow } from 'enzyme';
import {testStore, restObj} from './helpers/testHelpers'
import { render } from '@testing-library/react';
import App from './App';

const setUp = ((initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    console.log(wrapper.debug())
    return wrapper;
})
describe('should render App', () => {
    let wrapper;
    beforeEach(() => {
        const initialState = restObj;
        wrapper = setUp(initialState)
    });
 it('should render without errors', () => {
     expect(wrapper.length).toBe(1)
 })  
       
})