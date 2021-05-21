import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {Redirect} from 'react-router-dom';
import {useDispatch} from "react-redux";

const SalaryEditing = () => {
    const [redirect, setRedirect] = useState(false);
    const dispatch = useDispatch();
    const SalarySave = async() =>{
        const salary_id = salaryedit.salary_id;
        const cost_ph = document.getElementById("inputCost_ph").value;
        const total_hours = document.getElementById("inputTotal_hours").value;
        const salary = document.getElementById("inputSalary").value;
        const month_s = document.getElementById("inputMonth_s").value;
        const users_id = document.getElementById("inputUsers_id").value;
        const response = await fetch('http://127.0.0.1:8000/api/salary', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'},
            credentials: 'include',
            body: JSON.stringify({
                salary_id,
                cost_ph,
                total_hours,
                salary,
                month_s,
                users_id,
            }),
        });
        Salary();
        setRedirect(true);
        const content = await response.json();
        console.log(content);
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
    const salaryedit = useSelector(state => state.salary.salaryedit);
    if(redirect){
        return <Redirect to='/salarytable'/>
    }
    return (
        <div>
                <div className='App'>
                <main className="form-signin">
                        <h1 className="h3 mb-3 fw-normal">Editing</h1>
                        <label for="inputName" class="visually-hidden">Cost</label>
                        <input type="text" id="inputCost_ph" class="form-control" placeholder="Name"defaultValue={
                            salaryedit.cost_ph} required 
                        />
                        <label for="inputName" class="visually-hidden">Total hours()</label>
                        <input type="text" id="inputTotal_hours" class="form-control" placeholder="Time"defaultValue={
                                    salaryedit.total_hours} required 
                        />
                        <label for="inputEmail" class="visually-hidden">Salary()</label>
                        <input type="text" id="inputSalary" class="form-control" placeholder="Rest"defaultValue={
                                    salaryedit.salary} required
                        />
                        <label for="inputEmail" class="visually-hidden">Month</label>
                        <input type="date" id="inputMonth_s" class="form-control" placeholder="User"defaultValue={
                                    salaryedit.month_s} required
                        />
                        <label for="inputEmail" class="visually-hidden">User</label>
                        <input type="text" id="inputUsers_id" class="form-control" placeholder="User"defaultValue={
                                    salaryedit.users_id} required
                        />
                        
                        <br></br>
                        <button onClick = {SalarySave} className="w-100 btn btn-lg btn-primary" type="button">Edit</button>
                </main>
            </div>
            </div>
    )
}

export default SalaryEditing;