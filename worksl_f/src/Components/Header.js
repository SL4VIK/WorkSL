import React, { Component } from 'react'
import {  Nav, Navbar, Container, Form, Button } from 'react-bootstrap'
import worksl from './logo240.png'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contacts from '../Pages/Contacts'
import Login from './Login'
import Register from './Register'

export default class Header extends Component {
    render() {
        return (
            <>
            <Router>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                        src={worksl}
                        height="30"
                        width="30"
                        className="d-inline-block align-top"
                        alt="Worksl"
                        />
                    </Navbar.Brand>
                    <NavbarToggle aria-controls="responsive-navbar-nav"/>
                    <NavbarCollapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/" > Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" > About</Nav.Link>
                            <Nav.Link as={Link} to="/contacts" > Contacts</Nav.Link>
                        </Nav>
                        <Form inline>
                            <Button variant="outline-info" id='login'as={Link} to="/login">Login</Button>
                            <Button variant="outline-info" id='register'as={Link} to="/register">Register</Button>
                        </Form>
                    </NavbarCollapse>
                </Container>
            </Navbar>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/About" component={About} />
                    <Route exact path="/Contacts" component={Contacts} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/Register" component={Register} />
                </Switch>
             </Router>
            </>
        ) 
    }
}
