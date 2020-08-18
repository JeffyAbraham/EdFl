import React from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import SearchIcon from "../Assets/Search.png";
import { presentWeatherReport } from "../api/apicalls";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    function makeApiRequest(e) {
      if (e.target.city.value !== "") {
        e.preventDefault();
        var city = e.target.city.value;

        presentWeatherReport(city).then((res) => {
          this.props.setDetails(res.data);
        });
      } else {
        alert("Please enter the city name to continue");
      }
    }

    return (
      <Form inline onSubmit={makeApiRequest.bind(this)}>
        <FormControl
          type="text"
          placeholder="Search"
          className=" mr-sm-2"
          name="city"
        />
        <Button type="submit">
          <img src={SearchIcon} height="25px" width="25px" />
        </Button>
      </Form>
    );
  }
}
export default SearchBar;
