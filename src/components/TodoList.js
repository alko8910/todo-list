import React, { useEffect } from 'react'
import todolist from '../styling/todolist.css';



function TodoList(props) {
    
    const items = props.items;
    
    const listItems = items.map(item =>
        {
            return <div key={item.key} className='todo-list' >
                <p onClick={ () => props.deleteItem(item.key)}>{item.text} 
               
                </p>
                
            </div>
        })

 
        
        //window.localStorage.setItem('items', JSON.stringify(items));
       // window.localStorage.getItem('items', JSON.stringify(items));
    return (
       <div>{listItems}</div>
       
    )
}

export default TodoList
