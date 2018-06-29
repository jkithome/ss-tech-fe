import reducer from '../../reducers/facts';

const initialState = {
  fetching: false,
  fact: {},
  error: null,
};

const fetchedFact = {
  category: ['science'],
  icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
  id: 'uojt-t8as5ws5h1q-sjslw',
  url: 'https://api.chucknorris.io/jokes/uojt-t8as5ws5h1q-sjslw',
  value: `Nothing can escape the gravity of a black hole, except for Chuck Norris. 
  Chuck Norris eats black holes. They taste like chicken.`,
};

describe('facts reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it('should handle FACT_REQUEST', () => {
    expect(
      reducer(initialState, {
        type: 'FACT_REQUEST',
      }),
    ).toMatchSnapshot();
  });

  it('should handle FACT_SUCCESS', () => {
    expect(
      reducer(Object.assign({}, initialState, { fetching: true }), {
        type: 'FACT_SUCCESS',
        fact: fetchedFact,
      }),
    ).toMatchSnapshot();
  });

  it('should handle FACT_FAILURE', () => {
    expect(
      reducer(initialState, {
        type: 'FACT_FAILURE',
        failure: 'Error Fetching Fact!',
      }),
    ).toMatchSnapshot();
  });
});
