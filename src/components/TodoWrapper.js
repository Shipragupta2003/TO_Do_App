import React ,{useState} from 'react'
import TodoForm  from './TodoForm'
import Todo from './Todo';

import {v4 as uuidv4} from 'uuid';


const TodoWrapper = () => {
    const [todos, setTodos]=useState([])

    const addTodo=(todo)=>{
        setTodos([...todos , {id:uuidv4() , task:todo, completed:false, isEditing:false, time:"10 bje"
    }])
    console.log(todos)
}

const showFunction=()=>{
    todos.map((val, index)=>{
        console.log("val.item", val.task)
    })
}       

console.log("todo.item", todos)
  return (
    <div className='TodoWrapper'>
      <TodoForm addTodo={addTodo}/>
      
      {todos.map((todo,index)=>(
        <Todo task={todo} key={index} />
      ))}
      {/* <div style={{width:"100px", height:"100px", background:"#fff"}} onClick={showFunction}>click me</div>
       */}
    </div>
  )
}

export default TodoWrapper;
