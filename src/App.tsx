import React from "react";
import { useState } from "react";
import { hot } from "react-hot-loader"
import { applyMiddleware, createStore } from "redux";
import { Provider, TypedUseSelectorHook, useDispatch, useSelector  } from 'react-redux'
import { Layout } from "./components/Layout/Layout";
import { LoginForm } from "./components/LoginForm/LoginForm";
import thunk from "redux-thunk";
import { configureStore } from '@reduxjs/toolkit'
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { userSlice } from "./store/reducers/UserSlice";
import { useEffect } from "react";
import { fetchUsers } from "./store/reducers/ActionCreators";
import PostContainer from "./components/PostContainer/PostContainer";

const App = () => {
    const dispatch = useAppDispatch()
    const {users, isLoading, error} = useAppSelector(state => state.userReducer) 
    const {isLoggedIn} = useAppSelector(state => state.authReducer)
    useEffect(() => {
        dispatch(fetchUsers())
    }, []) 
    return (
            <Layout>
                {isLoggedIn ? <PostContainer /> : <LoginForm />}
                {/* {JSON.stringify(users, null, 2)} */}
            </Layout>
    )
}

export default hot(module)(App);