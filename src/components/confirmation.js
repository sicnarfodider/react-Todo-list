import React from 'react';
import '../assets/css/modal.css';

export default class ConfirmationModal extends React.Component{
  constructor(props){
    super(props);
    this.state={
      visible: false
    }
    this.handleConfirm = this.handleConfirm.bind(this)
  }
  handleConfirm(){
    this.props.callBack();
    this.setState({
      visible: false
    })
  }

  render(){
    const  button = <button onClick={()=>this.setState({visible:true})} className="btn red"><i className="material-icons">delete_forever</i></button>
    if(this.state.visible){
      return(
        <div>
          {button}
          <div className="confirm-modal">
            <div  className="modal-content">
              <div className="card">
                <div className="card-content">
                  <p>Delete this task? </p>
                </div>
                <div className="card-action">
                  <button onClick={this.handleConfirm} className="btn green">Yes</button>
                  <button onClick={()=>this.setState({visible:false})} className="btn red">No</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return button;
  }

}
