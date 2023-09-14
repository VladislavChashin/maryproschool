import { configureStore } from '@reduxjs/toolkit'
import modalReduser from '../header/modalReduser'
import aboutTeacherReduser from '../main/teachersPage/aboutTeacherReduser'


export default configureStore({
  reducer: {
    counter: modalReduser,
    teacher: aboutTeacherReduser}
})