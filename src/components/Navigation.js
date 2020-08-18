import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <div className="Navlink">
      <div>
        <Link to="/Daily">
          <Button>DAILY FORECAST</Button>
        </Link>
      </div>
      <div>
        <Link to="/Weekly">
          {" "}
          <Button>WEEKLY FORECAST</Button>
        </Link>
      </div>
    </div>
  );
}
export default Navigation;
