
import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import "./PatientProfile.css";
import BlockIcon from '@material-ui/icons/Block';
import { useStateValue } from './StateProvider';


function PatientProfile(props) {
    const [{user}, dispatch] = useStateValue()

    return (
        <div onClick={e => e.stopPropagation()}>
        <Modal 
          
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton style={{backgroundColor: '#424242', color: 'white'}}>
            <Modal.Title id="contained-modal-title-vcenter">
              Patient's Profile
            </Modal.Title>
          </Modal.Header>
          <div className="patient__info">
            <Modal.Body style={{backgroundColor: '#424242', color:'white',textAlign:'center'}}>
              <img className="imag" src="https://avatars0.githubusercontent.com/u/62281618?s=460&u=4f420b0715e5446afeeb70f29047d25c0575ca30&v=4" alt="gg"/>
              <h5><strong>Name:</strong> Khushal Shinde</h5>
              <h6><strong>DOB:</strong> 14-08-2000</h6>
              <h6><strong>Gender:</strong> Male</h6>
              <h6><strong>Email:</strong> khushalthepane@gmail.com</h6>
              {user === "doctor" && <h6><strong>Doctor ID:</strong> 18102B0029</h6>}

            </Modal.Body>
          </div>
          <Modal.Footer style={{backgroundColor: '#424242', color:'white', display:'flex'}}>
              <Button variant="danger" onClick={props.onHide}><i><BlockIcon /></i> Close</Button>         
          </Modal.Footer>
        </Modal>
        </div>
      );
}

export default PatientProfile;
