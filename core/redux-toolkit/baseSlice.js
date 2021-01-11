import {
  createSlice
} from '@reduxjs/toolkit'
import {
  //<create>
  createBaseAction,
  //</create>
  //<delete>
  deleteBaseAction,
  //</delete>
  //<fetchById>
  fetchBaseByIdAction,
  //</fetchById>
  //<fetchAll>
  fetchAllBaseAction,
  //</fetchAll>
  //<update>
  updateBaseAction
  //</update>
} from './baseAction'

const asyncState = {
  default: {
    loading: false,
    success: false,
    failed: false
  },
  loading: {
    loading: true,
    success: false,
    failed: false,
  },
  success: {
    loading: false,
    success: true,
    failed: false,
  },
  failed: {
    loading: false,
    success: false,
    failed: true,
  }
}

const defaultState = {
  ...asyncState.default,
  error: '',
  payload: {}
}

//<fetchAll>
const fetchAllBaseSlice = createSlice({
  name: 'fetchAllBase',
  initialState: defaultState,
  reducers: {
    reset: () => defaultState,
    resetAsyncState: (state) => ({ ...state, ...asyncState.default })
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllBaseAction.pending, () => ({ ...asyncState.loading }))
    builder.addCase(fetchAllBaseAction.fulfilled, (state, action) => ({ ...asyncState.success, payload: action.payload }))
    builder.addCase(fetchAllBaseAction.rejected, (state, action) => ({ ...asyncState.failed, error: action.error }))
  }
})
//</fetchAll>

//<fetchById>
const fetchBaseByIdSlice = createSlice({
  name: 'fetchBaseById',
  initialState: defaultState,
  reducers: {
    reset: () => defaultState,
    resetAsyncState: (state) => ({ ...state, ...asyncState.default })
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBaseByIdAction.pending, () => ({ ...asyncState.loading }))
    builder.addCase(fetchBaseByIdAction.fulfilled, (state, action) => ({ ...asyncState.success, payload: action.payload }))
    builder.addCase(fetchBaseByIdAction.rejected, (state, action) => ({ ...asyncState.failed, error: action.error }))
  }
})
//</fetchById>

//<create>
const createBaseSlice = createSlice({
  name: 'createBase',
  initialState: defaultState,
  reducers: {
    reset: () => defaultState,
    resetAsyncState: (state) => ({ ...state, ...asyncState.default })
  },
  extraReducers: (builder) => {
    builder.addCase(createBaseAction.pending, () => ({ ...asyncState.loading }))
    builder.addCase(createBaseAction.fulfilled, (state, action) => ({ ...asyncState.success, payload: action.payload }))
    builder.addCase(createBaseAction.rejected, (state, action) => ({ ...asyncState.failed, error: action.error }))
  }
})
//</create>

//<update>
const updateBaseSlice = createSlice({
  name: 'updateBase',
  initialState: defaultState,
  reducers: {
    reset: () => defaultState,
    resetAsyncState: (state) => ({ ...state, ...asyncState.default })
  },
  extraReducers: (builder) => {
    builder.addCase(updateBaseAction.pending, () => ({ ...asyncState.loading }))
    builder.addCase(updateBaseAction.fulfilled, (state, action) => ({ ...asyncState.success, payload: action.payload }))
    builder.addCase(updateBaseAction.rejected, (state, action) => ({ ...asyncState.failed, error: action.error }))
  }
})
//</update>

//<delete>
const deleteBaseSlice = createSlice({
  name: 'deleteBase',
  initialState: defaultState,
  reducers: {
    reset: () => defaultState,
    resetAsyncState: (state) => ({ ...state, ...asyncState.default })
  },
  extraReducers: (builder) => {
    builder.addCase(deleteBaseAction.pending, () => ({ ...asyncState.loading }))
    builder.addCase(deleteBaseAction.fulfilled, (state, action) => ({ ...asyncState.success, payload: action.payload }))
    builder.addCase(deleteBaseAction.rejected, (state, action) => ({ ...asyncState.failed, error: action.error }))
  }
})
//</delete>

const baseSlice = {
  //<create>
  createBaseSlice,
  //</create>
  //<delete>
  deleteBaseSlice,
  //</delete>
  //<fetchById>
  fetchBaseByIdSlice,
  //</fetchById>
  //<fetchAll>
  fetchAllBaseSlice,
  //</fetchAll>
  //<update>
  updateBaseSlice
  //</update>
}

export default baseSlice