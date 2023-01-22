import React from "react";
import { useState } from "react";
export const AuthContext=React.createContext();

function Signup() {
    const redirect = () => {
        window.location.href = '/login'
     }
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {
        const payload = {
            email,
            password
        }
       
        fetch("http://localhost:3000/signup", {
            method : "POST",
            body : JSON.stringify(payload),
            headers : {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
    return(
        <div>
            <h1>Sign up here</h1>
            <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button  onClick={redirect}>Submit</button>
        </div>
    )
}
export default Signup;
