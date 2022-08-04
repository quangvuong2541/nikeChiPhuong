import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Hidden,
  Skeleton,
} from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/system";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  ProductContainer: { padding: "0 44px", fontSize: 16, lineHeight: 1.7 },
  ProductImage: {
    width: "100%",
  },
  image: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
});

const ProductImage = ({ detailProduct, index }) => {
  const classes = useStyles();
  const isLoading = useSelector((state) => state.reducerURL.isLoading);
  var listLazyLoad = [];
  for (let i = 0; i < 6; i++) {
    listLazyLoad.push(
      <Grid item xs={6} key={i}>
        <Skeleton animation="wave">
          <img
            className={classes.ProductImage}
            src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e0c08734-caa0-4021-97ec-90b6945dfadb/air-force-1-shadow-shoe-klCJXd.jpg"
          />
        </Skeleton>
      </Grid>
    );
  }
  //console.log(detailProduct);

  return (
    <div>
      <Hidden smDown>
        {isLoading ? (
          <Grid container className={classes.ProductContainer} spacing={2}>
            {listLazyLoad}
          </Grid>
        ) : (
          <Grid container className={classes.ProductContainer} spacing={2}>
            {detailProduct.imgDetails[index].imgs.map((item, key) => {
              return (
                <Grid key={key} item xs={6}>
                  <img className={classes.ProductImage} src={item.img} />
                </Grid>
              );
            })}
          </Grid>
        )}
      </Hidden>

      <Hidden mdUp>
        <Container maxWidth="xl">
          {detailProduct.imgDetails[index].imgs.map((item, key) => {
            return (
              <Card className={classes.image} key={key}>
                {isLoading ? (
                  <Skeleton>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        className={item.img}
                        image={item.img}
                        title="Contemplative Reptile"
                      />
                    </CardActionArea>
                  </Skeleton>
                ) : (
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      className={item.img}
                      image={item.img}
                      title="Contemplative Reptile"
                    />
                  </CardActionArea>
                )}
              </Card>
            );
          })}
        </Container>
      </Hidden>
    </div>
  );
};

export default ProductImage;
