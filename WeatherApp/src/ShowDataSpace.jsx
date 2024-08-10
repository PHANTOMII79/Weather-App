import { useState, useEffect } from 'react'
import './InnerPage.css'
 
export default function ShowDataSpace({city, temp, feelslike, wind , isSearched}){

    return(
      <div className={`ShowDataSpace ${isSearched ? 'Searched' : ''}`}>
  
        <p className="CityName">
          {city.toUpperCase()}
        </p>
        <p className="temp">
          {` 🌡${temp}°C`}
          
        </p>
        <p className="feelslike">
         <span> {feelslike} °C</span>Feels Like
        </p>
        <p className="wind">
          {wind}🌬
        </p>
      </div>
    );
  };
  