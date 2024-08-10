import { useState, useEffect } from 'react'
import './InnerPage.css'


export default function AddDataSpace({location, isSearched}){
    const [city , setCity] = useState("");
    const Submit = () => {
      location(city);
      setCity("");
      console.log(isSearched);
    }
  
    return(
      <div className={`AddDataSpace ${isSearched ? "Searched" : "" }`} >
        <input type="text"
         id="AddDataText"
          placeholder='Write The city Here  🏙'
          value={city}
          onChange={(e) => setCity(e.target.value.toLowerCase())}
          />
          <button
          id='SubmitDataText'
          onClick={Submit}
          >🔍</button>
      </div>
  
    );
  };