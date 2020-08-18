import React from "react";
import "./App.css";
import Display from "./components/Display";
import SearchBar from "./components/Searchbar";
import axios from 'axios'


class App extends React.Component {
  constructor(props) {
    
    
    super(props);

    this.state={
        














    }
    
  
  



    this.setDetails= this.setDetails.bind(this);



  }
  setDetails(data) {
    this.setState({
      name:data.name,
      country:data.sys['country'],
    humidity:data.main['humidity'],
    wind:data.wind['speed'],
    temp:data.main['temp'],
    weather:data.weather[0]['main'],
    sunrise:data.sys['sunrise'],
    sunset :data.sys['sunset'],
    timezone:data.timezone})

  
  }

 componentDidMount()
 {
  axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=Dublin,IE&exclude=hourly,daily&appid=6736842917302a3a0217817b3d4394ba&units=metric`
  )
  .then((res) => {
    console.log(res.data)
    this.setState({
      name:res.data.name,
      country:res.data.sys['country'],
    humidity:res.data.main['humidity'],
    wind:res.data.wind['speed'],
    temp:res.data.main['temp'],
    weather:res.data.weather[0]['main'],
    sunrise:res.data.sys['sunrise'],
    sunset :res.data.sys['sunset'],
    timezone:res.data.timezone})


   
    
  });
 }
  
  render() {
    return (
      <div style={{ backgroundColor: "#0c1642" }}>
        <div className="App">
          {/*----------Search bar is an input box whre user can enter the city name*/}
          <div className="Search">
            <SearchBar setDetails={this.setDetails} />
            <p style={{textAlign:'center',color:'white',padding:'10px',fontFamily:'Inter'}}>Enter the city name</p>
          </div>
          {/*Renders Temperature,Country Details,Weather etc*/}
          <Display wetherData={this.state}/>
        </div>
      </div>
    );
  }
}
export default App;
