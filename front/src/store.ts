import { configureStore } from '@reduxjs/toolkit'
import commentSlice from './slices/commentSlice'

export const store =  configureStore({
  reducer: {
    comment: commentSlice
  },
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch