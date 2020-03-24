import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import Logo from '../../logo.svg';
import './index.scss';

export const NavComponent = props => {
    return (
        <Navbar fixed={"top"} bg="light" variant={"light"} expand="lg" id={"acm-nav"} className={"px-5"}>
            <Navbar.Brand activeClassName={"active"} exact={true} as={NavLink} to="/">
            <img src={Logo} alt="logo" height={40}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={NavLink} activeClassName={"active"} exact to={""}>HOME</Nav.Link>
                    <Nav.Link as={NavLink} activeClassName={"active"} to={"about"}>ABOUT</Nav.Link>
                    <Nav.Link as={NavLink} activeClassName={"active"} to={"events"}>EVENTS</Nav.Link>
                    <Nav.Link as={NavLink} activeClassName={"active"} to={"blogs"}>BLOGS</Nav.Link>
                    <Nav.Link as={NavLink} activeClassName={"active"} to={"discussions"}>DISCUSSIONS</Nav.Link>
                    <Nav.Link as={NavLink} activeClassName={"active"} to={"team"}>TEAM</Nav.Link>
                </Nav>     
            </Navbar.Collapse>
        </Navbar>
    )
}