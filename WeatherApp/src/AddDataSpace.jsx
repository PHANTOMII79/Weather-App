import { useState, useEffect } from 'react'


export default function AddDataSpace({location, SearchedState, isSearched}){
    const [city , setCity] = useState("");
    const Submit = () => {
      location(city);
      setCity("");
      SearchedState();
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