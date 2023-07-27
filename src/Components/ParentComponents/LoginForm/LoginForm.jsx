import React from 'react'
import './LoginForm.css'

function LoginForm() {
    return (
        <div className='login-form column is-6'>
            <div className='has-text-centered is-size-4 m-2'><strong>Login</strong></div>
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input className="input" type="email" placeholder="Email"/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                        </span>
                </p>
            </div>
            <div className="field">
                <p className="control has-icons-left">
                    <input className="input" type="password" placeholder="Password"/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                        </span>
                </p>
            </div>
            <div className="login-button is-centered">
                <p className="control is-centered">
                    <button className="button is-info is-light  is-outlined is-rounded">
                        Login
                    </button>
                </p>
            </div>
        </div>

    )
}

export default LoginForm