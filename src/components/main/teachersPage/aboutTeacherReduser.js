import { createSlice } from '@reduxjs/toolkit'
import { teachers } from '../data/teachers'

export const aboutTeacherReduser = createSlice({
  name: 'aboutTeacher',
  initialState: {
    value: false,
    teacher: NaN,
  },
  reducers: {
    incrementTeacher: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = !state.value
      state.teacher = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { incrementTeacher } = aboutTeacherReduser.actions

export default aboutTeacherReduser.reducer