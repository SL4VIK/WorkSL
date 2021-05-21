import React, {useState} from 'react';
import UserEditing from '../UserEditind';
import {Redirect} from 'react-router-dom';
import {useDispatch} from "react-redux";
import { Button } from 'react-bootstrap'
import {CompanyAdd} from './CompanyAdd';
import {useTranslation} from 'react-i18next';



const WorktimeRow = (props) =>{
    const dispatch = useDispatch();
    const {t, i18n} = useTranslation();
    
    const [redirectEdit, setRedirectEdit] = useState(false);
    const Edit = () =>{
        const Worktime = {
            worktime_id: props.worktime.worktime_id,
            date: props.worktime.date,
            time: props.worktime.time,
            rest: props.worktime.rest,
            users_id: props.worktime.users_id, 
        }
        dispatch({type: 'WORKTIMEEDIT', payload: Worktime})
        setRedirectEdit(true);
    }
    const Delete = async() =>{
        const response = await fetch('http://127.0.0.1:8000/api/worktime', {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'},
            credentials: 'include',
            body: JSON.stringify({
                worktime_id: props.worktime.worktime_id
            }),
        });
        dispatch({type: 'WORKTIMEDEL', payload: props.worktime.worktime_id})
        }
    if(redirectEdit){
        return <Redirect to='/worktimeedit'/>
    }
    return(
        <tr>
        <th scope="row">{props.worktime.worktime_id}</th>
        <td>{props.worktime.date}</td>
        <td>{props.worktime.time}</td>
        <td>{props.worktime.rest}</td>
        <td>{props.worktime.users_id}</td>
        <td><Button variant="btn btn-warning" onClick = {Edit}>{t("edit")}</Button></td>
        <td><Button variant="btn btn-danger" onClick = {Delete}>{t("remove")}</Button></td>
        </tr>
        
    )
}

export default WorktimeRow;