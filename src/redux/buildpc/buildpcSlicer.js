import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pc: {}
}

export const buildpcSlice = createSlice({
  name: 'buildpc',
  initialState,
  reducers: {
    setCpu: (state, action)=>{
        state.pc = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCpu } = buildpcSlice.actions

export default buildpcSlice.reducer