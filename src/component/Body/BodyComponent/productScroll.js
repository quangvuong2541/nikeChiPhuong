import { Skeleton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  title: {
    fontSize: 24,
    marginBottom: 32,
    textAlign: "left",
  },
  container: {
    padding: 0,
    whiteSpace: "nowrap",
    overflowX: "hidden",
    cursor: "pointer",
    "&:hover": {
      overflowX: "scroll",
    },
    "&::-webkit-scrollbar": {
      backgroundColor: "#f5f5f5",
      height: 8,
    },
    "&::-webkit-scrollbar-track": {
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
      borderRadius: 10,
      backgroundColor: "#f5f5f5",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: 10,
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
      backgroundColor: "#757575",
    },
  },
  product: {
    width: 390,
    listStyle: "none",
    display: "inline-block",
    marginRight: 20,
    marginBottom: 40,
  },
  productImage: {
    "&:hover": {
      opacity: 0.7,
    },
    width: "100%",
    transition: "opacity 1s",
  },
  productDetailContainer: {
    fontSize: 16,
    display: "flex",
    marginTop: 12,
    lineHeight: 1.5,
    whiteSpace: "normal",
    textAlign: "left",
  },
  productDetail: {
    flex: "0 0 300px",
  },
  price: {
    flex: "1 1 auto",
    textAlign: "left",
  },
  productType: {
    color: "#757575",
  },
});

const ProductScroll = () => {
  const classes = useStyles();
  const data = useSelector((state) => state.reducerURL.data);
  const isLoading = useSelector((state) => state.reducerURL.isLoading);
  //console.log(data);
  const products = data.slice(0, 5).map((item, index) => {
    return (
      <li key={index} className={classes.product}>
        {/* <img src={item.img} className={classes.productImage} /> 
        //phiên bản cũ chưa add path để nhấn vô hình ảnh*/}

        {/* new version that use react router to add path */}
        <Link to={{ pathname: `/detailProduct/${item._id}` }}>
          <img src={item.img} className={classes.productImage} />
        </Link>

        <div className={classes.productDetailContainer}>
          <div className={classes.productDetail}>
            <div className={classes.productType}>{item.name}</div>
            <div className={classes.productType}>{item.message}</div>
          </div>
        </div>
        <div className={classes.price}>{item.price.toLocaleString()}VNĐ</div>
      </li>
    );
  });

  const listScrollLazyLoading = [];
  for (let i = 0; i < 5; i++) {
    listScrollLazyLoading.push(
      <li className={classes.product} key={i}>
        <Skeleton width="100%">
          <img
            className={classes.productImage}
            src="https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/b0cccd97-5dc7-4dba-b720-ab7863109ebf/exploration-series-basketball-t-shirt-8dkWTQ.jpg"
          />
        </Skeleton>
        <div className={classes.productDetailContainer}>
          <div className={classes.productDetail}>
            <Skeleton width="70%">
              <div className={classes.productType}> product</div>
            </Skeleton>
            <Skeleton width="70%">
              <div className={classes.productType}> product</div>
            </Skeleton>
          </div>
          <Skeleton>
            <div className={classes.price}> 2,000,000 VNĐ</div>
          </Skeleton>
        </div>
      </li>
    );
  }
  return (
    <div>
      <div className={classes.title}> Clean Looks, Sustainable Materials</div>

      {isLoading ? (
        <ul className={classes.container}>{listScrollLazyLoading}</ul>
      ) : (
        <ul className={classes.container}>{products}</ul>
      )}
    </div>
  );
};

export default ProductScroll;
