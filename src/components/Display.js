import React from "react";
import { Card } from "react-bootstrap";
import { pickWeatherIcon, convert } from "../helperFunctions/imagePicker.js";
import SubComponents from "./subComponents";
import Quote from "../helperFunctions/quotePicker";


function Display(props) {
  console.log(props);
  var weatherDetails = props.wetherData;

  return (
      <div>

 
        <div style={{ padding: "20px" }}>
        <h5 style={{paddingBottom:'20px',fontSize:'20px'}}>Temp Difference:{Math.floor(weatherDetails.temp-weatherDetails.per)}°C</h5>
          <p
            style={{ fontSize: "23px", fontWeight: "600", lineHeight: "1.334" }}
          >
            {weatherDetails.name}, {weatherDetails.country}
          </p>

          <p>Monday, {convert(weatherDetails.timezone)},</p>

          <p>{weatherDetails.weather}</p>
          <div className="DisplayTemp">
            <div>
              <div>{Math.floor(weatherDetails.temp)}°C</div>
            </div>
            <div>
              <img
                src={pickWeatherIcon(weatherDetails.weather)}
                height="150px"
                width="150px"
              />
            </div>
          </div>
          <SubComponents weatherDetail={weatherDetails} />

          <div className="Quote">
            
            <h5>{Quote(weatherDetails.weather)}</h5>
          </div>
        </div>
     
    </div>
  );
}

export default Display;
