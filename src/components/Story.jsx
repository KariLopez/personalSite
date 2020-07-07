import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";


function Story(props){
     const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

      <div>
        <button className='story' onClick={handleShow}/>
      <Modal show={show} onHide={handleClose}   size="lg"
      centered  >
        
        <Modal.Body>
            <img className='storyImg' src={props.src}/>
            <p className='caption'>{props.caption}</p>
        </Modal.Body>
      </Modal>
    </div>

  ) 
}
export default Story;


