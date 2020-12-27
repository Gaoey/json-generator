import {
  createSlice
} from '@reduxjs/toolkit'
import {
  // START {{create}}
  createBaseAction,
  // END {{create}}
  // START {{delete}}
  deleteBaseAction,
  // END {{delete}}
  // START {{fetchById}}
  fetchBaseByIdAction,
  // END {{fetchById}}
  // START {{fetchAll}}
  fetchAllBaseAction,
  // END {{fetchAll}}
  // START {{update}}
  updateBaseAction
  // END {{update}}
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

// START {{fetchAll}}
const fetchAllBaseSlice = createSlice({
  name: 'fetchAllBase',
  initialState: defaultState,
  reducers: {
    reset: (state) => (state = defaultState),
    resetAsyncState: (state) => ({ ...state, ...asyncState.default })
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllBaseAction.pending, () => ({ ...asyncState.loading }))
    builder.addCase(fetchAllBaseAction.fulfilled, (state, action) => ({ ...asyncState.success, payload: action.payload }))
    builder.addCase(fetchAllBaseAction.rejected, (state, action) => ({ ...asyncState.failed, error: action.error }))
  }
})
// END {{fetchAll}}

// START {{fetchById}}
const fetchBaseByIdSlice = createSlice({
  name: 'fetchBaseById',
  initialState: defaultState,
  reducers: {
    reset: (state) => (state = defaultState),
    resetAsyncState: (state) => ({ ...state, ...asyncState.default })
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBaseByIdAction.pending, () => ({ ...asyncState.loading }))
    builder.addCase(fetchBaseByIdAction.fulfilled, (state, action) => ({ ...asyncState.success, payload: action.payload }))
    builder.addCase(fetchBaseByIdAction.rejected, (state, action) => ({ ...asyncState.failed, error: action.error }))
  }
})
// END {{fetchById}}

// START {{create}}
const createBaseSlice = createSlice({
  name: 'createBase',
  initialState: defaultState,
  reducers: {
    reset: (state) => (state = defaultState),
    resetAsyncState: (state) => ({ ...state, ...asyncState.default })
  },
  extraReducers: (builder) => {
    builder.addCase(createBaseAction.pending, () => ({ ...asyncState.loading }))
    builder.addCase(createBaseAction.fulfilled, (state, action) => ({ ...asyncState.success, payload: action.payload }))
    builder.addCase(createBaseAction.rejected, (state, action) => ({ ...asyncState.failed, error: action.error }))
  }
})
// END {{create}}

// START {{update}}
const updateBaseSlice = createSlice({
  name: 'updateBase',
  initialState: defaultState,
  reducers: {
    reset: (state) => (state = defaultState),
    resetAsyncState: (state) => ({ ...state, ...asyncState.default })
  },
  extraReducers: (builder) => {
    builder.addCase(updateBaseAction.pending, () => ({ ...asyncState.loading }))
    builder.addCase(updateBaseAction.fulfilled, (state, action) => ({ ...asyncState.success, payload: action.payload }))
    builder.addCase(updateBaseAction.rejected, (state, action) => ({ ...asyncState.failed, error: action.error }))
  }
})
// END {{update}}

// START {{delete}}
const deleteBaseSlice = createSlice({
  name: 'deleteBase',
  initialState: defaultState,
  reducers: {
    reset: (state) => (state = defaultState),
    resetAsyncState: (state) => ({ ...state, ...asyncState.default })
  },
  extraReducers: (builder) => {
    builder.addCase(deleteBaseAction.pending, () => ({ ...asyncState.loading }))
    builder.addCase(deleteBaseAction.fulfilled, (state, action) => ({ ...asyncState.success, payload: action.payload }))
    builder.addCase(deleteBaseAction.rejected, (state, action) => ({ ...asyncState.failed, error: action.error }))
  }
})
// END {{delete}}

export {
  // START {{create}}
  createBaseSlice,
  // END {{create}}
  // START {{delete}}
  deleteBaseSlice,
  // END {{delete}}
  // START {{fetchById}}
  fetchBaseByIdSlice,
  // END {{fetchById}}
  // START {{fetchAll}}
  fetchAllBaseSlice,
  // END {{fetchAll}}
  // START {{update}}
  updateBaseSlice
  // END {{update}}
}

// configure 
/*
  import {
  // START {{create}}
  createBaseSlice,
  // END {{create}}
  // START {{delete}}
  deleteBaseSlice,
  // END {{delete}}
  // START {{fetchById}}
  fetchBaseByIdSlice,
  // END {{fetchById}}
  // START {{fetchAll}}
  fetchAllBaseSlice,
  // END {{fetchAll}}
  // START {{update}}
  updateBaseSlice
  // END {{update}}
  } from '../baseSlice'

  // START {{fetchAll}}
  fetchAllBaseReducer:  fetchAllBaseSlice.reducer,
  // END {{fetchAll}}
  // START {{delete}}
  deleteBaseReducer:  deleteBaseSlice.reducer,
  // END {{delete}}
  // START {{fetchById}}
  fetchBaseByIdReducer:  fetchBaseByIdSlice.reducer,
  // END {{fetchById}}
  // START {{update}}
  updateBaseReducer:  updateBaseSlice.reducer
  // END {{update}}
*/