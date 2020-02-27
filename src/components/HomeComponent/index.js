import React from 'react';
import {Container, Col, Row, Button, Card} from 'react-bootstrap';
import {EventCarousel} from './EventCarousel';
import Logo from './../../assets/images/ACM.png';
import Blog1 from './../../assets/images/game.jpeg';
import Blog2 from './../../assets/images/game-blog1.jpeg';
import './index.scss';

const BlogCard = props => {
    return (
        <Card>
            <Card.Img variant="top" src={Blog2} height={200}/>
            <Card.Body>
                <Card.Title>Intro to game development</Card.Title>
                <Card.Text>
                    <div className="blog-date">2018-07-21</div>
                    <div className="blog-text">
                    An overview of how game development works and various roles involved.
                    </div>
                    <div className="blog-author">
                        By Sachin Jain
                    </div>
                
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export const HomeComponent = (props) => {
    return (
        <React.Fragment >
            <Container className="landing-area px-2 px-md-5">
                <Row className="position-relative">
                    <i className="position-absolute scroll-icon text-muted text-center fa fa-angle-double-down"></i>
                    <Col xs={12} md={7} className="mb-3 text-center text-md-left px-4 px-md-1">
                        <div className="main-text">ACM IITR</div>
                        <div className="secondary-text">Association of Computing Machinery</div>
                        <div  className="secondary-text">IIT Roorkee</div>
                        <p>We are a bunch of enthusiatic students who aim at uniting the computing fraternity at IIT Roorkee under one tag and allows the students to learn together and share their knowledge to cater the interests of the individuals as well as the institute as a whole.</p>
                        <div>
                            <Button variant={"outline-primary"} className={"mr-2"}>About us</Button>
                            <Button variant={"outline-secondary"}>Know more</Button>
                        </div>
                    </Col>
                    <Col xs={12} md={5} className={"text-center mb-3 d-none d-md-block"}>
                    <img src={Logo} alt="logo" width={200} />
                    </Col>     
                </Row>
            </Container>
            <div className="gray-back pb-5">
                <Container>
                    <h3 className="pt-5 pb-3 d-flex justify-content-between">
                        <span>Events</span>
                        <Button className="car-button" variant={"outline-primary"} size="sm">Show more</Button>
                    </h3>
                    <EventCarousel />
                </Container>                
                
            </div>
            <Container className="pb-5">
                <h3 className="pt-5 pb-3 d-flex justify-content-between">
                    <span>Blogs</span>
                    <Button className="car-button" variant={"outline-secondary"} size="sm">Show more</Button>
                </h3>
                <Row>
                    <Col xs={12} sm={6} md={4} className="px-3">
                        <BlogCard />
                    </Col>
                    <Col xs={12} sm={6} md={4} className="px-3">
                        <BlogCard />
                    </Col>
                    <Col xs={12} sm={6} md={4} className="px-3">
                        <BlogCard />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}