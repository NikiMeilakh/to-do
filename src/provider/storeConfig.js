import React from 'react';
import {applyMiddleware, createStore} from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
import {logger} from "redux-logger";
import TaskReducer from "../reducer/TaskReducer";

const initialState={
    todo:[],
    ent:"",
};

const myStore=createStore(TaskReducer,
    initialState, applyMiddleware(thunk, logger));

export default myStore;