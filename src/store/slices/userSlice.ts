import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user.username = action.payload.username
            state.user.email = action.payload.email
            state.user.role = action.payload.role

        },
        unsetUser(state) {
            state.user = null
        },
    }
})

export const { setUser, unsetUser } = userSlice.actions
export default userSlice.reducer

