import React from 'react';
import './Layout.css';
import { Route } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Home from '../Components/Home/Home'
import AboutUs from '../Components/About Us/AboutUs';

const Layout = () => {
    return (
        <div>
            <Navbar collapseOnSelect className="fnt" expand="lg" bg="dark" variant="dark" fixed>
                <Navbar.Brand className="Brnd" href="#home">Caristic</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Aboutus">About Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Route path="/Aboutus" component = {AboutUs} />
            <Route path="/" exact component = {Home} />
        </div >
    );
}
export default Layout;