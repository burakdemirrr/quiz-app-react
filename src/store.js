import { configureStore } from '@reduxjs/toolkit'
import questionReducer from "./reducer"

export const store=configureStore({
    reducer:{
        question:questionReducer,
    }
})