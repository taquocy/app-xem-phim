// redux/movieReducer.js
const initialState = {
  moviesSearch: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'MOVIE_FETCHING':
      console.log('---------------');
      console.log(action.payload);
      return {
        ...state,
        moviesSearch: action.payload,
      };
    case 'SHOW_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'HIDE_LOADING':
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
