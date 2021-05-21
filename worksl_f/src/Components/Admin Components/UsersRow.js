import React, {useState} from 'react';
import UserEditing from '../UserEditind';
import {Redirect} from 'react-router-dom';
import {useDispatch} from "react-redux";
import { Button } from 'react-bootstrap'
import {useTranslation} from 'react-i18next';



const UserRow = (props) =>{
    const dispatch = useDispatch();
    const {t, i18n} = useTranslation();
    
    const [redirect, setRedirect] = useState(false);
    const Edit = () =>{
        const User = {
            id: props.users.id,
            first_name: props.users.first_name,
            last_name: props.users.last_name,
            email: props.users.email, 
            company_id: props.users.company_id
        }
        
        dispatch({type: 'USEREDIT', payload: User})
        setRedirect(true);
    }
    const Delete = async() =>{
        const response = await fetch('http://127.0.0.1:8000/api/userdelete', {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'},
            credentials: 'include',
            body: JSON.stringify({
                userID: props.users.id
            }),
        });
        dispatch({type: 'USERDEL', payload: props.users.id})
        }
    if(redirect){
        return <Redirect to='/useredit'/>
    }
    return(
        <tr>
        <th scope="row">{props.users.id}</th>
        <td>{props.users.first_name}</td>
        <td>{props.users.last_name}</td>
        <td>{props.users.email}</td>
        <td>{props.users.company_id}</td>
        <td><Button variant="btn btn-warning" onClick = {Edit}>{t("edit")}</Button></td>
        <td><Button variant="btn btn-danger" onClick = {Delete}>{t("remove")}</Button></td>
        </tr>
        
    )
}

export default UserRow;