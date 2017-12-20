import React,{Component} from 'react';

export default class ItemForm extends Component{
  constructor(props){
    super(props)

      this.state={
        task: '',
        details: ''
      }
      this.handleAddItem=this.handleAddItem.bind(this);
  }
  handleAddItem(e){
    e.preventDefault();
    this.props.add(this.state);
    this.setState({
      task: '',
      details: ''
    });
  }

  render(){
    const {task, details} = this.state;
    return(
      <form onSubmit={this.handleAddItem}>
        <input type="text" placeholder="Task" value={task} onChange={({target})=>this.setState({task: target.value})}/>
        <input type="text" placeholder="Details" value={details} onChange={({target})=>this.setState({details: target.value})}/>
        <button className="btn blue darken-4">Add Task</button>
      </form>
    )
  }
}
