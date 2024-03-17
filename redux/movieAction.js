// redux/movieAction.js
export function searchMovies (keyword) {
  console.log("action: " + keyword)
  return {
    type: 'FETCHING',
    payload: {keyword}
  };
};
 