import React from 'react'
import { ITodo } from "./model"

interface TodoListProps {
    todos: ITodo[]
    handleDeleteTodo: (id: number) => void
    handleCompletedTodo: (id: number) => void
    
}

const TodoList = ({todos, handleDeleteTodo, handleCompletedTodo}: TodoListProps) => {

  return (
    
    <div>
        {todos.map((todo) => {
            return (

                <>
                {todo.completed && <p>completed</p>}
                <h2 style={{color: todo.completed ? "green" : "black"}}>{todo.name}</h2>
                <button onClick={() => handleDeleteTodo(todo.id)}>delete</button>
                <button onClick={() => handleCompletedTodo(todo.id)}>completed</button>

                </>
            )
        })}
    </div>
  )
}

export default TodoList