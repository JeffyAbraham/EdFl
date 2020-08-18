import axios from "axios";

//Fetchs the Daily weather report from the open weather API
function presentWeatherReport(city) {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&exclude=hourly,daily&appid=6736842917302a3a0217817b3d4394ba&units=metric`
  );
}
function userWeatherReport(geo) {
  console.log(geo);
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?&lat=38.123&lon=-78.543&exclude=hourly,daily&appid=6736842917302a3a0217817b3d4394ba&units=metric`
  );
}
//Fetches the Weekly weather report from the open weather API
function weeklyWeatherReport(city) {
  return axios.get(
    `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=a1579038f1d2487d80e9bfc904ae3630&units=M`
  );
}
export { presentWeatherReport, weeklyWeatherReport, userWeatherReport };
