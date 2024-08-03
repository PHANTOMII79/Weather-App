import { useState } from 'react'

function AddDataSpace({location}){
  const [city , setCity] = useState("");
  const Submit = () => location(city);

  return(
    <div className="AddDataSpace">
      <input type="text"
       id="AddDataText"
        placeholder='Write The city Here 🏙'
        value={city}
        onChange={(e) => setCity(e.target.value)}
        />
        <button
        id='SubmitDataText'
        onClick={Submit}
        >Submit</button>
    </div>

  );
}


export default function App(){

  const [city , setCity] = useState("");

  function location(newcity){
    setCity(newcity);
  }

  async function GetWeather(){

    try{

    }
    catch

  }



  return(
    <>
    <AddDataSpace location={location} />
    </>
     );
};
