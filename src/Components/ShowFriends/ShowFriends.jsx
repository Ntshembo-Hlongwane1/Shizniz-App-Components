import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Data from "./data.json";
import { Avatar } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import "./ShowFriends.css";

const styles = (theme) => ({
  root: {
    width: "100%",
    padding: "1rem",
  },
});

class ShowFriends extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Accordion style={accordin_style}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p
              style={heading_style}
            >{`Friends (Default Group)[${Data["Default"].length}]`}</p>
          </AccordionSummary>
          <AccordionDetails>
            <div style={friends_container}>
              {Data["Default"].map((user, idx) => {
                return (
                  <div style={friend_element} className="friends-list">
                    <Avatar src={user.profile} alt="User profile image" />
                    <p style={username_style}>{user.username}</p>
                  </div>
                );
              })}
            </div>
          </AccordionDetails>
          <div style={card_footer}>
            <span>Add To Group</span>
            <AddCircleIcon />
          </div>
        </Accordion>
        <Accordion style={accordin_style}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p
              style={heading_style}
            >{`Best Friends [${Data["BestFriends"].length}]`}</p>
          </AccordionSummary>
          <AccordionDetails>
            <div style={friends_container}>
              {Data["BestFriends"].map((user, idx) => {
                return (
                  <div style={friend_element} className="friends-list">
                    <Avatar src={user.profile} alt="User profile image" />
                    <p style={username_style}>{user.username}</p>
                  </div>
                );
              })}
            </div>
          </AccordionDetails>
          <div style={card_footer}>
            <span>Add To Best Friends</span>
            <AddCircleIcon />
          </div>
        </Accordion>
        <Accordion style={accordin_style}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p
              style={heading_style}
            >{`Work Friends [${Data["WorkFriends"].length}]`}</p>
          </AccordionSummary>
          <AccordionDetails>
            <div style={friends_container}>
              {Data["WorkFriends"].map((user, idx) => {
                return (
                  <div style={friend_element} className="friends-list">
                    <Avatar src={user.profile} alt="User profile image" />
                    <p style={username_style}>{user.username}</p>
                  </div>
                );
              })}
            </div>
          </AccordionDetails>
          <div style={card_footer}>
            <span>Add To Work Friends</span>
            <AddCircleIcon />
          </div>
        </Accordion>
        <div style={component_footer}>
          <div style={create_group_style}>
            <AddCircleIcon />
            <span>Create group</span>
          </div>
          <div style={add_friend_style}>
            <span>Add Friend</span>
            <AddCircleIcon />
          </div>
        </div>
      </div>
    );
  }
}

const heading_style = {
  fontSize: "1rem",
};

const accordin_style = {
  marginBottom: "1rem",
};

const friends_container = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
};

const friend_element = {
  width: "33.3%",
  displa: "flex",
  alignItems: "center",
  marginBottom: "1rem",
};

const username_style = {
  marginLeft: ".4rem",
};

const card_footer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  cursor: "pointer",
  marginBottom: ".5rem",
};

const component_footer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const create_group_style = {
  display: "flex",
  alignItems: "center",
};
const add_friend_style = {
  display: "flex",
  alignItems: "center",
};
export default withStyles(styles, { withTheme: true })(ShowFriends);
