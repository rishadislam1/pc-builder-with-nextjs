import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const buildpcSlice = createSlice({
  name: 'buildpc',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const { } = buildpcSlice.actions

export default buildpcSlice.reducer