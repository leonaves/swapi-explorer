const initialState = {
  data: null,
  fetch: {
    loading: false,
    error: false,
  }
};

const explorer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return Object.assign({}, {
        data: null,
        fetch: {
          loading: true,
          error: false,
        }
      });

    case 'DATA_FETCH_SUCCEEDED':
      return Object.assign({}, {
        data: action.payload.data,
        fetch: {
          loading: true,
          error: false,
        }
      });

    case 'DATA_FETCH_FAILED':
      return Object.assign({}, {
        data: null,
        fetch: {
          loading: false,
          error: action.error,
        }
      });

    default:
      return state;
  }
};

export default explorer;
