import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useTranslation} from 'react-i18next';



 const Login  = () => {
    const {t, i18n} = useTranslation();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://127.0.0.1:8000/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password,
            }),
        });

        GetUser();
    }
    const GetUser = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/user', {
                method: 'GET',
                headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'},
                credentials: 'include',
            });
            const content = await response.json();
            if(response.status === 200){
              dispatch({type: 'LOGIN', payload: content})}
            }
        return (
            <div>
                <div className='App'>
                <main className="form-signin">
                    <form onSubmit={submit}>
                        <h1 className="h3 mb-3 fw-normal">{t("login.label")}</h1>
                        <label for="inputEmail" class="visually-hidden">Email address</label>
                        <input type="email" id="inputEmail" class="form-control" placeholder={t("register.email")} required
                        onChange={e => setEmail(e.target.value)}
                        />
                        <label for="inputPassword" class="visually-hidden">Password</label>
                        <input type="password" id="inputPassword" class="form-control" placeholder={t("register.password")} required
                         onChange={e => setPassword(e.target.value)}
                        />
                        <br></br>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">{t("login.btn")}</button>
                    </form>
                </main>
            </div>
            </div>
        )
    }
export default Login;
