import React, { useState, useCallback, useEffect } from 'react'
import TodoList from './TodoList'

const getLocalTodoList = () => {
    let list = localStorage.getItem('list')
    if(list) {
        return JSON.parse(localStorage.getItem('list'))
    }
    else {
        return []
    }
}

function Todo() {
    const [newTask, setNewTask] = useState('')
    const [todoList, setTodoList] = useState(getLocalTodoList())

    const addTask = () => {
        setTodoList([...todoList, {
            id: Date.now(),
            todo: newTask,
            isChecked: false
        }])
        setNewTask('')
    }

    const deleteTask = useCallback((id) => {
        setTodoList(todoList => todoList.filter((task) => task.id!==id))
    },[])

    const changeCheckBoxStatus = useCallback((id) => {
        // const newTodoList = 
        setTodoList(todoList => todoList.map( item => {
            if(item.id===id) {
                const newItem = {...item}
                newItem.isChecked = !item.isChecked
                return newItem
            }
            return  item
        }))
    },[])

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(todoList))
    },[todoList])

    return (
        <div>
            <h2>Todo List</h2>
            <input type="text" value={newTask} onChange={e => setNewTask(e.target.value)} />
            <button onClick={addTask}>Add</button>

            <TodoList list={todoList} deleteTask={deleteTask} changeCheckBoxStatus={changeCheckBoxStatus}/>
        </div>
    )
}

export default Todo
