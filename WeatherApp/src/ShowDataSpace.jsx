import { useState, useEffect } from 'react'
 
export default function ShowDataSpace({city, temp, feelslike, clouds , isSearched}){

    return(
      <div className="ShowDataSpace">
  
        <p className="CityName">
          {city.toUpperCase()}
        </p>
        <p className="temp">
          {`${temp}°C`}
          
        </p>
        <p className="feelslike">
          Feels Like: 
          {feelslike} °C
        </p>
        <p className="clouds">
          {clouds} 
        </p>
      </div>
    );
  };
  