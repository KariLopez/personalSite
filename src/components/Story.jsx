import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";


function Story(props){

     const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

      <div>
        <button className='story' onClick={handleShow}><span class="material-icons" >
{props.icon}
</span></button> 
      <Modal show={show} onHide={handleClose}   size="lg"
      centered  >
        
        <Modal.Body>
            <img className='storyImg' src={props.src}/>
        </Modal.Body>
        <Modal.Footer centered><p className='caption'>{props.caption}</p></Modal.Footer>
      </Modal>
    </div>

  ) 
}
export default Story;


