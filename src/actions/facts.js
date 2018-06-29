import fetch from 'isomorphic-fetch';

export const fetchRequest = () => ({
  type: 'FACT_REQUEST',
});

export const fetchSuccess = fact => ({
  type: 'FACT_SUCCESS',
  fact,
});

export const fetchFailure = failure => ({
  type: 'FACT_FAILURE',
  failure,
});

export const fetchFact = url => dispatch => {
  dispatch(fetchRequest());
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        return response.json().then(Promise.reject.bind(Promise));
      }
      return response.json();
    })
    .then(json => dispatch(fetchSuccess(json)))
    .catch(() => dispatch(fetchFailure('Error Fetching Fact!')));
};
