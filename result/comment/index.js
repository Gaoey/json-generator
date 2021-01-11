import commentSlice from './commentSlice'

const reducer = {
  createCommentReducer: commentSlice.createCommentSlice.reducer,
  updateCommentReducer: commentSlice.updateCommentSlice.reducer
}

export default reducer