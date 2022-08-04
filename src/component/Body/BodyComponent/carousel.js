import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { makeStyles } from "@mui/styles";
import { CardActionArea, CardMedia, Container, Grid } from "@mui/material";
import Card from "@mui/material/Card";

const useStyles = makeStyles({
  image: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
});
const Carousel = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Grid item xs={12}>
        <Slider {...settings}>
          {props.carouselImg.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <Card className={classes.image}>
                  <CardActionArea>
                    <CardMedia component="img" image={item} />
                  </CardActionArea>
                </Card>
              </React.Fragment>
            );
          })}
        </Slider>
      </Grid>
    </Container>
  );
};

export default Carousel;
