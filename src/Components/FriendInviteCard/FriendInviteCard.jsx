import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CherionRight from "@material-ui/icons/ChevronRightOutlined";
import "./FriendInviteCard.css";
import { InviteCardHeading } from "./InviteCardHeading";

const styles = (theme) => ({
  root: {
    width: "100%",
    padding: "1rem",
  },
});

class FriendInviteCard extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Accordion id="invite-card">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <InviteCardHeading username={this.props.username} />
          </AccordionSummary>
          <AccordionDetails id="invite-card-details">
            <button className="btn btn-view-profile">View Profile</button>
            <button className="btn btn-cancel">Cancel Invite</button>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(FriendInviteCard);
