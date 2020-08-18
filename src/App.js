import React from "react";
import "./App.css";
import Display from "./components/Display";
import SearchBar from "./components/Searchbar";
import axios from "axios";
import { Card } from "react-bootstrap";
import { BrowserRouter, Route,} from "react-router-dom";
import Navigation from "./components/Navigation";
import Week from "./components/Week";
import { weeklyWeatherReport } from "./api/apicalls";
import Logo from "./Assets/Logo.png";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.setDetails = this.setDetails.bind(this);
    this.setDetails2 = this.setDetails2.bind(this);
  }
  setDetails(data) {
    this.setState({
      currentLocation: "",
      name: data.name,
      country: data.sys["country"],
      humidity: data.main["humidity"],
      wind: data.wind["speed"],
      temp: data.main["temp"],
      weather: data.weather[0]["main"],
      sunrise: data.sys["sunrise"],
      sunset: data.sys["sunset"],
      timezone: data.timezone,
    });
  }
  setDetails2(array) {
    this.setState({
      weekly: array,
    });
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      var geo = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      };
      this.setState({
        currentLocation: geo,
      });
    });

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=Dublin,IE&exclude=hourly,daily&appid=6736842917302a3a0217817b3d4394ba&units=metric`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({
          name: res.data.name,
          country: res.data.sys["country"],
          humidity: res.data.main["humidity"],
          wind: res.data.wind["speed"],
          per: res.data.main["temp"],
          temp: res.data.main["temp"],
          weather: res.data.weather[0]["main"],
          sunrise: res.data.sys["sunrise"],
          sunset: res.data.sys["sunset"],
          timezone: res.data.timezone,
        });
      });
    weeklyWeatherReport("Dublin").then((res) => {
      this.setState({
        weekly: res.data.data,
      });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div style={{ backgroundColor: "#0c1642" }}>
          <img
            src={Logo}
            height="45px"
            width="120px"
            style={{ margin: "40px" }}
          />
          <div className="App">
            {/*----------Search bar is an input box whre user can enter the city name*/}
            <div className="Search">
              <SearchBar
                setDetails={this.setDetails}
                setDetails2={this.setDetails2}
              />
              <p
                style={{
                  textAlign: "center",
                  color: "white",
                  padding: "10px",
                  fontFamily: "Inter",
                }}
              >
                Enter the city name
              </p>
              <Navigation />
            </div>

            {/*Renders Temperature,Country Details,Weather etc*/}
            <div className="WeatherCard">
              <Card>
                <Route
                  path="/Daily"
                  render={(props) => <Display wetherData={this.state} />}
                />
                <Route
                  path="/Weekly"
                  render={(props) => <Week weekArray={this.state.weekly} />}
                />
              </Card>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
