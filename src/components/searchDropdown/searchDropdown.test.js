import React from 'react';
import { mount } from 'enzyme';
import SearchDropdown from './searchDropdown'
describe('It renders a dropdown input', () => {
    const searchProps = {
        itemList : ["Toronto", "Mississauga", "Burlington"],
        getInputSelection : jest.fn(),
    }

    const Composition = (props) => {
        return <SearchDropdown { ...searchProps } />
    }

    it('allows us to select Item', () => {
        const wrapper = mount(<Composition />);
        expect(wrapper.length).toBe(1)
    })

    it('should trigger getInputSelection on change', () => {
        const wrapper = mount(<Composition />);
        wrapper.find("input").simulate("change")
        expect(searchProps.getInputSelection).toHaveBeenCalled()
    })
})
