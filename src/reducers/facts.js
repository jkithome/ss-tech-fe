const fact = (
  state = {
    fetching: false,
    fact: {},
    error: null,
  },
  action,
) => {
  switch (action.type) {
    case 'FACT_REQUEST':
      return Object.assign({}, state, { fetching: true });
    case 'FACT_SUCCESS':
      return Object.assign({}, state, { fetching: false, fact: action.fact });
    case 'FACT_FAILURE':
      return Object.assign({}, state, {
        fetching: false,
        error: action.failure,
      });
    default:
      return state;
  }
};

export default fact;
