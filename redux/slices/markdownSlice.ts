import { MarkdownFile } from '@prisma/client'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface MarkdownFilesState {
    data: MarkdownFile[] | undefined
    isLoading: boolean
    error: undefined | string
}

const initialState: MarkdownFilesState = {
    data: undefined,
    isLoading: false,
    error: undefined,
}

export const fetchMarkdownFiles = createAsyncThunk(
    'content/fetchContent',
    async () => {
        const res = await fetch('/api/markdown/getAllFiles')
        const data = await res.json()
        return data
    }
)

export const markdownFilesSlice = createSlice({
    name: 'markdown',
    initialState,
    reducers: {
        setFiles: (state, action: PayloadAction<MarkdownFile[]>) => {
            state.data = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMarkdownFiles.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(
            fetchMarkdownFiles.fulfilled,
            (state, action: PayloadAction<MarkdownFile[]>) => {
                state.isLoading = false
                state.data = action.payload
            }
        )
        builder.addCase(fetchMarkdownFiles.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
            console.error(state.error)
        })
    },
})

// Action creators are generated for each case reducer function
export const { setFiles } = markdownFilesSlice.actions

export const filesSelector = (state: RootState) => state.markdown

export default markdownFilesSlice.reducer
