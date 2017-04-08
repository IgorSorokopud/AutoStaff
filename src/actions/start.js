import data from './data.json';

export const startData = () => {
    return dispatch => {
        dispatch({type: "ADD_START_DATA", payload: data});
    }
};
