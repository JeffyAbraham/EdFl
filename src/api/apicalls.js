import axios from "axios";

//Fetchs the Daily weather report from the open weather API
function presentWeatherReport(city) {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&exclude=hourly,daily&appid=6736842917302a3a0217817b3d4394ba&units=metric`
  );
}

//Fetches the Weekly weather report from the open weather API
function weeklyWeatherReport() {
  return axios.get(
    `http://api.weatherbit.io/v2.0/forecast/daily?&lat=38.123&lon=-78.543&key=a1579038f1d2487d80e9bfc904ae3630&units=M`
   
  );
}
export {
    presentWeatherReport,weeklyWeatherReport
  };