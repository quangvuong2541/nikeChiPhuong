import { makeStyles } from "@mui/styles";
import React from "react";
import Carousel from "./BodyComponent/carousel";
import MoreNike from "./BodyComponent/moreNike";
import Trending from "./BodyComponent/trending";
import ProductScroll from "./BodyComponent/productScroll";
const useStyle = makeStyles({
  body: {
    padding: "0 44px 50px",
  },
  bodyComponents: {
    marginTop: 84,
  },
});

export default function Body(props) {
  const classes = useStyle();
  return (
    <div className={classes.body}>
      {/* Carousel */}
      <div className={classes.bodyComponents}>
        <Carousel carouselImg={props.carouselImg} />
      </div>
      {/* Trending */}
      <div className={classes.bodyComponents}>
        <Trending
          titleTrending={props.titleTrending}
          dataTrending={props.dataTrending}
        />
      </div>
      {/* MoreNike */}
      <div className={classes.bodyComponents}>
        <MoreNike
          dataMoreNike={props.dataMoreNike}
          titleMoreNike={props.titleMoreNike}
        />
      </div>
      {/* Product Scroll */}
      <div className={classes.bodyComponents}>
        <ProductScroll />
      </div>
    </div>
  );
}
