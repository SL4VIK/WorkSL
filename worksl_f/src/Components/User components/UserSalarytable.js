import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import UserSalaryRow from './UserSalaryRow';
import { Button } from 'react-bootstrap'

const UserSalaryTable = () => {
  const salaryuser = useSelector(state => state.salaryuser.salaryuser);
  const dispatch = useDispatch();

  const SalaryRefresh = async() =>{
    const response = await fetch('http://127.0.0.1:8000/api/salaryrefresh', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'},
        credentials: 'include',
        body: JSON.stringify({
        }),
    });
     SalaryUser();
    const content = await response.json();
    console.log(content);
    }
    const SalaryUser = async()=> {
        const response = await fetch('http://127.0.0.1:8000/api/salaryuser', {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'},
            credentials: 'include',
        });
        const content = await response.json();
        if(response.status === 200){
          dispatch({type: 'GETSALARYUSER', payload: content})}   
    }
    return (
      <div>

      <table class="table table-dark">
<thead>
<tr>
<th scope="col">ID</th>
<th scope="col">Cost</th>
<th scope="col">Total Hours</th>
<th scope="col">Salary</th>
<th scope="col">Month</th>
<th scope="col"><Button variant="btn btn-warning" onClick = {SalaryRefresh}>Refresh</Button></th>
</tr>
</thead>
<tbody>
    {
      salaryuser.map((salary) => <UserSalaryRow salary = {salary} />)
    }
</tbody>
</table>
  </div>
        
    )
}

export default UserSalaryTable;