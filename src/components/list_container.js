import React,{Component} from 'react';
import List from './list';



export default class ListContainer extends Component{
  render(){
    const list = this.props.list.map((task,i)=>{
      return <List key={i} del={this.props.del} complete={this.props.complete} task={task}/>
    })
    return(
      <div>
        <ul className="collection">
          {list}
        </ul>
      </div>
    )
  }
}
