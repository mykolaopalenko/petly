import { createSlice } from '@reduxjs/toolkit';
import { userApi } from './userApi';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import persistReducer from 'redux-persist/es/persistReducer';

const initialState = {
  user: null,
  token: null,
  isAuth: false,
};

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            return {
                ...state,
                user: payload
            };
        },
        setToken: (state, { payload }) => {
            return {
                ...state,
                token: payload,
                isAuth: true
            };
        },
        logout: () => initialState,
    },
});

const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

export const authReducer = authSlice.reducer;

export const { logout, setUser, setToken } = authSlice.actions;

export const persistedUserReducer = persistReducer(persistConfig, authReducer);
