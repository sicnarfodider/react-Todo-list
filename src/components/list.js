import React from 'react';
import Modal from './confirmation';



export default class List extends React.Component{
  render(){
    const {title, complete, index} = this.props.task

    const style = {
      textDecoration : 'line-through',
      color: '#888'
    }
    return(
      <li className='collection-item row'>
        <div style={complete ? style : {}} className="col s9">
          {title}
        </div>
        <div className="col s3 center-align ">
          <button onClick={()=>this.props.complete(this.props.task._id)} className={`ml-2 btn green waves-effect waves-light ${complete ?'yellow': 'green'}`}><i className="material-icons">{complete ? 'undo' : 'check'}</i></button>
          <Modal callBack={()=>this.props.del(this.props.task._id)}/>
        </div>
        </li>
    )
  }
}
