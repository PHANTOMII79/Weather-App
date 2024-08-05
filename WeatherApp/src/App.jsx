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

function ShowDataSpace({city, temp, feelslike, clouds }){

  return(
    <div className="ShowDataSpace">

      <p className="CityName">
        {city.toUpperCase()}
      </p>
      <p className="temp">
        {temp} °C
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






export default function App(){

  const [city , setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [feelslike , setFeelslike] = useState("")
  const [clouds , setClouds] = useState("");

  function location(newcity){
    setCity(newcity);

  }
  useEffect( () => {
    getWeather()
    console.log(city);
  }, [city])
  const APIkey = "23b9ab18dad411ca4fcce6299e5b3bf2";

  async function getWeather(){
    console.log("1");
    try{
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`)
      if(!response.ok){
        throw new Error("Could not fetch");
      }
      
      const data = await response.json();
      console.log(data);
      DATA(data);
      

    }
    catch(error){
      console.error(error);
    }
  }
  function DATA(data){
    setTemp(data.main.temp);
    setClouds(data.wind.speed);
    setFeelslike(data.main.feels_like)
    console.log(clouds);
  }

  return(
    <>
    <AddDataSpace location={location} />
    < ShowDataSpace 
      city={city}
       temp={temp}
       feelslike={feelslike}
       clouds={clouds}
       />
    </>
     );
};
