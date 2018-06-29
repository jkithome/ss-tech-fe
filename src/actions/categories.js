import fetch from 'isomorphic-fetch';

export const fetchRequest = () => ({
  type: 'CATEGORIES_REQUEST',
});

export const fetchSuccess = categories => ({
  type: 'CATEGORIES_SUCCESS',
  categories,
});

export const fetchFailure = failure => ({
  type: 'CATEGORIES_FAILURE',
  failure,
});

export const fetchCategories = url => dispatch => {
  dispatch(fetchRequest());
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        return response.json().then(Promise.reject.bind(Promise));
      }
      return response.json();
    })
    .then(json => dispatch(fetchSuccess(json)))
    .catch(() => dispatch(fetchFailure('Error Fetching Categories!')));
};
