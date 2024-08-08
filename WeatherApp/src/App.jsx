import { useState, useEffect } from 'react'
import AddDataSpace from './AddDataSpace';
import ShowDataSpace from './ShowDataSpace';

export default function App(){
  const [isSearched , setIsSearched] = useState(false);
  const [city , setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [feelslike , setFeelslike] = useState("")
  const [wind , setWind] = useState("");

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
  function SearchedState(){
    setIsSearched(true);

  }
  function DATA(data){
    setTemp(data.main.temp);
    setWind(data.wind.speed);
    setFeelslike(data.main.feels_like)
    console.log(wind);
  }
  

  return(
    <>
      <div className="App">
          <AddDataSpace
              location={location}
              SearchedState={SearchedState}
              isSearched={isSearched}
              />
          < ShowDataSpace 
              isSearched={isSearched}
              city={city}
              temp={temp}
              feelslike={feelslike}
              wind={wind}
          />
          
        </div>    
    </>
     
     );

};
