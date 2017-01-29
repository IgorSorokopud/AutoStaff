const initialState = '';

export default function searchBlog (state = initialState, action) {
  if(action.type === 'SEARCH_BLOG') {
    return action.payload;
  }
  return state;
};
