import React from 'react'
import { Button, Card } from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import './SearchPatients.css'

function SearchPatients({name, image, patientId}) {
    return (
       <div>
       
            <Card className="cardi" style={{width: '50rem', backgroundColor: '#00b0ff'}}>
                <Card.Header>
                    <div className="inpu">
                    <input type="text" placeholder="Search Patient" />
                    <Button variant="danger"><SearchIcon /></Button>
                    </div>    
                </Card.Header>
            </Card>
        
     
        
                <Card className="gg" style={{width: '50rem', backgroundColor: 'white'}}>
                    <Card.Body style={{display:'flex', justifyContent:'space-between'}}>
                        <div style={{display: 'flex'}}>
                        <div className="ankit__image" style={{marginRight: '10px'}}>
                            <img src={image} style={{height: '60px', width: '60px', borderRadius: '50%'}} alt="Not Found"/>
                        </div>
                        <div className="ankit">
                            <Card.Title>Name: {name}</Card.Title>
                            <Card.Text>
                            Patient Id: {patientId}
                            </Card.Text>
                        </div>
                        
                        </div>
                   
                        <div>
                            <Button variant="warning" style={{padding: '5px', marginTop: '5px', borderRadius: '50%'}}><AddBoxOutlinedIcon fontSize="large"/></Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="gg" style={{width: '50rem', backgroundColor: 'white'}}>
                    <Card.Body style={{display:'flex', justifyContent:'flex-start'}}>
                    <div className="ankit__image" style={{marginRight: '10px'}}>
                            <img src={image} style={{height: '60px', width: '60px', borderRadius: '50%'}} alt="Not Found"/>
                        </div>
                        <div className="ankit">
                            <Card.Title>Name: {name}</Card.Title>
                            <Card.Text>
                            Patient Id: {patientId}
                            </Card.Text>
                        </div>
                        
                        
                    </Card.Body>
                </Card>
                <Card className="gg" style={{width: '50rem', backgroundColor: 'white'}}>
                    <Card.Body style={{display:'flex', justifyContent:'flex-start'}}>
                    <div className="ankit__image" style={{marginRight: '10px'}}>
                            <img src={image} style={{height: '60px', width: '60px', borderRadius: '50%'}} alt="Not Found"/>
                        </div>
                        <div className="ankit">
                            <Card.Title>Name: {name}</Card.Title>
                            <Card.Text>
                            Patient Id: {patientId}
                            </Card.Text>
                        </div>
                        
                        
                    </Card.Body>
                </Card>
                <Card className="gg" style={{width: '50rem', backgroundColor: 'white'}}>
                    <Card.Body style={{display:'flex', justifyContent:'flex-start'}}>
                    <div className="ankit__image" style={{marginRight: '10px'}}>
                            <img src={image} style={{height: '60px', width: '60px', borderRadius: '50%'}} alt="Not Found"/>
                        </div>
                        <div className="ankit">
                            <Card.Title>Name: {name}</Card.Title>
                            <Card.Text>
                            Patient Id: {patientId}
                            </Card.Text>
                        </div>
                        
                        
                    </Card.Body>
                </Card>
    </div>
  )  
}

export default SearchPatients;
