import React, {useState} from 'react';
import TodoItem from './TodoItem';



function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return ;
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(todo, ...todos)
    }

    return (
        <div>
            <h1>Sta je plan za danas</h1>
            <TodoItem onSubmit={addTodo}/>
        </div>
    )
}

export default TodoList
