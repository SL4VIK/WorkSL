import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {useDispatch} from "react-redux";
import { Button } from 'react-bootstrap'
import {useTranslation} from 'react-i18next';




const SalaryRow = (props) =>{
    const dispatch = useDispatch();
    const {t, i18n} = useTranslation();
    
    const [redirectEdit, setRedirectEdit] = useState(false);
    const Edit = () =>{
        const Salary = {
            salary_id: props.salary.salary_id,
            cost_ph: props.salary.cost_ph,
            total_hours: props.salary.total_hours,
            salary: props.salary.salary, 
            month_s: props.salary.month_s,
            users_id: props.salary.users_id,

        }
        dispatch({type: 'SALARYEDIT', payload: Salary})
        setRedirectEdit(true);
    }
    const Delete = async() =>{
        const response = await fetch('http://127.0.0.1:8000/api/salary', {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'},
            credentials: 'include',
            body: JSON.stringify({
                salary_id: props.salary.salary_id
            }),
        });
        dispatch({type: 'SALARYDEL', payload: props.salary.salary_id})
        }
    if(redirectEdit){
        return <Redirect to='/salaryedit'/>
    }
    return(
        <tr>
        <th scope="row">{props.salary.salary_id}</th>
        <td>{props.salary.cost_ph}</td>
        <td>{props.salary.total_hours}</td>
        <td>{props.salary.salary}</td>
        <td>{props.salary.month_s}</td>
        <td>{props.salary.users_id}</td>
        <td><Button variant="btn btn-warning" onClick = {Edit}>{t("edit")}</Button></td>
        <td><Button variant="btn btn-danger" onClick = {Delete}>{t("remove")}</Button></td>
        </tr>
        
    )
}

export default SalaryRow;