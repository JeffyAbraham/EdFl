import React from "react";
import { pickWeatherIcon } from "../helperFunctions/imagePicker";

function WeekComponent(props) {
  console.log(props);
  return (
    <div className="Week">
      <div>
        <p style={{ fontSize: "19px" }}>{props.data.valid_date}</p>
      </div>
      <div>
        <img
          src={pickWeatherIcon('Cloudy')}
          height="40px"
          width="40px"
        />
      </div>
      <div>
        <p style={{ fontSize: "19px" }}>
          {Math.floor(props.data.app_max_temp)}°C /{" "}
          {Math.floor(props.data.app_min_temp)}°C
        </p>
      </div>
    </div>
  );
}
export default WeekComponent;
