export const searchItem = (data) => {
    return dispatch => {
        dispatch({ type: "SEARCH", payload: data });
    }
};
