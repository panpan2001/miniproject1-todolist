import { createSlice } from "@reduxjs/toolkit"

const initialState= {
    login: {
        currentUser: null,
        isFetching: false,
        error: false,
        isLoggedIn: false,
        isLoggedOut:false
    }
}

const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        loginStart: (state) => {
            return {
                ...state,
                login: {
                    ...state.login,
                    isFetching: true,
                    error: false
                }
            }
        },
        loginSuccess: (state, action) => {
            return {
                ...state,
                login: {
                    ...state.login,
                    isFetching: false,
                    isLoggedIn: true,
                    currentUser: action.payload
                }
            }
        },
        loginFailure: (state) => {
            return {
                ...state,
                login: {
                    ...state.login,
                    isFetching: false,
                    error: true
                }
            }
        },
        logoutStart: (state) => {
            return {
                ...state,
                login: {
                    ...state.login,
                    isFetching: true,
                    error: false
                }
            }
        },
        logoutSuccess: (state) => {
            return {
                ...state,
                login: {
                    ...state.login,
                    isFetching: false,
                    isLoggedIn: false,
                    isLoggedOut:true
                }
            }
    },
        logoutFailure: (state) => {
            return {
                ...state,
                login: {
                    ...state.login,
                    isFetching: false,
                    error: true
                }
            }
        }
    }
})

export const { loginStart, loginSuccess, loginFailure, logoutStart, logoutSuccess, logoutFailure } = loginSlice.actions
const loginReducer = loginSlice.reducer
export default loginReducer