export const showModal = (data) => {
  return dispatch => {
    dispatch({ type: "SHOW_MODAL", payload: data });
  }
};
