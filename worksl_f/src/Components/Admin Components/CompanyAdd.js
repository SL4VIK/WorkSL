import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {Redirect} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {useTranslation} from 'react-i18next';

const CompanySave = () => {
    const [redirect, setRedirect] = useState(false);
    const {t, i18n} = useTranslation();
    const dispatch = useDispatch();
    const CompanyAdd = async() =>{
        const name = document.getElementById("inputName").value;
        const type = document.getElementById("inputType").value;
        const address = document.getElementById("inputAddress").value;

        const response = await fetch('http://127.0.0.1:8000/api/company', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'},
            credentials: 'include',
            body: JSON.stringify({
                name,
                type,
                address,
            }),
        });
        Company();
        setRedirect(true);
        const content = await response.json();
        console.log(content);
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
    const companyedit = useSelector(state => state.company.companyedit);
    if(redirect){
        return <Redirect to='/companiestable'/>
    }
    return (
        <div>
                <div className='App'>
                <main className="form-signin">
                        <h1 className="h3 mb-3 fw-normal">{t("addnew")}</h1>
                        <label for="inputName" class="visually-hidden">Name</label>
                        <input type="setFirstName" id="inputName" class="form-control" placeholder="Name"defaultValue={
                            companyedit.name} required 
                        />
                        <label for="inputName" class="visually-hidden">Type</label>
                        <input type="setLastName" id="inputType" class="form-control" placeholder="Type"defaultValue={
                                    companyedit.type} required 
                        />
                        <label for="inputEmail" class="visually-hidden">Address</label>
                        <input type="email" id="inputAddress" class="form-control" placeholder="Address"defaultValue={
                                    companyedit.address} required
                        />
                        <br></br>
                        <button onClick = {CompanyAdd} className="w-100 btn btn-lg btn-primary" type="button">{t("save")}</button>
                </main>
            </div>
            </div>
    )
}

export default CompanySave;