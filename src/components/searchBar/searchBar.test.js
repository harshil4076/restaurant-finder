import React from 'react';
import { mount } from 'enzyme';
import SearchBar from './searchBar';

describe('It should render 4 input tags and a search button chage the state ' , () => {
    const Composition = (props) => {
        return <SearchBar />
    }
    it('renders 4 inputs and 1 button', () => {
        const wrapper = mount(<SearchBar />)
        console.log(wrapper)
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('input').length).toBe(4);
        expect(wrapper.find('button').length).toBe(1);
        
    })
    // it('it should ')

    
})