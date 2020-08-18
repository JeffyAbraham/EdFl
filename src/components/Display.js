import React from "react";
import { Card } from "react-bootstrap";
import Cloudy from "../Assets/cloudy.png";
import Humidity from "../Assets/Humid.png";
import Wind from "../Assets/wind.png";
import Sunrise from "../Assets/sunrise.png";
import Sunset from "../Assets/sunset.png";

function Display(props) {
  console.log(props);
  var weatherDetails = props.wetherData;

  return (
    <div className="WeatherCard">
      <Card>
        <div style={{ padding: "20px" }}>
          <p
            style={{ fontSize: "23px", fontWeight: "600", lineHeight: "1.334" }}
          >
            {weatherDetails.name}, {weatherDetails.country}
          </p>

          <p>Monday, {weatherDetails.timezone},</p>

          <p>{weatherDetails.weather}</p>
          <div className="DisplayTemp">
            <div>
              <div>{Math.floor(weatherDetails.temp)}°C</div>
              <div className="subIcons">
                <div>
                <div>
                  <img src={Humidity} height="25px" width="25px" />
                </div>
                <div style={{ marginLeft: "5px" }}>
                  <p>{weatherDetails.humidity}%   Humidity</p>
                </div>
                </div>
                <div>
                <div>
                  <img src={Wind} height="25px" width="25px" />
                </div>
                <div>
                  <p style={{ marginLeft: "5px" }}>
                    {weatherDetails.wind} km/hr   Wind
                  </p>
                </div>
                </div>
              </div>
              <div className="subIcons">
                <div>
                <div>
                  <img src={Humidity} height="25px" width="25px" />
                </div>
                <div style={{ marginLeft: "5px" }}>
                  <p>4:00 PM Sunset</p>
                </div>
                </div>
                <div>
                <div>
                  <img src={Wind} style={{marginLeft:'20px'}} height="25px" width="25px" />
                </div>
                <div>
                  <p style={{ marginLeft: "5px" }}>
                    3:15 AM Sunrise
                  </p>
                </div>
                </div>
              </div>

         
            </div>
            <div>
              <img src={Cloudy} height="150px" width="150px" />
            </div>
          </div>
          <div className="Quote">
            <h5>
              “If you think that being vegan is difficult, imagine being a
              factory farmed animal.” -Davegan Raza
            </h5>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Display;
