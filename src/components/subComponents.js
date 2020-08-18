import React from "react";
import Wind from "../Assets/wind.png";
import Humidity from "../Assets/Humid.png";
import Sunset from "../Assets/sunset.png";
import Sunrise from "../Assets/sunrise.png";
import { convert } from "../helperFunctions/imagePicker";
function SubComponents(props) {
  var weatherDetails = props.weatherDetail;
  return (
    <div className="SubComp">
      <div>
        <img src={Humidity} height="25px" width="25px" />

        <p>{weatherDetails.humidity}% Humidity</p>

        <img src={Wind} height="25px" width="25px" />

        <p style={{ marginLeft: "5px" }}>{weatherDetails.wind} km/hr Wind</p>
      </div>
      <div>
        <img src={Sunrise} height="25px" width="25px" />

        <p>{convert(weatherDetails.sunrise)} Sunrise</p>

        <img src={Sunset} height="25px" width="25px" />

        <p style={{ marginLeft: "5px" }}>
          {convert(weatherDetails.sunset)} Sunset
        </p>
      </div>
    </div>
  );
}
export default SubComponents;
