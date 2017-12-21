import React from 'react';
import ListContainer from './list_container';
import ItemForm from './item-form';
import axios from 'axios';
import '../assets/css/app.css';
import 'materialize-css/dist/css/materialize.min.css';


const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=datboipepe3000';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      todoData: []
    }
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this)
  }

  componentDidMount(){
    this.getData();
  }

  async getData(){
    const call = await axios.get(`${BASE_URL}/todos/${API_KEY}`);
    this.setState({
      todoData: call.data.todos
    })
  }

  async addTask(task){
   await  axios.post(`${BASE_URL}/todos${API_KEY}`, task);
   this.getData();
  }
  async deleteTask(id){
    await axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);

    this.getData();
  }
  async toggleComplete(id){
    await axios.put(`${BASE_URL}/todos/${id + API_KEY}`);

    this.getData();
  }
  render(){
    const {todoData} = this.state;
    const center = {
      textAlign: 'center',
    }
    return(
      <div className="container">
        <h1 className="center-align">To Do List</h1>
        <ItemForm add={this.addTask}/>
        {todoData.length ? <ListContainer list={todoData} del={this.deleteTask} complete={this.toggleComplete}/> : <h3 style={center}> Nothing to do </h3> }
      </div>
    )
  }
}



export default App;
