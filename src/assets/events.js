import React from 'react';
import Event1 from './images/event1.jpg';
import Event2 from './images/event2.jpg';
import Event3 from './images/event3.jpg';
import Event4 from './images/event4.jpg';
import Event5 from './images/event5.jpg';
import Event6 from './images/event6.jpg';
import Event7 from './images/event7.jpg';
import Event8 from './images/event8.jpg';
import Event9 from './images/event9.jpg';
import Event10 from './images/event10.jpg';

export const eventList = [
    {
        img: Event1, 
        heading: 'Semantic understanding of user queries', 
        subtitle: <React.Fragment>
                <p>
                {`Eminent Speaker Program talk by Manoj Agarwal, Principal Applied Scientist at the AI & Research team in Microsoft India`}
                </p>
                <p className="font-weight-bold">
                    "How knowledge graphs and Deep learning techniques are helping!"
                </p>
            </React.Fragment>,
        date: "Aug 2018"
    },
    {
        img: Event3, 
        heading: 'Microsoft talk', 
        subtitle: 'Microsoft talk held before the Microsoft Code.Fun.Do hackathon.'
    },
    {
        img: Event4,
        heading: 'Major League Hacking - Local Hack Day',
        subtitle: <React.Fragment>
            <ul>
                <li>Learn C# with Unity</li>
                <li>Intro to Python Skills for AI</li>
                <li>IBM Z workshop</li>
                <li>Hacking with Amazon Alexa</li>
            </ul>
        </React.Fragment>,
        date: '12/10/2019'
    },
    {
        img: Event5,
        heading: 'Workshop on Introduction to Quantum Computing',
        subtitle: <React.Fragment>
            
        </React.Fragment>,
        date: '19/02/2020'
    },
    {
        img: Event6,
        heading: 'Socket Programming workshop',
        subtitle: <React.Fragment>
            <p className="font-weight-bold font-weight-italic">"Build your own Client-Server Chatroom"</p>
        </React.Fragment>,
        date: '14/02/2020'
    },
    {
        img: Event7,
        heading: 'Workshop on Neural Style Transfer',
        subtitle: <React.Fragment>
            <p></p>
        </React.Fragment>,
        date: '28/01/2020'
    },
    {
        img: Event8,
        heading: 'Intro talk',
        subtitle: <React.Fragment>
            <p></p>
        </React.Fragment>,
        date: '26/08/2019'
    },
    {
        img: Event9,
        heading: 'Intro to CS + Recruitment talk ',
        subtitle: <React.Fragment>
            <p>

            </p>
        </React.Fragment>,
        date: '13/02/2020'
    },
    {
        img: Event10,
        heading: 'VLG Discussions on Basics and Advancements in Deep Learning',
        subtitle: <React.Fragment>
            <p>

            </p>
        </React.Fragment>,
        date: 'Weekly'
    },
]