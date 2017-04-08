const initialState = '';

export default function searchItem (state = initialState, action) {
  if(action.type === 'SEARCH') {
    return action.payload;
  }
  return state;
};
