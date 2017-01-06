import React from "react";
import Clock from "react-clock";
import axios from "axios";

class Main extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        latitude : 0,
        longitude : 0,
        city : ""
      };
      this._findMe =this._findMe.bind(this);
      this._showPosition = this._showPosition.bind(this);
      this._runQuery = this._runQuery.bind(this);
  }
//AIzaSyA4Z8VPYGfQllVs8OoOdYahb7dtp1I2tms google maps API key
// https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyA4Z8VPYGfQllVs8OoOdYahb7dtp1I2tms

//https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY
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
  this._runQuery();
}

_runQuery(){
  var geoApiKey = "AIzaSyA4Z8VPYGfQllVs8OoOdYahb7dtp1I2tms";
  var queryUrlBase = "https://maps.googleapis.com/maps/api/geocode/json?"
                      +"key="+geoApiKey;
  var queryUrl = queryUrlBase + "&latlng="+this.state.latitude+","+this.state.longitude;
  //var queryUrl = queryUrlBase +"&latlng=40.714224,-73.961452";
  console.log(queryUrl);

  axios.get(queryUrl).then((response) => {
    console.log(response.data);
    var myCity = response.data.results[0].address_components[2].long_name;
    this.setState({city : myCity}); 
  });
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
          <h5>Your are at {this.state.city} </h5>

          </div>
        </div>  
      </div>
    );
  }
}

// Export the componen back for use in other files
export default Main;

