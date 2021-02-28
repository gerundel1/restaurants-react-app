import React, {useState} from 'react';
import {Card} from 'react-bootstrap';
function About(props){
    return (
        <Card>
            <Card.Body>
                <Card.Title>About</Card.Title>
                <Card.Text>
                    All about me - a very perspective software developer.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default About;