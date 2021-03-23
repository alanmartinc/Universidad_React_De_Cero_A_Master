import React from 'react'

const Todo = ({todo, updateTodo, deleteTodo}) => (
    <li onClick={() => {
        updateTodo(todo)
    }}>
        <input type='checkbox' defaultChecked={todo.checked} checked={todo.checked}/> 
        
        <button onClick={() => {
            deleteTodo(todo)
        }}>
            X
        </button>
        
        {todo.text}
    </li>
)

export default Todo