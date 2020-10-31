import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import './Condition.css'

function Condition({condition, allergy, cIntensity, aIntensity}) {
    return (
        <div class="condition">
            <Card className="card3">
            <Card.Body>
            <ListGroup variant="flush">
            {condition && (
                   <ListGroup.Item style={{ marginBottom: '20px',borderBottom:'1px solid gray', paddingBottom: '25px', borderRadius: '8px'}}>
                            <Card className="card4" >
                                <Card.Body>                                   
                                    <Card.Title><strong>Condition:</strong> {condition}</Card.Title>
                                    <Card.Text><strong>Intensity: </strong> 
                                        {cIntensity}
                                    </Card.Text>
                                    <Card.Text><strong>Condition Report:</strong> <a href="#link_to_report">Click here to see report</a></Card.Text>
                                    
                                </Card.Body>
                            </Card>
                    </ListGroup.Item>
                        )}
                   

                   {allergy && (<ListGroup.Item style={{ paddingBottom:'25px',borderRadius:'8px'}}>
                            <Card className="card4">
                            
                            <Card.Body>
                                <Card.Title><strong>Allegry:</strong> {allergy}</Card.Title>
                                <Card.Text><strong>Intensity: </strong> 
                                    {aIntensity}
                                </Card.Text>
                                <Card.Text><strong>Allegry Report:</strong> <a href="">Click here to see report</a></Card.Text>
                            </Card.Body>
                            </Card>
                    </ListGroup.Item>) }

                </ListGroup>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Condition;
