import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {Redirect} from 'react-router-dom';
import {useDispatch} from "react-redux";

const CompanyEditing = () => {
    const [redirect, setRedirect] = useState(false);
    const dispatch = useDispatch();
    const CompanySave = async() =>{
        const company_id = companyedit.company_id;
        const name = document.getElementById("inputName").value;
        const type = document.getElementById("inputType").value;
        const address = document.getElementById("inputAddress").value;
        console.log('erherherh');
        const response = await fetch('http://127.0.0.1:8000/api/company', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'},
            credentials: 'include',
            body: JSON.stringify({
                company_id,
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
                        <h1 className="h3 mb-3 fw-normal">Editing</h1>
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
                        <button onClick = {CompanySave} className="w-100 btn btn-lg btn-primary" type="button">Edit</button>
                </main>
            </div>
            </div>
    )
}

export default CompanyEditing;