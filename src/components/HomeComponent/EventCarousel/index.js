import React from 'react';
import {Carousel} from 'react-bootstrap';
import Event1 from './../../../assets/images/event1.jpg';
import Event2 from './../../../assets/images/event2.jpg';
import Event3 from './../../../assets/images/event3.jpg';
import './index.scss';

const eventList = [
    {img: Event1, heading: 'First event', subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'},
    {img: Event2, heading: 'Second event', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {img: Event3, heading: 'Third event', subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'},
]

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