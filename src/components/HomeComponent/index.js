import React, { useState } from 'react';
import {Container, Col, Row, Button, Card} from 'react-bootstrap';
import {EventCards} from './EventCards';
import {NavLink} from 'react-router-dom';
// import Logo from './../../assets/images/ACM.png';
import Wave from './../../assets/images/wave.svg';
import Wave2 from './../../assets/images/wave_inverse.svg';
import Test from './../../assets/images/home-test.svg';
import {blogList} from './../../assets/blogs';
import './index.scss';

const BlogCard = props => {
    return (
        <Card className="mb-2 pointer hover-box">
            <Card.Img variant="top" src={props.blog.image} height={200}/>
            <Card.Body>
                <Card.Title>{props.blog.title}</Card.Title>
                <div className="blog-date">{props.blog.date}</div>
                {/* <div className="blog-text">
                An overview of how game development works and various roles involved.
                </div> */}
                <div className="blog-author text-muted">
                    By {props.blog.author}
                </div>
                
            </Card.Body>
        </Card>
    )
}



export const HomeComponent = (props) => {
    let events = '';

    const scrollDown = () => {
        events.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <React.Fragment >
            <div className="wave-bg" style={{backgroundImage: `url(${Wave})`}}>
                <Container className="landing-area px-2 px-md-5">
                <Row className="position-relative">
                    {/* <i className="position-absolute scroll-icon text-muted text-center fa fa-angle-double-down"></i> */}
                    <Col xs={12} md={7} className="mb-3 text-center text-md-left px-4 px-md-1">
                        <div className="main-text">ACM IITR</div>
                        <div className="secondary-text">Association of Computing Machinery</div>
                        <div  className="secondary-text">IIT Roorkee</div>
                        <p>We are a bunch of enthusiatic students who aim at uniting the computing fraternity at IIT Roorkee under one tag and allows the students to learn together and share their knowledge to cater the interests of the individuals as well as the institute as a whole.</p>
                        <div>
                            <Button className={"mr-2"} as={NavLink} variant={"outline-primary"} to={"/about"}>About us</Button>
                            <Button onClick={scrollDown} variant={"outline-secondary"}>Know more</Button>
                        </div>
                        <div className={"text-center mt-4 d-block d-md-none"}>
                            <img src={Test} alt="logo" width={250} />
                        </div>
                    </Col>
                    <Col xs={12} md={5} className={"text-center mb-3 d-none d-md-block"}>
                        <img src={Test} alt="logo" width={400} />
                    </Col>     
                </Row>
            </Container>
            </div>
            {/* <div className="gray-back pb-5 pt-5">
                <Container>
                    <Row>
                        <Col xs={12} md={3} className={"text-center mb-3"}>
                            <img src={Logo} alt="logo" width={150} />
                        </Col>
                        <Col xs={12} md={9} className="px-4 text-center">
                            <h4>What we do</h4>
                            <Row>
                                <Col xs={4} className="icon-div">
                                    <i class="fa fa-users"></i>
                                </Col>
                                <Col xs={4} className="icon-div">
                                <i class="fa fa-calendar-o" aria-hidden="true"></i>
                                </Col>
                                <Col xs={4} className="icon-div">
                                <i class="fa fa-wrench" aria-hidden="true"></i>
                                </Col>
                                
                            
                            </Row>
                        </Col>
                          
                    </Row>
                </Container>                
            </div> */}
            <div className="gray-back pb-5" ref={el => {events = el;}} >
                <Container>
                    <h3 className="pt-5 pb-3 d-flex justify-content-between">
                        <span>Events</span>
                        <Button as={NavLink} to={"/events"} className="car-button" variant={"outline-primary"} size="sm">Show All</Button>
                        
                    </h3>
                    <EventCards count={3} />
                </Container>                
                
            </div>
            <div className="image-bottom">
                <Container className="pb-5">
                    <h3 className="pt-5 pb-3 d-flex justify-content-between">
                        <span>Blogs</span>
                        <Button as={NavLink} to={"/blogs"} className="car-button" variant={"outline-secondary"} size="sm">Show more</Button>
                    </h3>
                    <Row>
                        {
                            blogList.slice(0, 3).map((obj, i) => {
                                return (
                                    <Col xs={12} sm={6} lg={4} className="px-3" key={i}>
                                        <BlogCard blog={obj} />
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}