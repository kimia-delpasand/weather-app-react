import { useState } from "react";
import "../src/App.css"
import axios from "axios";
// import { event } from "jquery";
const App = () => {
  

  const [data,setdata]=useState({})
  const[location,setlocation]=useState("")
   
  const fetchdata=async(e)=>{
   if (e.key==='Enter') {
    axios.get(
         `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=02b1bd18a1ca80ee2f99c1d8945a024c`
    ).then((response)=>{
      setdata(response.data)
      console.log(response.data);
    })
    setlocation("")
   }
  
  }
  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(e) => setlocation(e.target.value)}
          placeholder="enter location"
          onKeyPress={fetchdata}
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F </h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name != undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? <p>{data.main.feels_like}°F </p> : null}
              <p>feels like</p>
            </div>
            <div className="humidity">
              {data.main ? <p>{data.main.humidity}%</p> : null}
              <p>humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>wind speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
