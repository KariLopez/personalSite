import React  from 'react';
import StoryModal from './StoryModal.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";


export default class Story extends React.Component{
    constructor(props){
        super(props);
        this.state={
            displayModal:false
        }
        this.showModal=this.showModal.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    showModal(){
        this.setState({displayModal:true});
    }
    handleClose(){
        this.setState({displayModal:false});
    }
    render(){
         return(
            <div className='story' onClick={this.showModal}>
      <Modal show={this.state.displayModal} onHide={this.handleClose}   size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered         dialogClassName="modal-90w"
> 
        <Modal.Header>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </Modal.Header>
        <Modal.Body>
            <img className='storyImg' src={this.props.src}/>
            <p>{this.props.caption}</p>
        </Modal.Body>
      </Modal>
            </div>
        )
    }
   
}

