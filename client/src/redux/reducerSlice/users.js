import { createSlice } from "@reduxjs/toolkit";

export const initialState = {

    token: '',

    userDetails: {},
    isLoggedIn: 'false'

};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUserDetails(state, actions) {
            debugger;
            const { token, userDetails } = actions.payload
            return {
                ...state,
                token,
                userDetails
            }
        },
    },
})
export const { setUserDetails } = usersSlice.actions;
export default usersSlice.reducer;