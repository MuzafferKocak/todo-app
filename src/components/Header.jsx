import React, { useState } from 'react'
import {Form, InputGroup, Button} from "react-bootstrap"
import { v4 as uuidv4 } from 'uuid';



const Header = ({todos, setTodos}) => {

    const [task, setTask]= useState("")
    
    const addTodo = ()=> {
        console.log(task);
        const newTodo ={
            id: uuidv4(),
            text:task,
            completed: false,
        }
        console.log(newTodo);
        setTodos([...todos, newTodo])
        setTask("")

    }
  return (
    <div className='content'>
        <h1 className='text-center '>Todo App</h1>
        <InputGroup className="mb-3 w-50 d-flex mx-auto">
        <Form.Control
          placeholder="Enter new todo..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={task}
          onChange={(e)=> setTask(e.target.value)}
        />
        <Button className='input-group-text bg-success' id="basic-addon2" disabled={!task.trim()} onClick={addTodo} >Add Todo</Button>
      </InputGroup>
    </div>
  )
}

export default Header