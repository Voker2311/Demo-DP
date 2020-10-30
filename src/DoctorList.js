import React from 'react'
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DoctorList.css';

function DoctorList({image, name, treatment}) {
    return (
        <ListGroup>
            
            <ListGroup.Item>
            
            <Card style={{ width: '250px' }}>
            <Card.Img variant="top" className="doctor__image" src={image} />
            <Card.Body>
                <Card.Title><strong>Name: {name}</strong></Card.Title>
                <Card.Text>
                    <strong>Treated: </strong>{treatment}
                </Card.Text>
                
                <Button variant="primary"><Link style={{color: 'white', textDecoration: 'none'}}>View Profile</Link></Button>
            </Card.Body>
            </Card>
            </ListGroup.Item>

            <ListGroup.Item>
            
            <Card style={{ width: '250px' }}>
            <Card.Img variant="top" className="doctor__image" src={image} />
            <Card.Body>
                <Card.Title><strong>Name: {name}</strong></Card.Title>
                <Card.Text>
                    <strong>Treated: </strong>{treatment}
                </Card.Text>
                
                <Button variant="primary"><Link style={{color: 'white', textDecoration: 'none'}}>View Profile</Link></Button>
            </Card.Body>
            </Card>
            </ListGroup.Item>

            <ListGroup.Item>
            
            <Card style={{ width: '250px' }}>
            <Card.Img variant="top" className="doctor__image" src={image} />
            <Card.Body>
                <Card.Title><strong>Name: {name}</strong></Card.Title>
                <Card.Text>
                    <strong>Treated: </strong>{treatment}
                </Card.Text>
                
                <Button variant="primary"><Link style={{color: 'white', textDecoration: 'none'}}>View Profile</Link></Button>
            </Card.Body>
            </Card>
            </ListGroup.Item>

            <ListGroup.Item>
            
            <Card style={{ width: '250px' }}>
            <Card.Img variant="top" className="doctor__image" src={image} />
            <Card.Body>
                <Card.Title><strong>Name: {name}</strong></Card.Title>
                <Card.Text>
                    <strong>Treated: </strong>{treatment}
                </Card.Text>
                
                <Button variant="primary"><Link style={{color: 'white', textDecoration: 'none'}}>View Profile</Link></Button>
            </Card.Body>
            </Card>
            </ListGroup.Item>
        </ListGroup>
                
        
    )
}

export default DoctorList;
