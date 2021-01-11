import {
  createAsyncThunk
} from '@reduxjs/toolkit'
import baseAPI from './baseAPI'

//<fetchAll>
const fetchAllBaseAction = createAsyncThunk('base/fetchAll',
  async () => {
    try {
      const response = await baseAPI.fetchAll()
      return response.data
    } catch (err) {
      console.log(`[ERROR] fetchAllBaseAction: ${{ err }}`)
      console.log(JSON.stringify(err.response.data))
    }
  })
//</fetchAll>

//<fetchById>
const fetchBaseByIdAction = createAsyncThunk('base/fetchById',
  async (id) => {
    try {
      const response = await baseAPI.fetchById(id)
      return response.data
    } catch (err) {
      console.log(`[ERROR] fetchAllBaseAction: ${{ err }}`)
      console.log(JSON.stringify(err.response.data))
    }
  })
//</fetchById>
//<create>
const createBaseAction = createAsyncThunk('base/create',
  async (body) => {
    try {
      const response = await baseAPI.create(body)
      return response.data
    } catch (err) {
      console.log(`[ERROR] createBaseAction: ${{ err }}`)
      console.log(JSON.stringify(err.response.data))
    }
  })
//</create>
//<update>
const updateBaseAction = createAsyncThunk('base/update',
  async (id, body) => {
    try {
      const response = await baseAPI.update(id, body)
      return response.data
    } catch (err) {
      console.log(`[ERROR] updateBaseAction: ${{ err }}`)
      console.log(JSON.stringify(err.response.data))
    }
  })
//</update>
//<delete>
const deleteBaseAction = createAsyncThunk('base/delete',
  async (id) => {
    try {
      const response = await baseAPI.delete(id)
      return response.data
    } catch (err) {
      console.log(`[ERROR] deleteBaseAction: ${{ err }}`)
      console.log(JSON.stringify(err.response.data))
    }
  })
//</delete>

export {
  //<fetchAll>
  fetchAllBaseAction,
  //</fetchAll>
  //<fetchById>
  fetchBaseByIdAction,
  //</fetchById>
  //<create>
  createBaseAction,
  //</create>
  //<update>
  updateBaseAction,
  //</update>
  //<delete>
  deleteBaseAction
  //</delete>
}
