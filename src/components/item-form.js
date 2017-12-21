import React,{Component} from 'react';

export default class ItemForm extends Component{
  constructor(props){
    super(props)

      this.state={
        title: '',
        details: ''
      }
      this.handleAddItem=this.handleAddItem.bind(this);
  }
  handleAddItem(e){
    e.preventDefault();
    this.props.add(this.state);
    this.setState({
      title: '',
      details: ''
    });
  }

  render(){
    const {title, details} = this.state;
    return(
      <form onSubmit={this.handleAddItem}>
        <input type="text" placeholder="Task" value={title} onChange={({target})=>this.setState({title: target.value})}/>
        <input type="text" placeholder="Details" value={details} onChange={({target})=>this.setState({details: target.value})}/>
        <button className="btn blue lighten-3">Add Task</button>
      </form>
    )
  }
}
