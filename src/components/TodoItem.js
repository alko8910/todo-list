import React, {useState, useEffect} from 'react'
import TodoList from './TodoList';



class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentItem: {
                text: '',
                key:''
            }
            
            
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
      
    }
    
   

    handleInput(e){
        this.setState({
            currentItem: {
                text: e.target.value,
                key: Date.now()
            }
        })
    }

    loadFromStorage() {
        const json = localStorage.getItem("items");

        if (json) {
            const itemsArray = JSON.parse(json);
            this.setState({ items: itemsArray });
        }
    }

    componentDidMount() {
        this.loadFromStorage();

    }

    saveToStorage(items) {
        const json = JSON.stringify(items);
        localStorage.setItem("items", json);
    }

    addItem(e){
        e.preventDefault();
        const newItem = this.state.currentItem;
        
        if(newItem.text !==''){
            const newItems = [...this.state.items, newItem];
            this.setState({
                items:newItems,
                currentItem: {
                    text: '',
                    key:''
                }
               
            })
            this.saveToStorage(newItems);
        }else {
            alert('Enter task')
            
        }
        console.log(newItem);
       
    }
    deleteItem (key) {
        const filteredItems = this.state.items.filter (item => item.key !== key);
        this.setState({
            items : filteredItems
        })
        this.saveToStorage(filteredItems);
    }

 


    render() {
        return ( 
            <div className='main'>
            < header >
            <form onSubmit={this.addItem}>
            <
            input type = 'text'
            placeholder = 'Enter task'
            value = {this.state.currentItem.text}
            onChange={this.handleInput} 
            /> 
            <button type = 'submit' > Add </button> 
            </form>
            </header>
            <TodoList items= {this.state.items} deleteItem={this.deleteItem} />
            </div> 
        )
    }
}

export default TodoItem