import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useLazyQuery } from "@apollo/client";

const GET_TODOS = gql`
query Todos($task: String!) {
    todos(where: {task: {_eq: $task }}) {
    id
    task
    }
}
`;

export default () => {
    const [task, setTask] = useState("");
    const [getDog, { loading, error, data }] = useLazyQuery(GET_TODOS);

    const testBtn = (e) => {
        getDog({ variables: { task: 'one' } })
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
            <button onClick={testBtn}>
                Test
            </button>
        </div>
    )    
}