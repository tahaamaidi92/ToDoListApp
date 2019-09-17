import React, { Component } from 'react';
import Todoitems from './components/TodoItems/todoitem.js';
import Additem from './components/AddItem/additem.js';
import './App.css'
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      items : [
        {id:1,name:'Taha',age:27},
        {id:2,name:'Chokri',age:26},
        {id:3,name:'Hamdi',age:34}
      ]

    }
  }
  deleteItem=(id)=>{
    let items=this.state.items.filter(item => {
      return item.id !== id
    })
     this.setState({items})
  }
  addItem=(item)=>{
  item.id=Math.random();
   let items=this.state.items;
   items.push(item);
   this.setState({items:items})
  }
  render() { 
    return ( 
    <div className="App container">
      <h1 className="text-center">Todo List</h1>
      <Todoitems items={this.state.items} deleteItem={this.deleteItem}/>
      <Additem  addItem={this.addItem}/>
    </div>
    
     );
  }
}
 
export default App;