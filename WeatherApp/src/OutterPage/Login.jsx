import { useState, useEffect } from 'react'
import styles from './OutterPage.module.css'



export default function Login({hadAccount }){
    const [password , setPassword] = useState('');
    const [username , setUsername] = useState('');


    return(
        <div className={`${styles.Login} ${ hadAccount ? '' : styles.No}`}>
            <h1> Log In </h1>
            <div className={styles.AddLoginData}>
                <input type="text"
                    className={styles.Username}
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <input type="text"
                    className={styles.Password}
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
            <button className={styles.LogInButton} onClick={""}> Log In </button>
            <p className={styles.ForgotPassword}> <span>Forgot Password?</span></p>
            <p className={styles.DonthaveAccount}>  Don't Have An Account? <span>CLICK ME!</span></p>



        </div>
    );
};