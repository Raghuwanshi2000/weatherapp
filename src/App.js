import React, { } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
         
        | Designed by{" "}
        
          SAMARTH RAGHUWANSHI
         |
        
      </div>
    </React.Fragment>
  );
}

export default App;
