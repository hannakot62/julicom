import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: new Map()
}
const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addItem(state, action) {
            if (state.items.has(action.payload.id)) {
                state.items.set(action.payload.id, state.items.get(action.payload.id) + 1)
            } else {
                state.items.set(action.payload.id, 1)
            }
        },
        removeItem(state, action) {
            if (state.items.get(action.payload.id) > 1) {
                state.items.set(action.payload.id, state.items.get(action.payload.id) - 1)
            } else {
                state.items.delete(action.payload.id)
            }
        },
        emptyItems(state) {
            state.items = new Map()
        }
    }
})

export const { addItem, removeItem, emptyItems } = itemsSlice.actions
export default itemsSlice.reducer

