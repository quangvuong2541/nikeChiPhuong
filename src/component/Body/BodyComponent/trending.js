import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyle = makeStyles({
  title: {
    fontSize: 26,
    marginBottom: 32,
    textAlign: "left",
  },
  contentLink: {
    color: "black",
    textDecoration: "none",
  },
  trendingContainer: {
    height: 700,
    display: "flex",
    alignItems: "flex-end",
    backgroundPosition: "center center",
  },
  info: {
    padding: 50,
  },
  trendingName: {
    color: "white",
    fontSize: 26,
    fontWeight: 400,
    marginBottom: 30,
  },
  button: {
    color: "black",
    textDecoration: "none",
    margin: "0 10px 10px 0 ",

    padding: "8px 28px",
    backgroundColor: "white",
    borderRadius: 20,
    fontSize: 18,

    "&:hover": {
      opacity: 0.8,
    },
  },
});

const Trending = (props) => {
  const classes = useStyle();
  return (
    <div>
      <div className={classes.title}>{props.titleTrending}</div>
      <Grid container spacing={4}>
        {props.dataTrending.map((item, index) => {
          return (
            <Grid item xs={12} sm={6} key={index}>
              <a href="#a" className={classes.contentLink}>
                <div
                  className={classes.trendingContainer}
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  <div className={classes.info}>
                    <div className={classes.trendingName}> {item.title} </div>
                  </div>
                  <div>
                    <p className={classes.button}> {item.button} </p>
                  </div>
                </div>
              </a>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Trending;
