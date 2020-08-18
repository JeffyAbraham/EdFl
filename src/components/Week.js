import React from "react";
import WeekComponent from "./WeekComponent";

function Week(props) {
  return (
    <div>
      {props.weekArray.map(function (item, i) {
        if (i < 8) {
          return <WeekComponent data={item} />;
        }
      })}
    </div>
  );
}
export default Week;
