import React from 'react';
import ListContainer from './list_container';
import ItemForm from './item-form';
import taskData from '../todo-data';
import 'materialize-css/dist/css/materialize.min.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      todoData: taskData
    }
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this)
  }
  addTask(task){
    task.complete=false;
    this.setState({
      todoData: [...this.state.todoData, task]
    })
  }
  deleteTask(taskIndex){
    const tempData = this.state.todoData.slice();
    tempData.splice(taskIndex, 1);
    this.setState({
      todoData: tempData
    });
  }
  toggleComplete(taskIndex){
    const tempData = this.state.todoData.slice();
    tempData[taskIndex].complete = !tempData[taskIndex].complete;
    this.setState({
      todoData : tempData
    })
  }
  render(){
    const {todoData} = this.state;
    return(
      <div className="container">
        <h1 className="center-align">To Do List</h1>
        <ItemForm add={this.addTask}/>
        <ListContainer list={todoData} del={this.deleteTask} complete={this.toggleComplete}/>
      </div>
    )
  }
}



export default App;
