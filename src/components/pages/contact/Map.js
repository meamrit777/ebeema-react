import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import "./contact.css";
const mapStyles = {
  width: "100%",
  height: "90%",
};

export function MapContainer(props) {
  return (
    <div className="contact-map">
      <Map
        google={props.google}
        zoom={4}
        style={mapStyles}
        initialCenter={{
          lat: 6.2518401,
          lng: -75.563591,
        }}
      />
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCY4WITLJ8D3efrq4vptTuaqBJAdbdUlfg",
})(MapContainer);
