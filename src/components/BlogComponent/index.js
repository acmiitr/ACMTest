import React from 'react';
import {Container, Card, Button, Row, Col} from 'react-bootstrap';
import {blogList} from './../../assets/blogs';
import './index.scss';

const BlogCard = props => {
    console.log(blogList);
    return (
        <Card className="blog-card">
            <Card.Img variant="top" src={props.blog.image}/>
            <Card.Body>
                <Card.Title>{props.blog.title}</Card.Title>
                <Card.Text>
                <div className="blog-date mb-2">{props.blog.date}</div>
                <div className="blog-text mb-2">{props.blog.text}</div>
                <div className="blog-author">By {props.blog.author}</div>
                </Card.Text>
                
            </Card.Body>
            <Button variant="primary">View on Medium</Button>
        </Card>
    )
}

export const BlogComponent = props => {
    return (
        <React.Fragment>
            <Container id="blog-container">
                <h3>Blogs</h3>
                <Row>
                    {
                        blogList.map((obj, i) => {
                            return (
                                <Col xs={12} sm={6} md={4} className={"px-4 py-2"}>
                                    <BlogCard blog={obj}/>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </React.Fragment>
        
    )
}