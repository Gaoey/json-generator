import {
  createAsyncThunk
} from '@reduxjs/toolkit'
import baseAPI from './baseAPI'

const fetchAllBaseAction = createAsyncThunk('base/fetchAll',
  async () => {
    try {
      const response = await baseAPI.fetchAll()
      return response.data
    } catch (err) {
      console.log(`[ERROR] fetchAllBaseAction: ${{ err }}`)
    }
  })

const fetchBaseByIdAction = createAsyncThunk('base/fetchById',
  async (id) => {
    try {
      const response = await baseAPI.fetchById(id)
      return response.data
    } catch (err) {
      console.log(`[ERROR] fetchAllBaseAction: ${{ err }}`)
    }
  })

const createBaseAction = createAsyncThunk('base/create',
  async (body) => {
    try {
      const response = await baseAPI.create(body)
      return response.data
    } catch (err) {
      console.log(`[ERROR] createBaseAction: ${{ err }}`)
    }
  })

const updateBaseAction = createAsyncThunk('base/update',
  async (id, body) => {
    try {
      const response = await baseAPI.update(id, body)
      return response.data
    } catch (err) {
      console.log(`[ERROR] updateBaseAction: ${{ err }}`)
    }
  })

const deleteBaseAction = createAsyncThunk('base/delete',
  async (id) => {
    try {
      const response = await baseAPI.delete(id)
      return response.data
    } catch (err) {
      console.log(`[ERROR] deleteBaseAction: ${{ err }}`)
    }
  })

export {
  fetchAllBaseAction,
  fetchBaseByIdAction,
  createBaseAction,
  updateBaseAction,
  deleteBaseAction
}
