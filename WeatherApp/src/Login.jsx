import { useState, useEffect } from 'react'
import './OutterPage.css'



export default function Login(){
    const [password , setPassword] = useState('');
    const [username , setUsername] = useState('');


    return(
        <div className="Login">
            <h1> Log In </h1>
            <input type="text"
                className="Username"
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
            />
            <input type="text"
                className="Password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button className="LogInButton" onClick={""}> Log In </button>
            <p className="ForgotPassword"> <span>Forgot Password?</span></p>
            <p className="DonthaveAccount">  Don't Have An Account? <span>CLICK ME!</span></p>



        </div>
    );
};