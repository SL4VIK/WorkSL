import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {Redirect} from 'react-router-dom';
import {useDispatch} from "react-redux";

const UserEditing = () => {
    const [redirect, setRedirect] = useState(false);
    const dispatch = useDispatch();
    const UserSave = async() =>{
        const id = useredit.id;
        const first_name = document.getElementById("inputName").value;
        const last_name = document.getElementById("inputLastName").value;
        const email = document.getElementById("inputEmail").value;
        // const password = document.getElementById("inputPassword").value;
        console.log('erherherh');
        const response = await fetch('http://127.0.0.1:8000/api/updatebyid', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'},
            credentials: 'include',
            body: JSON.stringify({
                id,
                first_name,
                last_name,
                email,
                // password,
            }),
        });
        Users();
        setRedirect(true);
        const content = await response.json();
        console.log(content);
    }
        const Users = async()=> {
            const response = await fetch('http://127.0.0.1:8000/api/users', {
                method: 'GET',
                headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'},
                credentials: 'include',
            });
            const content = await response.json();
            if(response.status === 200){
            dispatch({type: 'GETUSERS', payload: content})}   
    }
    const useredit = useSelector(state => state.users.useredit);
    if(redirect){
        return <Redirect to='/usertable'/>
    }
    return (
        <div>
                <div className='App'>
                <main className="form-signin">
                        <h1 className="h3 mb-3 fw-normal">Editing</h1>
                        <label for="inputName" class="visually-hidden">First Name</label>
                        <input type="setFirstName" id="inputName" class="form-control" placeholder="First Name"defaultValue={
                            useredit.first_name} required 
                        />
                        <label for="inputName" class="visually-hidden">Last Name</label>
                        <input type="setLastName" id="inputLastName" class="form-control" placeholder="Last Name"defaultValue={
                                    useredit.last_name} required 
                        />
                        <label for="inputEmail" class="visually-hidden">Email address</label>
                        <input type="email" id="inputEmail" class="form-control" placeholder="Email address"defaultValue={
                                    useredit.email} required
                        />
                        {/* <label for="inputPassword" class="visually-hidden">Password</label>
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password"defaultValue={
                                    useredit.password} required
                        /> */}
                        <br></br>
                        <button onClick = {UserSave} className="w-100 btn btn-lg btn-primary" type="submit">Edit</button>
                </main>
            </div>
            </div>
    )
}

export default UserEditing;