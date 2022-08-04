import React from "react";
import NavMainMenu from "./NavMainComponents/NavMainMenu";
import NavMainFeature from "./NavMainComponents/NavMainFeature";
import LogoNike from "./NavMainComponents/LogoNike";
import SearchBox from "./NavMainComponents/SearchBox";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { AppBar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme } from '@mui/material/styles';
import SignIn from "./NavMainComponents/SignIn";

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
const theme = createTheme({
  nav: {
    backgroundColor: "white",
    color: "black",
    position: "sticky",
    height: 60,
    boxShadow: "none",
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
  },
});
export default function NavMain(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* <CssBaseline /> */}

      <HideOnScroll {...props}>
      
        <AppBar >
          <Toolbar className={classes.nav}>
            <NavMainMenu />
          
            <LogoNike />
        
            <NavMainFeature />
       
          </Toolbar>

          <SearchBox />
        </AppBar>
      </HideOnScroll>
      <div id="fallback" className={classes.fallback}></div>
   
    </React.Fragment>
  );
}
