import React from 'react'
// import ListItems from './ListItems'

function TodoList({list, deleteTask, changeCheckBoxStatus}) {
    return (
        <div>
            <ul>
                {
                   list.map(item => 
                       <li key={item.id}>
                           <input type="checkbox"  checked={item.isChecked} onChange={() =>changeCheckBoxStatus(item.id)} />
                           <span className={item.isChecked ? "strike" : ""}>{item.todo}</span>
                       <button onClick={() => deleteTask(item.id)}> x </button>
                       </li>
                   ) 
                }
            </ul>
            {/* <ListItems /> */}
        </div>
    )
}

export default React.memo(TodoList)
