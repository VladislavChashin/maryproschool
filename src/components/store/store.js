import { configureStore } from '@reduxjs/toolkit'
import modalReduser from '../header/modalReduser'
import aboutTeacherReduser from '../main/teachersPage/aboutTeacherReduser'
import loadReduser from '../main/loadReduser'


export default configureStore({
  reducer: {
    counter: modalReduser,
    teacher: aboutTeacherReduser,
    load: loadReduser,
  }
})