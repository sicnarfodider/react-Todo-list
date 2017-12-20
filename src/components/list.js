import React from 'react';
import Modal from './confirmation';



export default class List extends React.Component{
  render(){
    const {task, complete, index} = this.props.task

    const style = {
      textDecoration : 'line-through',
      color: '#ddd'
    }
    return(
      <li className='collection-item row'>
        <div style={complete ? style : {}} className="col s9">
          {task}
        </div>
        <div className="col s3 center-align ">
          <Modal callBack={()=>this.props.del(this.props.index)}/>
          <button onClick={()=>this.props.complete(this.props.index)} className={`ml-2 btn green waves-effect waves-light btn-floating ${complete ?'yellow': 'green'}`}><i className="material-icons">{complete ? 'undo' : 'check'}</i></button>
        </div>
        </li>
    )
  }
}
