import React from "react";
import SignIn from "./NavMainComponents/SignIn";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  nav: {
    backgroundColor: "white",
    color: "black",
    paddingLeft: 36,
    paddingRight: 38,
    position: "relative",
    boxShadow: "none",
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
  
    zIndex: 1101,
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    padding: 0,
    minHeight: 36,
  },
  jordan: {
    height: 24,
    width: 24,
    "&:hover": {
      opacity: 0.7,
    },
  },
  linkJordan: {
    padding: "0 12px",
    height: 34,
    display: "flex",
    alignItems: "center",
  },
  nav1: {
    height: 34,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  nav1Menu: {
    margin: "0 12px",
    textDecoration: "none",
    color: "black",
    fontSize: 12,
    "&:hover": {
      color: "grey",
    },
    cursor: "pointer",
  },
  helpMenuContainer: {
    padding: "24px 24px 24px 18px",
    position: "absolute",
    right: 130,
    zIndex: 10,
    width: 200,
    fontSize: 14,
    borderRadius: 10,
    textAlign: "left",
    backgroundColor: "white",
  },
  helpMenuHeader: {
    padding: "4px 8px",
    marginBottom: 12,
    fontSize: 16,
    cursor: "pointer",
  },
  helpMenuItem: {
    color: "#757575",
    padding: "4px 8px",
    cursor: "pointer",
    "&:hover": {
      color: "black",
    },
  },
}));

export default function NavSub() {
  const classes = useStyles();

  const [helpMenu, setHelpMenu] = React.useState(false);

  return (
    <div className={classes.toolbar} id="navsub">
      <Toolbar className={classes.nav}>
        <Link  to="/home" id="jordan" className={classes.linkJordan}>
          {/* home */}
        </Link>

        <Typography variant="h6" className={classes.title}></Typography>
        <div className={classes.nav1}>
          <div
            onMouseOver={() => setHelpMenu(true)}
            onMouseLeave={() => setHelpMenu(false)}
          >
            <span href="#" className={classes.nav1Menu}>
              Help
            </span>
            {helpMenu && (
              <div className={classes.helpMenuContainer}>
                <div className={classes.helpMenuHeader}>Help</div>
                <div className={classes.helpMenuItem}>Order Status</div>
                <div className={classes.helpMenuItem}>
                  Dispatch and Delivery
                </div>
                <div className={classes.helpMenuItem}>Returns</div>
                <div className={classes.helpMenuItem}>Contact Us</div>
                <div className={classes.helpMenuItem}>Privacy Policy</div>
                <div className={classes.helpMenuItem}>Terms of Sale</div>
                <div className={classes.helpMenuItem}>Terms of Use</div>
                <div className={classes.helpMenuItem}>Send Us Feedback</div>
              </div>
            )}
          </div>
          |
          <SignIn />
        </div>
      </Toolbar>
    </div>
  );
}
