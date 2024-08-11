import { useState, useEffect } from 'react'
import styles from './InnerPage.module.css'
 
export default function ShowDataSpace({city, temp, feelslike, wind , isSearched}){

    return(
      <div className={`${styles.ShowDataSpace} ${isSearched ? styles.Searched : ''}`}>
  
        <p className={styles.CityName}>
          {city.toUpperCase()}
        </p>
        <p className={styles.temp}>
          {` 🌡${temp}°C`}
          
        </p>
        <p className={styles.feelslike}>
         <span> {feelslike} °C</span>Feels Like
        </p>
        <p className={styles.wind}>
          {wind}🌬
        </p>
      </div>
    );
  };
  