import React, { Component } from "react";
import { Avatar } from "@material-ui/core";

export class InviteCardHeading extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={container_style} id="invite-card-heading">
        <Avatar src={this.props.username} />
        <p style={username_style}>{this.props.username}</p>
      </div>
    );
  }
}

const container_style = {
  display: "flex",
  alignItems: "center",
};

const username_style = {
  marginLeft: "1rem",
};
