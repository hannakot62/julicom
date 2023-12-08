import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: '',
    email: '',
    role: '',
    id:''
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.username = action.payload.username
            state.email = action.payload.email
            state.role = action.payload.role
            state.id = action.payload.id
        },
        unsetUser(state) {
            state.user = null
        },
    }
})

export const { setUser, unsetUser } = userSlice.actions
export default userSlice.reducer

