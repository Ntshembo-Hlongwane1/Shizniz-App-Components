import React, { Component } from "react";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "./AddPlace.css";
export class AddPlace extends Component {
  render() {
    return (
      <div id="add-place-container">
        <div>
          <img
            src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6c/2c/70.jpg"
            alt="Demo Place Image"
          />
        </div>
        <div className="add-place-details">
          <h3>Rome</h3>
          <div className="details-content">
            <div className="icon-container">
              <ErrorOutlineIcon className="details-icon" />
            </div>
            <div className="icon-container">
              <PeopleAltIcon className="details-icon" />
            </div>
            <div className="icon-container">
              <LocationOnIcon className="details-icon" />
            </div>
          </div>
          <button className="btn btn-add-place">Add Place</button>
        </div>
      </div>
    );
  }
}
