import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addItem(state, action) {
            const index = state.findIndex(i => i[0]=== action.payload)
            if (index>-1) {
                state[index][1] = state[index][1]+1
            } else {
                state.push([action.payload, 1])
            }
        },
        removeItem(state, action) {
            const index = state.findIndex(i => i[0] === action.payload)
            if (state[index][1] > 1) {
                state[index][1] = state[index][1] - 1
            } else {
                state.splice(index, 1)
            }
        },
        emptyItems(state) {
            state = []

    }}}
)

export const { addItem, removeItem, emptyItems } = itemsSlice.actions
export default itemsSlice.reducer

