import {
  //<create>
  createBaseSlice,
  //</create>
  //<delete>
  deleteBaseSlice,
  //<delete>
  //<fetchById>
  fetchBaseByIdSlice,
  //</fetchById>
  //<fetchAll>
  fetchAllBaseSlice,
  //</fetchAll>
  //<update>
  updateBaseSlice
  //</update>
} from './baseSlice'

return {
  //<fetchAll>
  fetchAllBaseReducer: fetchAllBaseSlice.reducer,
  //</fetchAll>
  //<delete>
  deleteBaseReducer: deleteBaseSlice.reducer,
  //</delete>
  //<fetchById>
  fetchBaseByIdReducer: fetchBaseByIdSlice.reducer,
  //</fetchById>
  //<update>
  updateBaseReducer: updateBaseSlice.reducer
  //</update>
}