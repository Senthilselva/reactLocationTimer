import React from "react";
import Clock from "react-clock";
class Main extends React.Component {

 render() {
    return (
      <div>
        <div className="row">
          <div className = "col m2"></div>
          <div className = "col m8">
          <h2> <Clock /> </h2>
          </div>
        </div>  
      </div>
    );
  }
}

// Export the componen back for use in other files
export default Main;

