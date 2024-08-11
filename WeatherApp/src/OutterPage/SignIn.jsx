import { useState, useEffect } from 'react'
import styles from './OutterPage.module.css'


export default function SignIn({hadAccount , HaveAccount}){
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [username , setUsername] = useState('');


    return(
        <div className={`${styles.Login} ${ !hadAccount ? '' : styles.No}`}>
            <h1> Sign In </h1>
            <div className={styles.AddSignInData}>
            <input type="text" 
                className={styles.Name}
                placeholder='NAME'
                value={name}
                onChange={(e) =>setName(e.targer.value)}
            />
            <input type="text"
                className={styles.Username} 
                placeholder='Username' 
                value={username}
                onChange={(e) =>setUsername(e.targer.value)} 
            />
            <input type="email"
                className={styles.Email} 
                placeholder='EMAIL' 
                value={email}
                onChange={(e) =>setEmail(e.targer.value)} 
            />
            <input type="password" 
                className={styles.Password}   
                placeholder='Password' 
                value={password}
                onChange={(e) =>setPassword(e.targer.value)}
            />
            </div>
            <button className={styles.SignInButton} onClick={''}> Sign In </button>
            <p className={styles.haveAccount} onClick={() => HaveAccount()}> Have An Account? <span>CLICK ME!</span></p>
        </div>
    );
};