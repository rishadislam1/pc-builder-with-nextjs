import { configureStore } from '@reduxjs/toolkit'
import  buildpcReducer  from './buildpc/buildpcSlicer'
import counterReducer from './counter/counterSlicer'

export const store = configureStore({
  reducer: {
    buildpc: buildpcReducer,
    counter: counterReducer
  },
})