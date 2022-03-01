import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const ADD_TODO = gql`
    mutation($task: String!) {
        insert_todos_one(
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
`;



export default () => {
    const [task, setTask] = useState("");
    const [addTodo, { data, loading, error }] = useMutation(ADD_TODO);

    const submitTask = () => {
        addTodo({variables: {task}});
        setTask("");
    }

    if (loading) return "loading...";
    if (error) return `error: ${error.message}`;
  
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