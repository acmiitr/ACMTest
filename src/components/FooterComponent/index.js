import React from 'react';
import {Row, Button, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import './index.scss';


export const FooterComponent = props => {
    return (
        <Row id="acm-footer" className="pt-3 pb-4 py-5">
            <div className="footer-nav d-flex justify-content-center w-100">
                <Nav.Link as={NavLink} exact to={''} className={"pointer"}>Home</Nav.Link>
                <Nav.Link as={NavLink} exact to={'about'} className={"pointer"}>About</Nav.Link>
                {/* <Nav.Link as={NavLink} exact to={'events'} className={"pointer"}>Events</Nav.Link> */}
                <Nav.Link as={NavLink} exact to={'blogs'} className={"pointer"}>Blogs</Nav.Link>
                <Nav.Link as={NavLink} exact to={'gallery'} className={"pointer"}>Gallery</Nav.Link>
                <Nav.Link as={NavLink} exact to={'team'} className={"pointer"}>Team</Nav.Link>
            </div>
            <div className="social-icons d-flex justify-content-center w-100">
                <Button variant={"secondary"} href={"https://www.facebook.com/acmiitr/"} target="blank">
                <i className="fa fa-facebook-square"></i>                    
                </Button>
                <Button variant={"secondary"} href={"https://github.com/acmiitr/"} target="blank">
                <i className="fa fa-github-square"></i>
                </Button>
                <Button variant={"secondary"} href={"https://medium.com/@deepanshnagaria"} target="blank">
                <i className="fa fa-medium"></i>
                </Button>
            </div>
            <div style={{margin: 'auto'}} className="text-center w-75 d-block d-md-none  text-center">
                IIT Roorkee ACM Student Chapter is an official student body incepted in 2014 under the CSE dept, IIT Roorkee.
            </div>
            <div style={{margin: 'auto'}} className="text-center w-50 d-none d-md-block text-center">
            The IIT Roorkee ACM Student Chapter is an official student body incepted in 2014 under the aegis of Department of Computer Science and Engineering, IIT Roorkee.
            </div>
            
        </Row>
    )
}