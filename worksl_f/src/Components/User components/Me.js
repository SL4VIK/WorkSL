import React, {useEffect} from 'react';
import {  Card, Col, Form, Button } from 'react-bootstrap'
import './Me.css';
import {useSelector} from "react-redux";
import {useTranslation} from 'react-i18next';

function Me(){
    const {t, i18n} = useTranslation();
    const userInfo = useSelector(state => state.userLog.user);
        const MeEdit = async() =>{
            const first_name = document.getElementById("inputName").value;
            const last_name = document.getElementById("inputLastName").value;
            const email = document.getElementById("inputEmail").value;
            const company_id = document.getElementById("company_id").value;
            const response = await fetch('http://127.0.0.1:8000/api/update', {
                method: 'PUT',
                headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'},
                credentials: 'include',
                body: JSON.stringify({
                    first_name,
                    last_name,
                    email,
                    company_id
                }),
            });
            const content = await response.json();
            console.log(content);
        }
    return(
        <div className="App">
            <div id = "wrapper">
            <Card className="text-center" style={{ width: '72rem' }}>
            <Card.Header>{t("profile")}</Card.Header>
            <Card.Body>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>{t("namep")}</Form.Label>
                    <Form.Control type="text" placeholder="Name" id="inputName"  defaultValue={userInfo.first_name} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>{t("lastnamep")}</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" id="inputLastName" defaultValue={userInfo.last_name}/>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>{t("emailp")}</Form.Label>
                    <Form.Control placeholder="Email" id="inputEmail" defaultValue={userInfo.email}/>
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>{t("companyp")}</Form.Label>
                    <Form.Control placeholder="Company" id="company_id" defaultValue={userInfo.company_id}/>
                </Form.Group>

                <Button variant="primary" type="button" onClick = {MeEdit}>
                {t("okp")}
                </Button>
            </Form>
            </Card.Body>
            <Card.Footer className="text-muted">{t("profile")}</Card.Footer>
        </Card>
        </div>
        </div>
    )
}

export default Me;