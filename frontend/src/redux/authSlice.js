import {createSlice} from "@reduxjs/toolkit";
import axios from 'axios';
import history from '../history';
const initialUser = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : null;
const initialState = {
    isLoading: false,
    currentUser: initialUser,
    error: null,

};
// Basically, this acts as the reducer for the auth state and this file
// is resonsible for connecting the backend and the front end while managing the auth state
export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        loginSuccess: (state,action) => {
            state.currentUser = action.payload;
            state.isLoading = false;
        },
        loginFailure: (state,action) => {
            state.error = action.payload;
        },
        registerSuccess: (state,action) => {
            state.currentUser = action.payload;
            state.isLoading = false;
        },
        registerFailure: (state,action) => {
            state.error = action.payload;
        },
        logoutSuccess: (state) => {
            state.currentUser = null;
        }
    }
});

export const {loginFailure,loginSuccess,registerFailure,registerSuccess,logoutSuccess} = authSlice.actions;

export default authSlice.reducer;
// This helps to register any new users
export const register = (user) => async(dispatch) => {
    const formdata = new FormData();
    
    try {
        
        formdata.append('username',user.username)
        
        formdata.append('email',user.email)
        
        formdata.append('password',user.password)   
        const config = {
            headers: {
                'content-type' : 'application/json',
            },
        }
        const response = await axios.post('http://localhost:4000/auth/register',user,config)
        console.log(response)
        if (response) {
            console.log('success')
            dispatch(registerSuccess(response.data))
            history.push('/signin')
            window.location.reload();
        }
        else {
            dispatch(registerFailure())

        }
        
    } catch (error) {
        dispatch(registerFailure())
    }
    
};
// This will just signin the users
export const signin = user => async(dispatch) => {
    try {
        const response = await axios.post('http://localhost:4000/auth/signin',user)
        if (response) {
            localStorage.setItem('auth',JSON.stringify(response.data))
            dispatch(loginSuccess(response.data))
            history.push('/dashboard')
            window.location.reload();
        }
        else {
            dispatch(loginFailure())
        }
    } catch (error) {
        dispatch(loginFailure())
    }
}