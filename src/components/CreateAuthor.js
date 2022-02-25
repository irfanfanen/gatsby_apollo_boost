import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const ADD_TODO = gql`
    mutation($task: String!) {
        insert_todos_onex(
            object: {
                task: $task,
                completed: true
            }
        ),{
            id
            task
            completed
        }
    }
`

export default () => {
    const [task, setTask] = useState("");
    const [addTodo, { data, loading, error }] = useMutation(ADD_TODO);

    const submitTask = () => {
        addTodo({variables: {task}});
        setTask("");

        console.log('TT')
        console.log(error.message)
        if (loading){
            console.log('loading')
        }
        if (data){
            console.log('data')
        }
        // if (error){
        //     console.log(error.message)
        // }
    }
  
    return (
        <div>
            <p>Input Todo</p>
            <input 
                type="text"
                placeholder="title"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button
                onClick={submitTask}
            >
                Add
            </button>
        </div>
    )    
}