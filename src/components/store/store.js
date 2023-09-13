import { configureStore } from '@reduxjs/toolkit'
import modalReduser from '../header/modalReduser'

export default configureStore({
  reducer: {
    counter: modalReduser }
})