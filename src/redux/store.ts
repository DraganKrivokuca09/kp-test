import { configureStore } from '@reduxjs/toolkit'
import { adsReducer } from './ads'

export const store = configureStore({
  reducer: {
    ads: adsReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;