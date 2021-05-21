import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import { Button } from 'react-bootstrap'




const SalaryRow = (props) =>{
    const dispatch = useDispatch();
    
    return(
        <tr>
        <th scope="row">{props.salary.salary_id}</th>
        <td>{props.salary.cost_ph}</td>
        <td>{props.salary.total_hours}</td>
        <td>{props.salary.salary}</td>
        <td>{props.salary.month_s}</td>
        <td>{props.salary.users_id}</td>
        </tr>
        
    )
}

export default SalaryRow;