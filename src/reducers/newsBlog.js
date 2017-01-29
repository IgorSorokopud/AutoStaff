const initialState = [
  'newsBlog',
  'newsBlog1',
  'newsBlog2'
];

export default function addNewsBlog (state = initialState, action) {
  if(action.type === 'ADD_NEWS_BLOG') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
};
