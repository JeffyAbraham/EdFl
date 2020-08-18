import RainandSun from "../Assets/cloud.png";
import Windy from "../Assets/wind.png";
import Thuder from "../Assets/thunder.png";
import Cloudy from "../Assets/cloudy.png";
import Rain from "../Assets/Rain.png";
import Fog from "../Assets/fog.png";
import Clear from "../Assets/clear.png";
import Clouds from "../Assets/cloud.png";

function pickWeatherIcon(weather) {
  switch (weather) {
    case "Thunderstorm":
      return Thuder;
      break;
    case "Drizzle":
      return Cloudy;
      break;
    case "Rain":
      return Rain;
      break;
    case "Snow":
      return Fog;
      break;
    case "Clear":
      return Clear;

    default:
      return Clouds;
  }
}
//----Convert those weird looking formats to human readable
function convert(sec) {
  var date = new Date(sec * 1000);
  var timestr = date.toLocaleTimeString();
  return timestr;
}
export {pickWeatherIcon,convert}
