import {
  createSlice
} from '@reduxjs/toolkit'
import {
  // START {{create}}
  create$Cname$Action,
  // END {{create}}
  // START {{delete}}
  delete$Cname$Action,
  // END {{delete}}
  // START {{fetchById}}
  fetch$Cname$ByIdAction,
  // END {{fetchById}}
  // START {{fetchAll}}
  fetchAll$Cname$Action,
  // END {{fetchAll}}
  // START {{update}}
  update$Cname$Action
  // END {{update}}
} from './$name$Action'

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
const fetchAll$Cname$Slice = createSlice({
  name: 'fetchAll$Cname$',
  initialState: defaultState,
  reducers: {
    reset: (state) => (state = defaultState),
    resetAsyncState: (state) => ({ ...state, ...asyncState.default })
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAll$Cname$Action.pending, () => ({ ...asyncState.loading }))
    builder.addCase(fetchAll$Cname$Action.fulfilled, (state, action) => ({ ...asyncState.success, payload: action.payload }))
    builder.addCase(fetchAll$Cname$Action.rejected, (state, action) => ({ ...asyncState.failed, error: action.error }))
  }
})
// END {{fetchAll}}

// START {{fetchById}}
const fetch$Cname$ByIdSlice = createSlice({
  name: 'fetch$Cname$ById',
  initialState: defaultState,
  reducers: {
    reset: (state) => (state = defaultState),
    resetAsyncState: (state) => ({ ...state, ...asyncState.default })
  },
  extraReducers: (builder) => {
    builder.addCase(fetch$Cname$ByIdAction.pending, () => ({ ...asyncState.loading }))
    builder.addCase(fetch$Cname$ByIdAction.fulfilled, (state, action) => ({ ...asyncState.success, payload: action.payload }))
    builder.addCase(fetch$Cname$ByIdAction.rejected, (state, action) => ({ ...asyncState.failed, error: action.error }))
  }
})
// END {{fetchById}}

// START {{create}}
const create$Cname$Slice = createSlice({
  name: 'create$Cname$',
  initialState: defaultState,
  reducers: {
    reset: (state) => (state = defaultState),
    resetAsyncState: (state) => ({ ...state, ...asyncState.default })
  },
  extraReducers: (builder) => {
    builder.addCase(create$Cname$Action.pending, () => ({ ...asyncState.loading }))
    builder.addCase(create$Cname$Action.fulfilled, (state, action) => ({ ...asyncState.success, payload: action.payload }))
    builder.addCase(create$Cname$Action.rejected, (state, action) => ({ ...asyncState.failed, error: action.error }))
  }
})
// END {{create}}

// START {{update}}
const update$Cname$Slice = createSlice({
  name: 'update$Cname$',
  initialState: defaultState,
  reducers: {
    reset: (state) => (state = defaultState),
    resetAsyncState: (state) => ({ ...state, ...asyncState.default })
  },
  extraReducers: (builder) => {
    builder.addCase(update$Cname$Action.pending, () => ({ ...asyncState.loading }))
    builder.addCase(update$Cname$Action.fulfilled, (state, action) => ({ ...asyncState.success, payload: action.payload }))
    builder.addCase(update$Cname$Action.rejected, (state, action) => ({ ...asyncState.failed, error: action.error }))
  }
})
// END {{update}}

// START {{delete}}
const delete$Cname$Slice = createSlice({
  name: 'delete$Cname$',
  initialState: defaultState,
  reducers: {
    reset: (state) => (state = defaultState),
    resetAsyncState: (state) => ({ ...state, ...asyncState.default })
  },
  extraReducers: (builder) => {
    builder.addCase(delete$Cname$Action.pending, () => ({ ...asyncState.loading }))
    builder.addCase(delete$Cname$Action.fulfilled, (state, action) => ({ ...asyncState.success, payload: action.payload }))
    builder.addCase(delete$Cname$Action.rejected, (state, action) => ({ ...asyncState.failed, error: action.error }))
  }
})
// END {{delete}}

export {
  // START {{create}}
  create$Cname$Slice,
  // END {{create}}
  // START {{delete}}
  delete$Cname$Slice,
  // END {{delete}}
  // START {{fetchById}}
  fetch$Cname$ByIdSlice,
  // END {{fetchById}}
  // START {{fetchAll}}
  fetchAll$Cname$Slice,
  // END {{fetchAll}}
  // START {{update}}
  update$Cname$Slice
  // END {{update}}
}

// configure 
/*
  import {
  // START {{create}}
  create$Cname$Slice,
  // END {{create}}
  // START {{delete}}
  delete$Cname$Slice,
  // END {{delete}}
  // START {{fetchById}}
  fetch$Cname$ByIdSlice,
  // END {{fetchById}}
  // START {{fetchAll}}
  fetchAll$Cname$Slice,
  // END {{fetchAll}}
  // START {{update}}
  update$Cname$Slice
  // END {{update}}
  } from '../$name$Slice'

  // START {{fetchAll}}
  fetchAll$Cname$Reducer:  fetchAll$Cname$Slice.reducer,
  // END {{fetchAll}}
  // START {{delete}}
  delete$Cname$Reducer:  delete$Cname$Slice.reducer,
  // END {{delete}}
  // START {{fetchById}}
  fetch$Cname$ByIdReducer:  fetch$Cname$ByIdSlice.reducer,
  // END {{fetchById}}
  // START {{update}}
  update$Cname$Reducer:  update$Cname$Slice.reducer
  // END {{update}}
*/