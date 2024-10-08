import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
}


export const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    increament: (state) => {
      state.value += 1

    },

    decreamet: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },

  },
})

export const { increament, decreamet, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer

