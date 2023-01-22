// import React from "react";


// function Loginpage() {
//     return(
//         <h1>Loginpage</h1>
//     )
// }

// export default Loginpage;



import React from "react"
import { useState } from "react"

const Loginpage = () => {
    const redirect = () => {
        window.location.href = '/'
     }
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {
        const payload = {
            email,
            password
        }
       
        fetch("http://localhost:3000/login", {
            method : "POST",
            body : JSON.stringify(payload),
            headers : {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            localStorage.setItem("psctoken",res.token)
        })
        .catch((err) => console.log(err))
    }
    return(
        <div className="signup">
            <h1>Login here</h1>
            <input type="text" placeholder=" Inter email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" placeholder=" Inter password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button onClick={redirect}>Submit</button>
        </div>
    )
}
export default Loginpage