
export const startData = () => {
  return dispatch => {

    fetch('https://api.myjson.com/bins/18vb91')
      .then((response) => {
        response.json().then(function(data) {
          dispatch({ type: "ADD_START_DATA", payload: data });
      });
      })
  }
}
