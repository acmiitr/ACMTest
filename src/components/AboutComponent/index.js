import React from 'react';
import {Col} from 'react-bootstrap';
import QR from './../../assets/images/qr_acm.svg';
import './index.scss';

export const AboutComponent = (props) => {
    return (
        <React.Fragment >
            <div className="hero-area px-2 px-md-5">
                <div class="text-content px-md-5">
                    <Col xs={12} className="emoji mb-3">
                        {/* &lt;(￣︶￣)&gt; */}
                        :)
                    </Col>
                    <Col md={7} className="intro-text mb-3">
                    We aim at uniting the computing fraternity at IIT Roorkee under one tag and allowing the students to learn together and share their knowledge to cater the interests of the individuals as well as the institute as a whole.
                    We organize a plethora of events which cover most of the fields of the computer science domain like hackathons, guest lectures, workshops, coding contests etc. which give the students an exposure to the competitive computing world as well as allow them to understand the advancements going on in the computing sphere worldwide. 
                    </Col>
                    <Col xs={12} className="mb-3"></Col>
                    <Col className="bsod-qr d-flex flex-row">
                        <img src={QR} alt="Scan to go to fb page" height={70}/>
                        <div className="px-3 qr-text d-flex flex-column justify-content-between">
                            <span>For more updates you can scan the given QR code.</span>
                            <span>Or you can click on the link below<br/><a href="https://www.facebook.com/acmiitr" target="blank">https://www.facebook.com/acmiitr</a></span>
                        </div>
                    </Col>
                </div>
                
            
            </div>
        </React.Fragment>
    )
}