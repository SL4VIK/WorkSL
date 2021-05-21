import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {useDispatch} from "react-redux";
import { Button } from 'react-bootstrap'
import {useTranslation} from 'react-i18next';



const CompanyrRow = (props) =>{
    const {t, i18n} = useTranslation();
    const dispatch = useDispatch();
    
    const [redirectEdit, setRedirectEdit] = useState(false);
    const Edit = () =>{
        const Company = {
            company_id: props.company.company_id,
            name: props.company.name,
            type: props.company.type,
            address: props.company.address, 

        }
        dispatch({type: 'COMPANYEDIT', payload: Company})
        setRedirectEdit(true);
    }
    const Delete = async() =>{
        const response = await fetch('http://127.0.0.1:8000/api/company', {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'},
            credentials: 'include',
            body: JSON.stringify({
                company_id: props.company.company_id
            }),
        });
        dispatch({type: 'COMPANYDEL', payload: props.company.company_id})
        }
    if(redirectEdit){
        return <Redirect to='/companyedit'/>
    }
    return(
        <tr>
        <th scope="row">{props.company.company_id}</th>
        <td>{props.company.name}</td>
        <td>{props.company.type}</td>
        <td>{props.company.address}</td>
        <td><Button variant="btn btn-warning" onClick = {Edit}>{t("edit")}</Button></td>
        <td><Button variant="btn btn-danger" onClick = {Delete}>{t("remove")}</Button></td>
        </tr>
        
    )
}

export default CompanyrRow;