import React from 'react'
import { Button, Card, CardColumns, CardGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DoctorList.css';
import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:9000/api',
});

const fetchData = api.get("/");


function DoctorList({image, name, treatment}) {

    console.log(fetchData);
    return (
        <ListGroup> 
            <ListGroup.Item>
                <CardColumns>
                    <Card style={{ width: '285px'}}>
                        <Card.Img variant="top" className="doctor__image" src={image} />
                        <Card.Body>
                        <Card.Title><strong>Name: {name}</strong></Card.Title>
                        <Card.Text>
                            <strong>Treated: </strong>{treatment}
                        </Card.Text>
                        <Button variant="info"><Link style={{color: 'white', textDecoration: 'none'}}>View Profile</Link></Button>
                        </Card.Body>
                    </Card>
                    
                    <Card style={{ width: '285px' }}>
                        <Card.Img variant="top" className="doctor__image" src={image} />
                        <Card.Body>
                        <Card.Title><strong>Name: {name}</strong></Card.Title>
                        <Card.Text>
                            <strong>Treated: </strong>{treatment}
                        </Card.Text>
                        
                        <Button variant="info"><Link style={{color: 'white', textDecoration: 'none'}}>View Profile</Link></Button>
                        </Card.Body>
                    </Card>
            
                    <Card style={{ width: '285px' }}>
                        <Card.Img variant="top" className="doctor__image" src={image} />
                        <Card.Body>
                        <Card.Title><strong>Name: {name}</strong></Card.Title>
                        <Card.Text>
                            <strong>Treated: </strong>{treatment}
                        </Card.Text>
                        
                        <Button variant="info"><Link style={{color: 'white', textDecoration: 'none'}}>View Profile</Link></Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '285px' }}>
                        <Card.Img variant="top" className="doctor__image" src={image} />
                        <Card.Body>
                        <Card.Title><strong>Name: {name}</strong></Card.Title>
                        <Card.Text>
                            <strong>Treated: </strong>{treatment}
                        </Card.Text>
                        
                        <Button variant="info"><Link style={{color: 'white', textDecoration: 'none'}}>View Profile</Link></Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '285px' }}>
                        <Card.Img variant="top" className="doctor__image" src={image} />
                        <Card.Body>
                        <Card.Title><strong>Name: {name}</strong></Card.Title>
                        <Card.Text>
                            <strong>Treated: </strong>{treatment}
                        </Card.Text>
                        
                        <Button variant="info"><Link style={{color: 'white', textDecoration: 'none'}}>View Profile</Link></Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '285px' }}>
                        <Card.Img variant="top" className="doctor__image" src={image} />
                        <Card.Body>
                        <Card.Title><strong>Name: {name}</strong></Card.Title>
                        <Card.Text>
                            <strong>Treated: </strong>{treatment}
                        </Card.Text>
                        
                        <Button variant="info"><Link style={{color: 'white', textDecoration: 'none'}}>View Profile</Link></Button>
                        </Card.Body>
                    </Card>
                </CardColumns>

                </ListGroup.Item>
            </ListGroup>
            
    )
}

export default DoctorList;
