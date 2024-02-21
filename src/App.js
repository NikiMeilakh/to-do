import React, {useState} from 'react';
import ToDoList from "./components/ToDoList";
import AddTask from "./components/AddTask";

const App = () => {

    return (
        <div>
           <AddTask/>
            <ToDoList/>
        </div>
    );
};

export default App;