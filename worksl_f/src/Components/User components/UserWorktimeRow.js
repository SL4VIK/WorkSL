import React, {useState} from 'react';
import UserEditing from '../UserEditind';
import {Redirect} from 'react-router-dom';
import {useDispatch} from "react-redux";
import { Button } from 'react-bootstrap'




const WorktimeuserRow = (props) =>{
    const dispatch = useDispatch();
    
    return(
        <tr>
        <th scope="row">{props.worktime.worktime_id}</th>
        <td>{props.worktime.date}</td>
        <td>{props.worktime.time}</td>
        <td>{props.worktime.rest}</td>
        <td>{props.worktime.users_id}</td>
        </tr>
        
    )
}

export default WorktimeuserRow;