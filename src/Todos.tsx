import React, { useState } from 'react'
import { ITodo } from './model'
import TodoList from './TodoList'
import TodoInput from './TodoInput'

const Todos = () => {
    const [todo, setTodo] = useState<string>("")
    const [todos, setTodos] = useState<ITodo[]>([])

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setTodos([...todos, { id: Date.now(), completed: false, name: todo}])
    }

    const handleDeleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleCompletedTodo = (id: number) => {
        const updatedTodos = todos.map((todo) => 
            todo.id === id ? {...todo, completed: true} : todo
        )
        setTodos(updatedTodos)
    }

    
  return (
    <div>
        <TodoInput handleOnSubmit={handleOnSubmit} todo={todo} setTodo={setTodo}/>
        <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo}
        handleCompletedTodo={handleCompletedTodo}
        />
    </div>
  )
}

export default Todos