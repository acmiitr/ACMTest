import React from 'react';
import {Carousel} from 'react-bootstrap';
import {eventList} from './../../../assets/events';
import './index.scss';

export const EventCarousel = props => {
    return (
        <Carousel id="event-carousel">
            {
                eventList.map((obj, i) => {
                    return (
                        <Carousel.Item key={i}>
                            <div
                            className="d-block car-image"
                            style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${obj.img})`, height: '25rem'}}
                            alt="Third slide"
                            />
            
                            <Carousel.Caption>
                            <h3>{obj.heading}</h3>
                            <p>{obj.subtitle}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    )
}