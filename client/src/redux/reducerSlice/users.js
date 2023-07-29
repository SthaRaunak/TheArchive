import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    fullName: '',
    token: '',
    email: '',
    isLoggedIn: false,
    phoneNumber: '',
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUserDetails(state) {
            //code here
        },
    },
})
export const { setUserDetails } = usersSlice.actions;
export default usersSlice.reducer;