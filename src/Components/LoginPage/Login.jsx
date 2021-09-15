import React from 'react'
import "./login.css";
export default function Login() {
    return (
        <div className="loginBox ">
            <div className="loginContainer">
            <div class="mb-3 inputBox">
                <label for="exampleFormControlInput1" class="form-label loginLabel">Enter Username</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Sathish Kumar" />
            </div>
            <button className="loginBtn btn btn-primary">Login</button>
            </div>
        </div>
    )
}
