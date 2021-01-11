import {
  createAsyncThunk
} from '@reduxjs/toolkit'
import commentAPI from './commentAPI'


const createCommentAction = createAsyncThunk('comment/create',
  async (body) => {
    try {
      const response = await commentAPI.create(body)
      return response.data
    } catch (err) {
      console.log(`[ERROR] createCommentAction: ${{ err }}`)
    }
  })
const updateCommentAction = createAsyncThunk('comment/update',
  async (id, body) => {
    try {
      const response = await commentAPI.update(id, body)
      return response.data
    } catch (err) {
      console.log(`[ERROR] updateCommentAction: ${{ err }}`)
    }
  })

export {
  createCommentAction,
  updateCommentAction,
}
