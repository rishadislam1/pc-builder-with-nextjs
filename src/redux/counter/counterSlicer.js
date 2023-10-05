import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0
}

export const buildpcSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCpuStatus: (state)=>{
        state.count = state.count+1;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCpuStatus } = buildpcSlice.actions

export default buildpcSlice.reducer