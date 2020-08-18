import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Navigation() {
  return (
    <div className='Navlink'>
       <div>
      <Link to="/WeatherNow">
        <Button>DAILY FORECAST</Button>
      </Link>
      </div> 
      <div>
      <Link to="/WeatherForecast">
        {" "}
        <Button>WEEKLY FORECAST</Button>
      </Link>
    </div>
    </div>
  );
}
export default Navigation;