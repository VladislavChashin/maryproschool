import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'modalWindow',
  initialState: {
    value: false,
    dataLang: NaN,
    dataLess: NaN,
    dataTeach: NaN
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = !state.value
    },
    dataIncrement: (state, action) => {
      state.value = state.value
      state.dataLang = action.payload.dataLang
      state.dataLess = action.payload.dataLess
      state.dataTeach = action.payload.dataTeach
    },
  }
})

// Action creators are generated for each case reducer function
export const { increment, dataIncrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer