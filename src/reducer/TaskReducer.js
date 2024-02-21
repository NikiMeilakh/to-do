import React from 'react';
import {ENT, TODO} from "../actions/TaskActions";

export default function TaskReducer(state, action){
    switch (action.type) {
        case TODO:
return{...state, todo: action.payload}
        case ENT:
            return{ ...state, ent: action.payload}

        default: return state
    }
}