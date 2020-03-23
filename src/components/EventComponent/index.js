import React, {useState} from 'react';
import {Button, Row, Col} from 'react-bootstrap';
import {eventList} from './../../assets/events';
import './index.scss';

const TimeLine = props => {
    console.log(eventList);
    return (
        <React.Fragment>
            <div className="page">
                <div className="timeline">
                    {
                        eventList.map((year, i) => {
                            return (
                                <div className={"timeline__group"} key={i}>
                                    <span className="timeline__year">{year.year}</span>
                                    {
                                        year.events.map((event, j) => {
                                            return (
                                                <div onClick={()=>{props.setEvent(event)}} key={j} className="timeline__box pointer">
                                                    <div className="timeline__date">
                                                    <span className="timeline__day">{event.date}</span>
                                                    <span className="timeline__month">{event.month}</span>
                                                    </div>
                                                    <div className="timeline__post">
                                                    <div className="timeline__content">
                                                        {event.heading}
                                                    </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

const monthMap = {
    'JAN': 'January',
    'FEB': 'February',
    'MAR': 'March',
    'APR': 'April',
    'MAY': 'May',
    'JUN': 'June',
    'JUL': 'July',
    'AUG': 'August',
    'SEP': 'September',
    'OCT': 'October',
    'NOV': 'November',
    'DEC': 'December'
}

const getWhen = (event) => {
    const year = eventList.find(year => {
        return year.events.find(ev => ev===event)
    });
    return `${monthMap[event.month]} ${event.date}, ${year.year}`;
}

export const EventComponent = props => {


    const [event, setEvent] = useState(eventList[0]['events'][0]);

    return (
        <React.Fragment>
            <div id="event-container" className="px-5">
                <Row className="full-height">
                    <Col id="event-details" className="full-height bg-image py-5 pr-4" style={{backgroundImage: `linear-gradient(to left, rgba(28, 46, 76, 0.9), rgba(33, 147, 176, 0.6)),url(${event.img})`}}>
                        <h4 className="pb-4">{event.heading}</h4>
                        {event.subtitle}
                        <small>{getWhen(event)}</small>
                    </Col>
                    <Col className="full-height py-2 position-relative">
                        <div className="position-absolute floating-text px-4 py-3" style={{right: 0, top: 0, zIndex: 100}}>
                            <div>
                                Past Events
                            </div>
                            <div className="small-div">Click event for more details</div>
                        </div>
                        <div className="full-height timeline-container">
                            <TimeLine setEvent={setEvent} />
                        </div>
                    
                    </Col>
                </Row>
                {/* <h3>Events</h3> */}
                {/* <EventCards count={100} /> */}
                
            </div>
        </React.Fragment>
        
    )
}