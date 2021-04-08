import React, {useState} from 'react';

 const Register = ()=> {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://127.0.0.1:8000/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'},
            body: JSON.stringify({
                first_name,
                last_name,
                email,
                password,
            }),
        });
        const content = await response.json();


        // if(response.status === 422){
        //     for (let key in content.errors) {
        //         setError(error => [...error, content.errors[key].toString()]);
        //     }
        // } else {
        //     console.log(content);
        // }
    }
        return (
            <div>
                <div className='App'>
                <main className="form-signin">
                    <form onSubmit={submit}>
                        <h1 className="h3 mb-3 fw-normal">Registration</h1>
                        <label for="inputName" class="visually-hidden">First Name</label>
                        <input type="setFirstName" id="inputName" class="form-control" placeholder="First Name" required 
                        onChange={e => setFirstName(e.target.value)}
                        />
                        <label for="inputName" class="visually-hidden">Last Name</label>
                        <input type="setLastName" id="inputName" class="form-control" placeholder="Last Name" required 
                        onChange={e => setLastName(e.target.value)}
                        />
                        <label for="inputEmail" class="visually-hidden">Email address</label>
                        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required
                        onChange={e => setEmail(e.target.value)}
                        />
                        <label for="inputPassword" class="visually-hidden">Password</label>
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required
                         onChange={e => setPassword(e.target.value)}
                        />
                        <br></br>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                    </form>
                </main>
            </div>
            </div>
        )
    
    }
    export default Register;
