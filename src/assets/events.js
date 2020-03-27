import React from 'react';
import Event1H from './images/events/event1-home.jpg';
import Event1 from './images/events/event1.jpg';
import Event3 from './images/events/event3.jpg';
import Event3H from './images/events/event3-home.jpg';
import Event4 from './images/events/event4.jpg';
import Event4H from './images/events/event4-home.jpg';
import Event5 from './images/events/event5.jpg';
import Event6 from './images/events/event6.jpg';
import Event7 from './images/events/event7.jpg';
import Event8 from './images/events/event8.jpg';
import Event9 from './images/events/event9.jpg';
import Event11 from './images/events/event11.jpg';
import Event12 from './images/events/event12.jpg';

export const homeEventList = [
    {
        img: Event1H, 
        heading: 'ESP - Semantic Understanding of User Queries', 
        subtitle: <React.Fragment>
                <p>
                {`Eminent Speaker Program (ESP) talk by Manoj Agarwal, Principal Applied Scientist at the AI & Research team in Microsoft India.`}
                </p>
                <p className="font-weight-bold">
                    "How knowledge graphs and Deep learning techniques are helping!"
                </p>
            </React.Fragment>,
        date: "August 2018"
    },
    {
        img: Event3H, 
        heading: 'Talk - Microsoft Code.Fun.Do (CFD)', 
        subtitle: <React.Fragment>
                    <p>
                        Bootcamp organized before the Microsoft Code.Fun.Do hackathon.
                    </p>
                    <p>
                        Primary goal was to make students aware of various Microsoft Azure Technologies and software applications.
                    </p>
                </React.Fragment>,
                date: "October 27, 2018"
    },
    {
        img: Event4H,
        heading: 'Hackathon - Major League Hacking: Local Hack Day',
        subtitle: <React.Fragment>
            <ul>
                <li>Learn C# with Unity</li>
                <li>Intro to Python Skills for AI</li>
                <li>IBM Z workshop</li>
                <li>Hacking with Amazon Alexa</li>
            </ul>
        </React.Fragment>,
        date: 'October 12, 2019'
    }
];

export const eventList = [
    {
        year: 2020,
        events: [
            {
                img: Event11,
                heading: 'Workshop - File Systems (FAT12)',
                subtitle: <React.Fragment>
                    <p>
                    Gave an introduction to operating systems, followed by an explanation of the FAT12 file system in detail and studying the hex file of a filesystem.
                    </p>
                </React.Fragment>,
                date: '20',
                month: 'FEB'
            },
            {
                img: Event5,
                heading: 'Workshop - Introduction to Quantum Computing',
                subtitle: <React.Fragment>
                    <p>
                    Covered the basics of qubits and some of the basic circuits of Quantum Computing along with hands-on experience with IBM Quantum Computing Experience. 
                    </p>
                </React.Fragment>,
                date: '19',
                month: 'FEB'
            },
            {
                img: Event6,
                heading: 'Workshop - Socket Programming',
                subtitle: <React.Fragment>
                    <p className="font-weight-bold font-weight-italic">"Build your own Client-Server Chatroom"</p>
                    <p>Covered basics of socket programming in C++ and made a single-threaded client-server chat application using TCP protocol.</p>
                </React.Fragment>,
                date: '14',
                month: 'FEB'
            },
            {
                img: Event9,
                heading: 'Talk - Intro to CS & ACM Recruitments',
                subtitle: <React.Fragment>
                    <p>
                    Presented some of the fascinating applications of different fields of Computer Science. Also talked about our recruitment process and the things we desire from people who wish to join our core team.
                    </p>
                </React.Fragment>,
                date: '13',
                month: 'FEB'
            },
            {
                img: Event7,
                heading: 'Workshop - Neural Style Transfer',
                subtitle: <React.Fragment>
                    <p>
                    Covered the basics of Convolutional Neural Networks, Gram Matrices, and the concept of Neural Style Transfer along with live coding session on google colab.
                    </p>
                </React.Fragment>,
                date: '28',
                month: 'JAN'
            },
            {
                img: Event12,
                heading: 'Talk - VLG Recruitments',
                subtitle: <React.Fragment>
                    Gave a brief introduction to Vision and Language Group (VLG) and it’s activities. Covered topics about how the core team of group functions and what benefits one can get on joining the core team.
                </React.Fragment>,
                date: '23',
                month: 'JAN'
            }          
        ]
    },
    {
        year: 2019,
        events: [
            {
                img: Event4,
                heading: 'Hackathon - Major League Hacking: Local Hack Day',
                subtitle: <React.Fragment>
                    <div>Learn C# with Unity</div>
                    <div>Intro to Python Skills for AI</div>
                    <div>IBM Z workshop</div>
                    <p>Hacking with Amazon Alexa</p>
                </React.Fragment>,
                date: '12',
                month: 'OCT'
            },
            {
                img: Event8,
                heading: 'Talk - Introduction to ACM',
                subtitle: <React.Fragment>
                    <p>
                    Talk to introduce the IITR students to our group and to ACM as a global organization. We also cleared some misconceptions about our group and displayed our alumni relations. 
                    </p>
                </React.Fragment>,
                date: '26',
                month: 'AUG'
            }            
        ]
    },
    {
        year: 2018,
        events: [
            {
                img: Event3, 
                heading: 'Talk - Microsoft Code.Fun.Do (CFD)', 
                subtitle: <React.Fragment>
                    <p>
                        Bootcamp organized before the Microsoft Code.Fun.Do hackathon.
                    </p>
                    <p>
                        Primary goal was to make students aware of various Microsoft Azure Technologies and software applications.
                    </p>
                </React.Fragment>,
                date: "27",
                month: 'OCT',
            },
            {
                img: Event1, 
                heading: 'ESP - Semantic Understanding of User Queries', 
                subtitle: <React.Fragment>
                        <p>
                        {`Eminent Speaker Program (ESP) talk by Manoj Agarwal, Principal Applied Scientist at the AI & Research team in Microsoft India.`}
                        </p>
                        <p className="font-weight-bold">
                            "How knowledge graphs and Deep learning techniques are helping!"
                        </p>
                    </React.Fragment>,
                date: '7',
                month: "AUG"
            },
            
        ]
    },
    
    
]