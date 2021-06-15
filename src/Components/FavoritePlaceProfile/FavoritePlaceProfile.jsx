import React, { Component } from "react";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import Data from "./data.json";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { RangeSlider } from "./RangeSlider";
import PersonIcon from "@material-ui/icons/Person";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import CameraAltIcon from "@material-ui/icons/CameraAlt";

export class FavoritePlaceProfile extends Component {
  constructor(props) {
    super(props);
    this.stat = {
      values: [50],
    };
  }
  render() {
    return (
      <div id="add-place-container">
        <div>
          <img
            src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6c/2c/70.jpg"
            alt="Demo Place Image"
            style={add_place_container_img}
          />
        </div>
        <div style={add_place_details} className="add-place-details">
          <h3 style={add_place_details_h3}>Rome</h3>
          <div id="user-place-attachment-container">
            <div
              style={user_place_attachment_container_top}
              id="user-place-attachment-container_top"
            >
              <div style={top_left} id="top_left">
                <p style={top_pagraph_content}>LEAVE</p>
                <div style={icon_container_place_details}>
                  <ExitToAppIcon />
                </div>
              </div>
              <div style={{ ...top_right, ...visited_style }} id="top_right">
                <p style={top_pagraph_content}>AT</p>
                <div style={icon_container_place_details}>
                  <LocationOnIcon />
                </div>
              </div>
            </div>
            <div
              style={user_place_attachment_container_top}
              id="user-place-attachment-container_top"
            >
              <div style={top_left} id="top_left">
                <RangeSlider
                  maxCapacity={Data.maxCapacity}
                  currentCapacity={Data.currentNumber}
                />
                <div style={icon_container_place_details}>
                  <WhatshotIcon />
                </div>
              </div>
              <div style={top_right} id="top_right">
                <p style={top_pagraph_content}>
                  {Data["currentNumber"]}/{Data["maxCapacity"]}
                </p>
                <div style={icon_container_place_details}>
                  <PersonIcon />
                </div>
              </div>
            </div>
          </div>
          <div style={details_content} className="details-content">
            <div style={icon_container} className="icon-container">
              <ErrorOutlineIcon style={details_icon} className="details-icon" />
            </div>
            <div className="icon-container">
              <LocalCafeIcon style={details_icon} className="details-icon" />
            </div>
            <div className="icon-container">
              <CalendarTodayIcon
                style={details_icon}
                className="details-icon"
              />
            </div>
          </div>
          <div style={details_content} className="details-content">
            <div style={icon_container} className="icon-container">
              <CameraAltIcon style={details_icon} className="details-icon" />
            </div>
            <div className="icon-container">
              <PeopleAltIcon style={details_icon} className="details-icon" />
            </div>
            <div className="icon-container">
              <LocationOnIcon style={details_icon} className="details-icon" />
            </div>
          </div>
          <div style={details_content} className="details-content">
            <div style={icon_container} className="icon-container">
              <ErrorOutlineIcon style={details_icon} className="details-icon" />
            </div>
            <div className="icon-container">
              <PeopleAltIcon style={details_icon} className="details-icon" />
            </div>
            <div className="icon-container">
              <LocationOnIcon style={details_icon} className="details-icon" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const add_place_container_img = {
  width: "100%",
};

const add_place_details = {
  backgroundColor: "red",
  color: "white",
  height: "100vh",
};
const add_place_details_h3 = {
  textAlign: "center",
};

const details_content = {
  display: "flex",
  justifyContent: "space-around",
  marginTop: "2rem",
  width: "100%",
  flexWrap: "wrap",
};

const icon_container = {
  border: "1px solid white",
  width: "15%",
  textAlign: "center",
  padding: "0.5rem",
  borderRadius: "5px",
};

const details_icon = {
  fontSize: "2rem !important",
};

const btn_add_place = {
  backgroundColor: "black",
  display: "block",
  margin: "0% auto",
  marginTop: "1.2rem",
  padding: "0.7rem 1.5rem",
};

const user_place_attachment_container_top = {
  display: "flex",
  justifyContent: "space-evenly",
};

const top_left = {
  display: "flex",
  alignItems: "center",
  border: "1px solid white",
  borderRadius: "100px",
  marginTop: "1.5rem",
  justifyContent: "space-between",
  width: "150px",
};
const top_right = {
  display: "flex",
  alignItems: "center",
  border: "1px solid white",
  borderRadius: "100px",
  marginTop: "1.5rem",
  justifyContent: "space-between",
  width: "150px",
};

const top_pagraph_content = {
  paddingLeft: ".5rem",
};

const icon_container_place_details = {
  backgroundColor: "black",
  borderRadius: "0px 25px 25px 0px",
  padding: ".1rem",
};

const visited_style = {
  backgroundColor: Data.isThere ? "green" : "red",
};
