import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { fetchCategories } from '../../actions/categories';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const host = 'https://api.chucknorris.io';
const url = 'https://api.chucknorris.io/jokes/categories';

const fetchedCategories = [
  'explicit',
  'dev',
  'movie',
  'food',
  'celebrity',
  'science',
  'sport',
  'political',
  'religion',
  'animal',
  'history',
  'music',
  'travel',
  'career',
  'money',
  'fashion',
];

describe('async actions', () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates CATEGORIES_SUCCESS when fetching categories has been done', () => {
    nock(host)
      .get('/jokes/categories')
      .reply(200, fetchedCategories);

    const expectedActions = [
      { type: 'CATEGORIES_REQUEST' },
      { type: 'CATEGORIES_SUCCESS', categories: fetchedCategories },
    ];

    return store.dispatch(fetchCategories(url)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates CATEGORIES_FAILURE when fetching categories returns an error', () => {
    nock(host)
      .get('/jokes/categories')
      .reply(500, { message: 'Error Fetching Categories' });

    const expectedActions = [
      { type: 'CATEGORIES_REQUEST' },
      { type: 'CATEGORIES_FAILURE', failure: 'Error Fetching Categories!' },
    ];

    return store.dispatch(fetchCategories(url)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
