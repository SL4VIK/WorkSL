import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className='App'>
                <main className="form-signin">
                    <form>
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                        <label for="inputEmail" class="visually-hidden">Email address</label>
                        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
                        <label for="inputPassword" class="visually-hidden">Password</label>
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    </form>
                </main>
            </div>
        )
    }
}
