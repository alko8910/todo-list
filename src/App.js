
import './App.css';
import TodoItem from './components/TodoItem';
//import TodoList from './components/TodoList';




function App() {
  return (
    <div className="todo-app">
      <h1 className='main-header'>To-Do List</h1>
      <TodoItem />
    </div>
  );
}

export default App;
