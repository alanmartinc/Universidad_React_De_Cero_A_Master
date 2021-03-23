import React from 'react'

const Todo = ({todo, updateTodo, deleteTodo}) => (
    <li>
        <input type='checkbox' checked={todo.checked} onChange={() => {
        updateTodo(todo)
    }}/> 
        
        <button onClick={() => {
            deleteTodo(todo)
        }}>
            X
        </button>
        
        {todo.text}
    </li>
)

export default Todo