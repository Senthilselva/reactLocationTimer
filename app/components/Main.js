import React from "react";
import Clock from "react-clock";

class Main extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        latitude : 0,
        l : 0
      };
      this._findMe =this._findMe.bind(this);
      this._showPosition = this._showPosition.bind(this)
  }

_findMe(event){
  event.preventDefault();
  console.log("in findMe")
  var geo=navigator.geolocation;
  console.log(geo)
  if (geo) {
        geo.getCurrentPosition(this._showPosition);
  } else {
        alert("Geolocation is not supported by this browser.");
  }

}

_showPosition(position){
  console.log(position)
  this.setState({ longitude:position.coords.longitude });
  this.setState({ latitude:position.coords.latitude });

}

render() {
    return (
      <div>
        <div className="row">
          <div className = "col m2"></div>
          <div className = "col m8">
          <h2> <Clock /> </h2>
          <button className = "findMe" onClick={this._findMe}>Where am I? </button>
          <div>Your longitude is : {this.state.longitude} </div>
          <h5>Your latitude is : {this.state.latitude} </h5>
          </div>
        </div>  
      </div>
    );
  }
}

// Export the componen back for use in other files
export default Main;

