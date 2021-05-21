import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {Redirect} from 'react-router-dom';
import {useDispatch} from "react-redux";

const WorktimeEditing = () => {
    const [redirect, setRedirect] = useState(false);
    const dispatch = useDispatch();
    const WorktimeSave = async() =>{
        const worktime_id = worktimeedit.worktime_id;
        const date = document.getElementById("inputDate").value;
        const time = document.getElementById("inputTime").value;
        const rest = document.getElementById("inputRest").value;
        const users_id = document.getElementById("inputUser_id").value;
        const response = await fetch('http://127.0.0.1:8000/api/worktime', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'},
            credentials: 'include',
            body: JSON.stringify({
                worktime_id,
                date,
                time,
                rest,
                users_id,
            }),
        });
        Worktime();
        setRedirect(true);
        const content = await response.json();
        console.log(content);
    }
    const Worktime = async()=> {
        const response = await fetch('http://127.0.0.1:8000/api/worktime', {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'},
            credentials: 'include',
        });
        const content = await response.json();
        if(response.status === 200){
          dispatch({type: 'GETWORKTIME', payload: content})}   
    }
    const worktimeedit = useSelector(state => state.worktime.worktimeedit);
    if(redirect){
        return <Redirect to='/worktimetable'/>
    }
    return (
        <div>
                <div className='App'>
                <main className="form-signin">
                        <h1 className="h3 mb-3 fw-normal">Editing</h1>
                        <label for="inputName" class="visually-hidden">Date</label>
                        <input type="date" id="inputDate" class="form-control" placeholder="Name"defaultValue={
                            worktimeedit.date} required 
                        />
                        <label for="inputName" class="visually-hidden">Time</label>
                        <input type="text" id="inputTime" class="form-control" placeholder="Time"defaultValue={
                                    worktimeedit.time} required 
                        />
                        <label for="inputEmail" class="visually-hidden">Rest</label>
                        <input type="email" id="inputRest" class="form-control" placeholder="Rest"defaultValue={
                                    worktimeedit.rest} required
                        />
                        <label for="inputEmail" class="visually-hidden">User</label>
                        <input type="email" id="inputUser_id" class="form-control" placeholder="User"defaultValue={
                                    worktimeedit.users_id} required
                        />
                        
                        <br></br>
                        <button onClick = {WorktimeSave} className="w-100 btn btn-lg btn-primary" type="button">Edit</button>
                </main>
            </div>
            </div>
    )
}

export default WorktimeEditing;