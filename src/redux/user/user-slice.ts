import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

type UserStateType = {
    firstname: string | null;
    lastname: string | null;
    email: string | null;
    address: string | null;
    id: string | null;
    token: string | null;
};

const initialState: UserStateType = {
    firstname: null,
    lastname: null,
    email: null,
    address: null,
    id: null,
    token: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserStateType>) => {
            const { firstname, lastname, address, email, token, id } = action.payload;

            state.firstname = firstname;
            state.lastname = lastname;
            state.address = address;
            state.email = email;
            state.token = token;
            state.id = id;
        },
        removeUser: (state) => {
            state.firstname = null;
            state.lastname = null;
            state.address = null;
            state.email = null;
            state.token = null;
            state.id = null;
        },
    },
});

export const { setUser, removeUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
