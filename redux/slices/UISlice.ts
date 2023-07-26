import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface UIState {
    previewStatus: boolean
    deleteModalStatus: boolean
    sidebarStatus: boolean
}

const initialState: UIState = {
    previewStatus: false,
    deleteModalStatus: false,
    sidebarStatus: false,
}

export const UISlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        togglePreview: (state) => {
            state.previewStatus = !state.previewStatus
        },
        toggleDeleteModal: (state) => {
            state.deleteModalStatus = !state.deleteModalStatus
        },
        toggleSidebar: (state) => {
            console.log('dzialam')
            state.sidebarStatus = !state.sidebarStatus
        },
        setSidebarToValue: (state, action: PayloadAction<boolean>) => {
            state.sidebarStatus = action.payload
        },
    },
})

export const previewSelector = (state: RootState) => state.ui.previewStatus
export const deleteModalSelector = (state: RootState) =>
    state.ui.deleteModalStatus
export const sidebarSelector = (state: RootState) => state.ui.sidebarStatus

export const {
    toggleDeleteModal,
    togglePreview,
    toggleSidebar,
    setSidebarToValue,
} = UISlice.actions

export default UISlice.reducer
