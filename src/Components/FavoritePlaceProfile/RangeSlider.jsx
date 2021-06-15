import React, { Component } from "react";
import WhatshotIcon from "@material-ui/icons/Whatshot";
export class RangeSlider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="slider">
        <input
          style={range_style}
          type="range"
          min="0"
          max={this.props.maxCapacity}
          value={this.props.currentCapacity}
        />
      </div>
    );
  }
}

const range_style = {
  width: "100%",
};

const container = {
  display: "flex",
  alignItems: "center",
  border: "1px solid white",
  borderRadius: "100px",
  marginTop: "1.5rem",
  justifyContent: "space-between",
  width: "150px",
};
