import baseSlice from './baseSlice'

return {
  //<create>
  createBaseReducer: baseSlice.createBaseSlice.reducer,
  //</create>
  //<fetchAll>
  fetchAllBaseReducer: baseSlice.fetchAllBaseSlice.reducer,
  //</fetchAll>
  //<delete>
  deleteBaseReducer: baseSlice.deleteBaseSlice.reducer,
  //</delete>
  //<fetchById>
  fetchBaseByIdReducer: baseSlice.fetchBaseByIdSlice.reducer,
  //</fetchById>
  //<update>
  updateBaseReducer: baseSlice.updateBaseSlice.reducer
  //</update>
}