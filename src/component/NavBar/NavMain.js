import React from "react";

import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { makeStyles } from "@mui/styles";
import { Outlet } from "react-router-dom";
import NavMainMenu from "./NavMainComponents/NavMainMenu";

/*Hide nav bar on scroll*/
function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  // console.log(trigger);

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

/*Style*/
const useStyles = makeStyles((theme) => ({
  nav: {
    backgroundColor: "white",
    color: "black",
    position: "sticky",
    height: 60,
    boxShadow: "none",
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
  },

  toolbar: {
    padding: 0,
  },
  fallback: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
}));

export default function NavMain(props) {
  const classes = useStyles();

  return (
    <div>
      <React.Fragment>
        {/* <CssBaseline /> */}

        <HideOnScroll {...props}>
          <AppBar className={classes.nav}>
            <Toolbar className={classes.toolbar}>
              <NavMainMenu />
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <div id="fallback" className={classes.fallback}></div>
      </React.Fragment>
    </div>
  );
}
