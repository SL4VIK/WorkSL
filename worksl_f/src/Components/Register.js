import React, { Component } from 'react'
const Reg = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
}
export default class Register extends Component {
    
    render() {
        return (
            <div>
                <div className='App'>
                <main className="form-signin">
                    <form onSubmit={}>
                        <h1 className="h3 mb-3 fw-normal">Registration</h1>
                        <label for="inputName" class="visually-hidden">Name</label>
                        <input type="Name" id="inputName" class="form-control" placeholder="Name" required 
                        onChange={e => setName(e.target.value)}
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
        export default Reg;
    }
}
