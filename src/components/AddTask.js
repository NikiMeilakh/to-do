import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setEnt, setToDo} from "../actions/TaskActions";


const AddTask = () => {
const {ent, todo}=useSelector(state=>state)

    const dispatch=useDispatch();

    const addNewTask=(event)=>{
        event.preventDefault()
        if(ent.length>0){
            dispatch(setToDo([...todo, ent]))
            dispatch(setEnt(""))}
    }

    return (
        <div>
            <form onSubmit={addNewTask}>
                <input type={"text"} placeholder={"Add new event"}
                       value={ent} onChange={(e)=> dispatch(setEnt(e.target.value))}/>
                <input type={"submit"} value={"Submit"}/>
            </form>
        </div>
    );
};

export default AddTask;