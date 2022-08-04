import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import React from "react";

const useStyle = makeStyles({
  title: {
    fontSize: 24,
    marginBottom: 32,
    textAlign: "left",
  },
  contentLine: {
    color: "black",
    textDecoration: "none",
  },
  moreNikeContainer: {
    height: 540,
    display: "flex",
    alignItems: "flex-end",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
  },
  info: {
    padding: 40,
  },
  shopLink: {
    color: "black",
    textDecoration: "none",
    margin: "0 8px 8px 0",
    padding: "8px 28px",
    backgroundColor: "white",
    borderRadius: 20,
    frontSize: 16,
    "&:hover": {
      opacity: 0.8,
    },
  },
});

const MoreNike = (props) => {
  const classes = useStyle();
  return (
    <div>
      <div className={classes.title}> {props.titleMoreNike}</div>
      <Grid container spacing={3}>
        {props.dataMoreNike.map((item, index) => {
          return (
            <Grid item xs={12} sm={4} key={index}>
              <div className={classes.contentLine}>
                <div
                  className={classes.moreNikeContainer}
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  <div className={classes.info}>
                    <div className={classes.shopLink}>{item.titleButton}</div>
                  </div>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default MoreNike;
