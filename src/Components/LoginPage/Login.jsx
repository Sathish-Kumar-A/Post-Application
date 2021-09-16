import React,{useState} from 'react'
import Header from '../Header/Header';
import Home from '../Home/Home';
import "./login.css";

const users=[];
var userChecker=false;

export default function Login() {
    const[userName,setuserName]=useState("");

    const handleChange=(event)=>{
        setuserName(event.target.value);
    }

    const loginRegister=()=>{
        if(userName.length){
            if(users.length===0){
                users.push(userName);
                userChecker= true;
            }
            else{
                
                for (var x of users){
                    if(x===userName){
                        userChecker= true;
                    }
                    else if(x==users[users.length-1]){
                        users.push(userName);
                        userChecker= true;
                        
                    }
                }
            }
        }
        window.localStorage.setItem("userLogin",userChecker);
        window.localStorage.setItem("userName",userName);
        setuserName("");
    }
    
    return (
        <div>
        <Header />
            <div className="loginBox ">
                <div className="loginContainer">
                <div className="mb-3 inputBox">
                    <label for="exampleFormControlInput1" className="form-label loginLabel">Enter Username</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" value={userName} placeholder="eg.john Durai" onChange={(event)=>handleChange(event)} />
                </div>
                <button className="loginBtn btn btn-primary" onClick={()=>loginRegister()}>Login</button>
                </div>
            </div>
        </div>
    
    )
}
