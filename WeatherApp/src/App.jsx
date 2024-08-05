import { useState, useEffect } from 'react'

function AddDataSpace({location}){
  const [city , setCity] = useState("");
  const Submit = () => {
    location(city);
    setCity("");
  }

  return(
    <div className="AddDataSpace">
      <input type="text"
       id="AddDataText"
        placeholder='Write The city Here  🏙'
        value={city}
        onChange={(e) => setCity(e.target.value.toLowerCase())}
        />
        <button
        id='SubmitDataText'
        onClick={Submit}
        >Get Weather</button>
    </div>

  );
};

function ShowDataSpace({city}){

  return(
    <div className="ShowDataSpace">

      <p className="CityName">
        {city.toUpperCase()}
      </p>
    </div>
  );
};






export default function App(){

  const [city , setCity] = useState("");

  function location(newcity){
    setCity(newcity);

  }
  useEffect( () => {console.log(city);}, [city])



  return(
    <>
    <AddDataSpace location={location} />
    < ShowDataSpace city={city} />
    </>
     );
};
