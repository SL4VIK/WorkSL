import React, { Component } from 'react'
import {  Nav, Navbar, Container, Form, Button } from 'react-bootstrap'
import worksl from './logo240.png'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import Home from '../Pages/Home'
import Contacts from '../Pages/Contacts'
import Login from './Login'
import Register from './Register'
import Cabinet from '../Pages/Cabinet'
import i18n from '../language/i18n';
import {useTranslation} from 'react-i18next';

 const changeLanguage =(ln) =>{
    return () =>{
        i18n.changeLanguage(ln);
    };
 };
 const Header =() => {
    const {t, i18n} = useTranslation();
    const user = useSelector(state => state.userLog);
    const dispatch = useDispatch();

    const Logout = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', },

        });
        const content = await response.json();
        console.log(content);
        dispatch({type: 'LOGOUT'})
    }
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
                        alt=""
                        />
                        WorkSl
                    </Navbar.Brand>
                    <NavbarToggle aria-controls="responsive-navbar-nav"/>
                    <NavbarCollapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/" > {t("home")}</Nav.Link>
                            {/* <Nav.Link as={Link} to="/contacts" > {t("contacts")}</Nav.Link> */}
                            <div class="btn-group" data-toggle="buttons-checkbox"> <button type="button" class="btn btn-secondary" onClick ={changeLanguage("en")}>{t("en")}</button><button type="button" class="btn btn-secondary" onClick ={changeLanguage("ua")}>{t("ua")}</button> </div>
                        </Nav>
                        <Form inline>
                            {
                                  user.isLoggedIn 
                                  ? 
                                  <div>
                                  <Button variant="outline-info" id='cabinet'as={Link} to="/Cabinet">{t("cabinet")}</Button>
                                  <Button variant="outline-info" id='logout'as={Link} onClick = {Logout}>{t("logout")}</Button>
                                  </div>
                                  : 
                                  <div>
                                    <Button variant="outline-info" id='login'as={Link} to="/login">{t("login")}</Button>
                                    <Button variant="outline-info" id='register'as={Link} to="/register">{t("register")}</Button>
                                 </div>

                            }
                        </Form>
                    </NavbarCollapse>
                </Container>
            </Navbar>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Contacts" component={Contacts} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/Register" component={Register} />
                    <Route exact path="/Cabinet" component={Cabinet} />
                </Switch>
             </Router>
            </>
        ) 
    }
export default Header;
