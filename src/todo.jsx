import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export default function Todo() {
    let [task, setTask] = useState([{ id: uuidv4(), taskname: "sample task", iscompleted : false }]);
    let [newtask, setNewTask] = useState([]);
    function showtask(evt) {
        setNewTask(evt.target.value);
        // console.log(newtask)
    }
    function addtask() {
        if (newtask != "") {
            setTask((previousTask) => {
                return [...previousTask, { id: uuidv4(), taskname: newtask, iscompleted : false }]
            });
            // console.log(task);
            setNewTask("");
        }
    }

    function deleteTask(id) {
        let filterArr = task.filter((element) =>
            element.id != id
        )
        setTask(filterArr);
    }

    function updateAllTask() {
        setTask((previousTask) =>
            previousTask.map((element) => {
                return {
                    ...element, taskname: element.taskname.toUpperCase()
                }
            })
        )
    }

    function upperCaseSingleTask(id) {
        setTask((previousTask) =>
            previousTask.map((element) => {
                if (element.id == id) {
                    console.log('matched')
                    return {
                        ...element, iscompleted : true
                    };
                }
                else {
                    console.log('not matched')
                    return element;
                }
            })
        )
        console.log(id);
    }

    return (
        <div id="todo-container">
            <h1>Basic Todo App</h1>
            <input type="text" placeholder="Enter task" value={newtask} onChange={showtask} />  
            <button onClick={addtask} id="add-task">add task</button>

            <ul>
                {task.map((element) =>
                    <li key={element.id} style={element.iscompleted ? {textDecorationLine : "line-through"}: {}}> {element.taskname}<button onClick={() => { deleteTask(element.id) }} className="delete-button">delete</button>
                        <button onClick={() => { upperCaseSingleTask(element.id) }} className="markasdone">Mark as Done</button>
                    </li>
                    // console.log(element)
                )}
            </ul>
            <button onClick={updateAllTask} id="uppercase-button"> UPPERCASE TASK</button>
        </div >
    )
}