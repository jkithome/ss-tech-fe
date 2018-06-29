import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { fetchFact } from '../../actions/facts';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const host = 'https://api.chucknorris.io';
const url = 'https://api.chucknorris.io/jokes/random?category=science';

const fetchedFact = {
  category: ['science'],
  icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
  id: 'uojt-t8as5ws5h1q-sjslw',
  url: 'https://api.chucknorris.io/jokes/uojt-t8as5ws5h1q-sjslw',
  value: `Nothing can escape the gravity of a black hole, except for Chuck Norris. 
  Chuck Norris eats black holes. They taste like chicken.`,
};

describe('async actions', () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates FACT_SUCCESS when fetching joke has been done', () => {
    nock(host)
      .get('/jokes/random?category=science')
      .reply(200, fetchedFact);

    return store.dispatch(fetchFact(url)).then(() => {
      // return of async actions
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  it('creates FACT_FAILURE when fetching joke returns an error', () => {
    nock(host)
      .get('/api/todos')
      .reply(500, { message: 'Error Fetching Fact' });

    return store.dispatch(fetchFact(url)).then(() => {
      // return of async actions
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
