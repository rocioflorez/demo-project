import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';
import { setDogs } from '../store/slices/dogSlice';
import { getDogs } from '../api/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('getDogs', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('fetches dogs and dispatches setDogs with data', async () => {
    const data = [{ name: 'Bulldog' }, { name: 'Beagle' }];
    fetchMock.mockResponseOnce(JSON.stringify(data));

    const expectedActions = [
      { type: 'dogs/setDogs', payload: { dogs: data } },
    ];

    const store = mockStore({ dogs: { dogs: [] } });

    await store.dispatch(getDogs());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
