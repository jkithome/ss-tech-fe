const categories = (
  state = {
    fetching: false,
    categories: [],
    error: null,
  },
  action,
) => {
  switch (action.type) {
    case 'CATEGORIES_REQUEST':
      return Object.assign({}, state, { fetching: true, error: null });
    case 'CATEGORIES_SUCCESS':
      return Object.assign({}, state, {
        fetching: false,
        categories: action.categories,
      });
    case 'CATEGORIES_FAILURE':
      return Object.assign({}, state, {
        fetching: false,
        error: action.failure,
      });
    default:
      return state;
  }
};

export default categories;
