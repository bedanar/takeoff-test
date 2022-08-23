import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { postAPI } from "../services/PostsService";
import userReducer from './reducers/UserSlice'
import authReducer from './reducers/AuthSlice'

const rootReducer = combineReducers({
    userReducer,
    authReducer,
    [postAPI.reducerPath] : postAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(postAPI.middleware)
        }
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']