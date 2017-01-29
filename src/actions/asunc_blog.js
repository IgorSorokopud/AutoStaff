const addAsuncBlog = [
  "json",
  "json2",
  "json3"
];

export const asyncGetBlog = () => {
  return dispatch => {
      setTimeout(() => {
        console.log("add blog");
        dispatch({ type: "ADD_ASUNC_BLOG", payload: addAsuncBlog });
      }, 2000)
  }
}
