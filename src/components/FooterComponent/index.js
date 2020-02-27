import React from 'react';
import {Row, Button} from 'react-bootstrap';
import './index.scss';

export const FooterComponent = props => {
    return (
        <Row id="acm-footer" className="pt-3 pb-4 py-5">
            <div className="footer-nav d-flex justify-content-center w-100">
                <span>Home</span>
                <span>About</span>
                <span>Events</span>
                <span>Blogs</span>
                <span>Team</span>
            </div>
            <div className="social-icons d-flex justify-content-center w-100">
                <Button variant={"secondary"}>
                <i className="fa fa-facebook-square"></i>                    
                </Button>
                <Button variant={"secondary"}>
                <i className="fa fa-github-square"></i>
                </Button>
                <Button variant={"secondary"}>
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