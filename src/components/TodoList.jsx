import React from 'react'
import {ListGroup} from "react-bootstrap"
// import * as Icon from 'react-bootstrap-icons';

const TodoList = ({todos, setTodos}) => {
    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }
  return (
    <div>
    <h2 className='text-center text-secondary'>
        Todos
    </h2>
    <ListGroup className='w-50 d-flex mx-auto'>
    
    {
        todos.map((todo)=>(<ListGroup.Item key={todo.id} variant="success" className='m-2 text-capitalize rounded-5 d-flex justify-content-between'><span>
        {todo.text}
        </span> <i role='button' className="bi bi-trash" onClick={()=>deleteTodo(todo.id)}></i></ListGroup.Item>))
    }
      
    
    </ListGroup>
    </div>
  )
}

export default TodoList