"use client"

import { configureStore } from '@reduxjs/toolkit'
import { useDispatch,TypedUseSelectorHook, useSelector } from 'react-redux'
import todoListReducer from './features/todolist-slice'

const store = configureStore({
    reducer: {
        todoList: todoListReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector
export default store