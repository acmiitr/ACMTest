import React from 'react';
import {Container, Col, Row, Button, Card} from 'react-bootstrap';
import {EventCarousel} from './EventCarousel';
import {NavLink} from 'react-router-dom';
import Logo from './../../assets/images/ACM.png';
import {blogList} from './../../assets/blogs';
import './index.scss';

const BlogCard = props => {
    return (
        <Card className="mb-2 pointer">
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
        console.log(events);
        events.scrollIntoView({ behavior: "smooth" });
    }

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
                            <Button as={NavLink} to={"/about"} variant={"outline-primary"} className={"mr-2"}>About us</Button>
                            <Button onClick={scrollDown} variant={"outline-secondary"}>Know more</Button>
                        </div>
                    </Col>
                    <Col xs={12} md={5} className={"text-center mb-3 d-none d-md-block"}>
                    <img src={Logo} alt="logo" width={200} />
                    </Col>     
                </Row>
            </Container>
            <div className="gray-back pb-5" ref={el => {events = el;}}>
                <Container>
                    <h3 className="pt-5 pb-3 d-flex justify-content-between">
                        <span>Events</span>
                        <Button as={NavLink} to={"/event"} className="car-button" variant={"outline-primary"} size="sm">Show more</Button>
                    </h3>
                    <EventCarousel />
                </Container>                
                
            </div>
            <Container className="pb-5">
                <h3 className="pt-5 pb-3 d-flex justify-content-between">
                    <span>Blogs</span>
                    <Button as={NavLink} to={"/blogs"} className="car-button" variant={"outline-secondary"} size="sm">Show more</Button>
                </h3>
                <Row>
                    {
                        blogList.slice(0, 3).map((obj, i) => {
                            return (
                                <Col xs={12} sm={6} md={4} className="px-3" key={i}>
                                    <BlogCard blog={obj} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </React.Fragment>
    )
}