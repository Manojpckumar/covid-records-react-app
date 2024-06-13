import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {Link} from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Covid - 19</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <Link className='nav-link' to="/india">India</Link>
                            <Link className='nav-link' to="/world">World</Link>
                           
                           
                        </Nav>
                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
