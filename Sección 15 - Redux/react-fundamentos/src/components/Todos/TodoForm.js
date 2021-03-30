import React from 'react'

const TodoForm = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type='text' />
    <button>
      Agregar
    </button>
  </form>
)

export default TodoForm