import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../../redux/actions/todoActions'
import {getId} from '../../utils'

const Todos = ({todo, addTodo}) => {
    const handleSubmit = (e) => {
        e.preventDefault()

        const text = e.target[0].value

        addTodo({
            text,
            checked: false,
            id: getId()
        })

        e.target[0].value = ''
    }

    return(
        <div>
            <h1>Todos</h1>
            <form onSubmit={handleSubmit}>
                <input type='text'/>
                <button>
                    Agregar
                </button>
            </form>
            <ul>
                {todo.todos.map(todo => (
                    <li key={todo.id}>
                        <input type='checkbox' defaultChecked={todo.checked} /> {todo.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todo: state.todo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => dispatch(addTodo(todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)