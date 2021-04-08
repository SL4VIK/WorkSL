import React, {useState} from 'react';

 const Login  = () => {
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

        const content = await response.json();

        // if(content.message) {
        //     setError(error.error=true, content.message);
        //     console.log(error.text, content.message)
        // }
    }
        return (
            <div>
                <div className='App'>
                <main className="form-signin">
                    <form onSubmit={submit}>
                        <h1 className="h3 mb-3 fw-normal">Auth</h1>
                        <label for="inputEmail" class="visually-hidden">Email address</label>
                        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required
                        onChange={e => setEmail(e.target.value)}
                        />
                        <label for="inputPassword" class="visually-hidden">Password</label>
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required
                         onChange={e => setPassword(e.target.value)}
                        />
                        <br></br>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
                    </form>
                </main>
            </div>
            </div>
        )
    }
export default Login;
