import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setToDo} from "../actions/TaskActions";

const ToDoList = () => {
    const {todo,ent}=useSelector(state=>state);
    const dispatch=useDispatch();


    const deleteTask=(index)=>{
        dispatch(setToDo(todo.filter((elem,ind)=>ind!=index)));
    }

    return (
        <div>
            <ul>
                {todo.map((item,index)=>(
                    <li key={index}> {item}
                        <input type={"checkbox"} />
                        <button onClick={()=>deleteTask(index)}>Delete</button>
                    </li>
                ))}</ul>
        </div>
    );
};

export default ToDoList;