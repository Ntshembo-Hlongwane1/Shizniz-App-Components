import React, { Component } from "react";
import { Avatar } from "@material-ui/core";

export class AddFriendToGroupUser extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={container_styles}>
        <Avatar src="" alt="User Profile" />
        <p style={username_style}>{this.props.username}</p>
      </div>
    );
  }
}

const container_styles = {
  display: "flex",
  alignItems: "center",
};

const username_style = {
  marginLeft: "1rem",
};
