import { useState, useEffect } from 'react'
import './OutterPage.css'



export default function SignIn(){
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [username , setUsername] = useState('');


    return(
        <div className="SignIn">
            <h1> Sign In </h1>
            <input type="text" 
                className="Name"
                placeholder='NAME'
                value={name}
                onChange={(e) =>setName(e.targer.value)}
            />
            <input type="text"
                className="Username" 
                placeholder='Username' 
                value={username}
                onChange={(e) =>setUsername(e.targer.value)} 
            />
            <input type="email"
                className="Email" 
                placeholder='EMAIL' 
                value={email}
                onChange={(e) =>setEmail(e.targer.value)} 
            />
            <input type="password" 
                className="Password"   
                placeholder='Password' 
                value={password}
                onChange={(e) =>setPassword(e.targer.value)}
            />
            <button className='SignInButton'> Sign In </button>
            <p className="haveAccount"> Have An Account? <span>CLICK ME!</span></p>
        </div>
    );
};