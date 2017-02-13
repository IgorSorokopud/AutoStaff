const initialState = {
  mode: "",
  isShowingModal: false
}

export default function startData (state = initialState, action) {
  if(action.type === 'SHOW_MODAL') {
    return Object.assign(...state, action.payload)
  }
  return state;
};
