import moxios from 'moxios';
import { testStore, restObj  } from '../helpers/testHelpers';
import { searchResults } from '../store/action/index';

describe('search results action', ()=> {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('Store should update correctly', () => {
        const store = testStore(restObj);
        const type = "restaurants";
        const userData = {city: "toronto"}
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: restObj
            })
        })
        return store.dispatch(searchResults(type, userData))
                    .then(()=> {
                        const newState = store.getState();
                        expect(newState.list.restaurants[0]).toBe(restObj)
                    })
    })
})