import React, {Component, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Company_Admin from '../Components/Company_Admin';
import {  Nav, Navbar, Container, Form, Button } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contacts from '../Pages/Contacts'
import Admin from '../Components/Admin';
import User from '../Components/User';
import UserTable from '../Components/Admin Components/Usertable';
import CompaniesTable from '../Components/Admin Components/Companiestable';
import Worktimetable from '../Components/Admin Components/Worktimetable';
import UserWorktimetable from '../Components/User components/UserWorktimetable';
import SalaryTable from '../Components/Admin Components/Salarytable';
import SalaryEditind from '../Components/SalaryEditing';
import SalaryAdd from '../Components/Admin Components/SalaryAdd';
import UserSalarytable from '../Components/User components/UserSalarytable';
import UserEditind from '../Components/UserEditind';
import WorktimeEditing from '../Components/WorktimeEditing';
import CompanyEditind from '../Components/CompanyEditing';
import CompanyAdd from '../Components/Admin Components/CompanyAdd'
import me from '../Components/User components/Me';
import {useTranslation} from 'react-i18next';


const Cabinet= () => {
    const {t, i18n} = useTranslation();
    let user = useSelector(state => state.userLog)
    let role = user.user.role_id;
    const dispatch = useDispatch();
    useEffect(() => {
        Users();
        Company();
        Worktime();
        Salary();
        Worktimeuser();
        SalaryUser();
    }
    ) 
     const Users = async()=> {
        const response = await fetch('http://127.0.0.1:8000/api/users', {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'},
            credentials: 'include',
        });
        const content = await response.json();
        if(response.status === 200){
          dispatch({type: 'GETUSERS', payload: content})}   
}
const Company = async()=> {
    const response = await fetch('http://127.0.0.1:8000/api/companies', {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'},
        credentials: 'include',
    });
    const content = await response.json();
    if(response.status === 200){
      dispatch({type: 'GETCOMPANY', payload: content})}   
}
const Worktime = async()=> {
    const response = await fetch('http://127.0.0.1:8000/api/worktime', {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'},
        credentials: 'include',
    });
    const content = await response.json();
    if(response.status === 200){
      dispatch({type: 'GETWORKTIME', payload: content})}   
}
const Worktimeuser = async()=> {
    const response = await fetch('http://127.0.0.1:8000/api/worktimeuser', {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'},
        credentials: 'include',
    });
    const content = await response.json();
    if(response.status === 200){
      dispatch({type: 'GETWT', payload: content})}   
}
const Salary = async()=> {
    const response = await fetch('http://127.0.0.1:8000/api/salary', {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'},
        credentials: 'include',
    });
    const content = await response.json();
    if(response.status === 200){
      dispatch({type: 'GETSALARY', payload: content})}   
}
const SalaryUser = async()=> {
    const response = await fetch('http://127.0.0.1:8000/api/salaryuser', {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'},
        credentials: 'include',
    });
    const content = await response.json();
    if(response.status === 200){
      dispatch({type: 'GETSALARYUSER', payload: content})}   
}
    return(
        <div className="App">
            {/* Cabinet  */}
            <>
            <Router>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                        src='https://cdn.discordapp.com/attachments/474296367267840002/831524496614752266/cabinet.png'
                        height="30"
                        width="30"
                        className="d-inline-block align-top"
                        alt=""
                        />
                        {
                            role === 1 ? <nobr>{t("user.cabinet")}</nobr> : 
                            role === 2 ? <nobr>{t("admin.cabinet")}</nobr> : 
                            role === 3 ? <nobr>{t("companyadmin.cabinet")}</nobr> : false
                        }
                    </Navbar.Brand>
                    <NavbarToggle aria-controls="responsive-navbar-nav"/>
                    <NavbarCollapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {
                                role === 1 ? <div>
                                    <Button variant="outline-primary" as={Link} to="/me" >{t("user.me.table")}</Button>
                                    <Button variant="outline-secondary" as={Link} to="/worktimetableuser" >{t("user.worktime.table")}</Button>
                                    <Button variant="outline-secondary" as={Link} to="/salarytableuser" >{t("user.salary.table")}</Button>

                                </div> : 
                                role === 2 ? <div>
                                    <Button variant="outline-secondary" as={Link} to="/usertable" >{t("admin.user.table")}</Button>
                                    <Button variant="outline-secondary" as={Link} to="/companiestable" >{t("admin.company.table")}</Button>
                                    <Button variant="outline-secondary" as={Link} to="/worktimetable" >{t("admin.worktime.table")}</Button>
                                    <Button variant="outline-secondary" as={Link} to="/salarytable" >{t("admin.salary.table")}</Button>
                                </div> : 
                                role === 3 ? <div>
                                    <Button variant="outline-secondary" as={Link} to="/" >Company Admin</Button>
                                    <Button variant="outline-secondary" as={Link} to="/about" > Company Admin1</Button>
                                    <Button variant="outline-secondary" as={Link} to="/contacts" > Company Admin2</Button>
                                </div> : false
                            }
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/About" component={About} />
                    <Route exact path="/me" component={me} />
                    <Route exact path="/contacts" component={Contacts} />
                    <Route exact path="/usertable" component={UserTable} />
                    <Route exact path="/companiestable" component={CompaniesTable} />
                    <Route exact path="/worktimetable" component={Worktimetable} />
                    <Route exact path="/useredit" component={UserEditind} />
                    <Route exact path="/companyedit" component={CompanyEditind} />
                    <Route exact path="/companysave" component={CompanyAdd} />
                    <Route exact path="/worktimeedit" component={WorktimeEditing} />
                    <Route exact path="/salarytable" component={SalaryTable} />
                    <Route exact path="/salaryedit" component={SalaryEditind} />
                    <Route exact path="/salarysave" component={SalaryAdd} />
                    <Route exact path="/worktimetableuser" component={UserWorktimetable} />
                    <Route exact path="/salarytableuser" component={UserSalarytable} />
                </Switch>
             </Router>
            </>
            {
                role === 1 ? <User /> : 
                role === 2 ? <Admin /> : 
                role === 3 ? <Company_Admin /> : false
            }
        </div>
        
    )
}

export default Cabinet;