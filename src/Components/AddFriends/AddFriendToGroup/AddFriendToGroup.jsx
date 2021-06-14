import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import "./AddToGroup.css";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { AddFriendToGroupUser } from "./AddFriendToGroupUser";

const styles = (theme) => ({
  root: {
    width: "100%",
    padding: "1rem",
  },
  container: {
    padding: "1rem",
  },
  formControl: {
    flexDirection: "row-reverse !important",
    justifyContent: "space-between",
    width: "100%",
  },
});

class AddFriendToGroup extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Accordion id="add-to-group-container" className={classes.root}>
          <FormControlLabel
            control={<Checkbox />}
            label={<AddFriendToGroupUser username={this.props.username} />}
            className={classes.formControl}
          />
        </Accordion>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AddFriendToGroup);
