import {
  createSlice
} from '@reduxjs/toolkit'
import {
  createCommentAction,
  updateCommentAction
} from './commentAction'

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



const createCommentSlice = createSlice({
  name: 'createComment',
  initialState: defaultState,
  reducers: {
    reset: (state) => (state = defaultState),
    resetAsyncState: (state) => ({ ...state, ...asyncState.default })
  },
  extraReducers: (builder) => {
    builder.addCase(createCommentAction.pending, () => ({ ...asyncState.loading }))
    builder.addCase(createCommentAction.fulfilled, (state, action) => ({ ...asyncState.success, payload: action.payload }))
    builder.addCase(createCommentAction.rejected, (state, action) => ({ ...asyncState.failed, error: action.error }))
  }
})

const updateCommentSlice = createSlice({
  name: 'updateComment',
  initialState: defaultState,
  reducers: {
    reset: (state) => (state = defaultState),
    resetAsyncState: (state) => ({ ...state, ...asyncState.default })
  },
  extraReducers: (builder) => {
    builder.addCase(updateCommentAction.pending, () => ({ ...asyncState.loading }))
    builder.addCase(updateCommentAction.fulfilled, (state, action) => ({ ...asyncState.success, payload: action.payload }))
    builder.addCase(updateCommentAction.rejected, (state, action) => ({ ...asyncState.failed, error: action.error }))
  }
})


const commentSlice = {
  createCommentSlice,
  updateCommentSlice
}

export default commentSlice