import { configureStore } from '@reduxjs/toolkit'
import  buildpcReducer  from './buildpc/buildpcSlicer'

export const store = configureStore({
  reducer: {
    buildpc: buildpcReducer
  },
})