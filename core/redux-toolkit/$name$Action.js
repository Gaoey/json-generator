import {
  createAsyncThunk
} from '@reduxjs/toolkit'
import $name$API from './$name$API'

const fetchAll$Cname$Action = createAsyncThunk('$name$/fetchAll',
  async () => {
    try {
      const response = await $name$API.fetchAll()
      return response.data
    } catch (err) {
      console.log(`[ERROR] fetchAll$Cname$Action: ${{ err }}`)
    }
  })

const fetch$Cname$ByIdAction = createAsyncThunk('$name$/fetchById',
  async (id) => {
    try {
      const response = await $name$API.fetchById(id)
      return response.data
    } catch (err) {
      console.log(`[ERROR] fetchAll$Cname$Action: ${{ err }}`)
    }
  })

const create$Cname$Action = createAsyncThunk('$name$/create',
  async (body) => {
    try {
      const response = await $name$API.create(body)
      return response.data
    } catch (err) {
      console.log(`[ERROR] create$Cname$Action: ${{ err }}`)
    }
  })

const update$Cname$Action = createAsyncThunk('$name$/update',
  async (id, body) => {
    try {
      const response = await $name$API.update(id, body)
      return response.data
    } catch (err) {
      console.log(`[ERROR] update$Cname$Action: ${{ err }}`)
    }
  })

const delete$Cname$Action = createAsyncThunk('$name$/delete',
  async (id) => {
    try {
      const response = await $name$API.delete(id)
      return response.data
    } catch (err) {
      console.log(`[ERROR] delete$Cname$Action: ${{ err }}`)
    }
  })

export {
  fetchAll$Cname$Action,
  fetch$Cname$ByIdAction,
  create$Cname$Action,
  update$Cname$Action,
  delete$Cname$Action
}
