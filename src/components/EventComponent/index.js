import React from 'react';
import {Container} from 'react-bootstrap';
import {EventCards} from './../HomeComponent/EventCards';
import './index.scss';

export const EventComponent = props => {
    return (
        <React.Fragment>
            <Container id="event-container">
                <h3>Events</h3>
                <EventCards count={100} />
            </Container>
        </React.Fragment>
        
    )
}