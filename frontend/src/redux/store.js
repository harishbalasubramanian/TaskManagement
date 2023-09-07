import {configureStore} from '@reduxjs/toolkit'
import authReducer from './authSlice';
import taskReducer from './taskSlice';

// This just sets up the store for the reducers that we have
export const store = configureStore({
    reducer: {auth: authReducer,task: taskReducer},
});