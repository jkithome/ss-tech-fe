import reducer from '../../reducers/categories';

const initialState = {
  fetching: false,
  categories: [],
  error: null,
};

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

describe('categories reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle CATEGORIES_REQUEST', () => {
    expect(
      reducer(initialState, {
        type: 'CATEGORIES_REQUEST',
      }),
    ).toEqual(Object.assign({}, initialState, { fetching: true }));
  });

  it('should handle CATEGORIES_SUCCESS', () => {
    expect(
      reducer(Object.assign({}, initialState, { fetching: true }), {
        type: 'CATEGORIES_SUCCESS',
        categories: fetchedCategories,
      }),
    ).toEqual(
      Object.assign({}, initialState, { categories: fetchedCategories }),
    );
  });

  it('should handle CATEGORIES_FAILURE', () => {
    expect(
      reducer(initialState, {
        type: 'CATEGORIES_FAILURE',
        failure: 'Error Fetching Categories!',
      }),
    ).toEqual(
      Object.assign({}, initialState, { error: 'Error Fetching Categories!' }),
    );
  });
});
