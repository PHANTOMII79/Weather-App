import { useState, useEffect } from 'react'
import styles from'./InnerPage.module.css'


export default function AddDataSpace({location, isSearched}){
    const [city , setCity] = useState("");
    const Submit = () => {
      location(city);
      setCity("");
      console.log(isSearched);
    }
  
    return(
      <div className={`${styles.AddDataSpace} ${isSearched ? styles.Searched : '' }`} >
        <input type="text"
         id={styles.AddDataText}
          placeholder='Write The city Here  🏙'
          value={city}
          onChange={(e) => setCity(e.target.value.toLowerCase())}
          />
          <button
          id={styles.SubmitDataText}
          onClick={Submit}
          >🔍</button>
      </div>
  
    );
  };