import { configureStore } from '@reduxjs/toolkit'
import  buildpcReducer  from './buildpc/buildpcSlicer'
import counterReducer from './counter/counterSlicer'
import { api } from './apiSlice'

export const store = configureStore({
  reducer: {
    buildpc: buildpcReducer,
    counter: counterReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
})