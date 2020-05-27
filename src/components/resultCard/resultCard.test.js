import React from 'react';
import ResultCard from './resultCard';
import { shallow, mount } from 'enzyme';
import { restObj } from '../../helpers/testHelpers'


describe('It should Render restlt card component', ()=> {
    let wrapper;
    beforeAll(() => {
         wrapper = mount(<ResultCard restObj={restObj} />)
    });
    it('should render img with classname src of object', () => {
        expect(wrapper.find('img').prop('src')).toEqual(restObj.image_url)
    })

    it('should render p tags with correct props', () => {
        console.log(wrapper.find('.RestName'))
        expect(wrapper.find('.RestName').text()).toEqual(restObj.name)
        expect(wrapper.find('.RestAddress').text()).toEqual(restObj.address)
        expect(wrapper.find('.RestCity').text()).toEqual(restObj.city)
        expect(wrapper.find('.RestPh').text()).toEqual(`Phone no - ${restObj.phone}`)
        expect(wrapper.find('.RestPrice').text()).toEqual(`Price - ${restObj.price}`)

    })
    // && restObj.address && restObj.city && restObj.phone && restObj.price

})