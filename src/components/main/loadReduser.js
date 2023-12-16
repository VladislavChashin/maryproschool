import { createSlice } from '@reduxjs/toolkit'


export const loadReduser = createSlice({
  name: 'load',
  initialState: {
    value: false,
    header: false,
    choseCurse: false,
    school: false,
    footer: false,
  },
  reducers: {
    incrementHeader: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = !state.value
      state.header = action.payload.header
    },
    incrementChoseCurse: (state, action) => {
      state.value = state.value
      state.choseCurse = action.payload.choseCurse
    },
    incrementSchool: (state, action) => {
      state.value = state.value
      state.school = action.payload.school
    },
    incrementFooter: (state, action) => {
      state.value = state.value
      state.footer = action.payload.footer
    },
  }
})

// Action creators are generated for each case reducer function
export const { incrementHeader, incrementChoseCurse, incrementSchool, incrementFooter} = loadReduser.actions

export default loadReduser.reducer