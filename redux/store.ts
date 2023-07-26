import { configureStore } from '@reduxjs/toolkit'
import markdownSlice from './slices/markdownSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import UISlice from './slices/UISlice'

export const store = configureStore({
    reducer: {
        markdown: markdownSlice,
        ui: UISlice,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
