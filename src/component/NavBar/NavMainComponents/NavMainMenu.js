import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Hidden } from "@mui/material";
import MenMenu from "./MenMenu";

const useStyles = makeStyles({
  mainMenuContainer: {},
  mainMenu: {},
  mainMenuChoice: {},
});

const NavMainMenu = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainMenuContainer}>
      <div className={classes.mainMenu}>
        <div className={classes.mainMenuChoice}>
          <Hidden lgDown>
            <Container maxWidth="xl">
              {/*menu for men  */}
              <MenMenu />
            </Container>
          </Hidden>
        </div>
      </div>
    </div>
  );
};

export default NavMainMenu;
