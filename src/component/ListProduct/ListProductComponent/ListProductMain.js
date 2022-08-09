import React from "react";
import { Grid, Skeleton } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  ListProductMainContainer: {
    padding: "0 40px",
    // [theme.breakpoints.down("sm")]: {
    //   padding: 0
    // }
  },
  ProductNotFound: {
    fontSize: 28,
    textAlign: "center",
    color: "#111",
  },
  ProductLink: {
    color: "black",
    textDecoration: "none",
    cursor: "pointer",
    fontSize: 16,
    "&:hover": {
      "& $ProductDetailColorway": {
        display: "none",
      },
      "& $ProductColorway": {
        display: "block",
      },
    },
  },
  ProductImage: {
    width: "100%",
    height: "300px",
    // [theme.breakpoints.down("xs")]: {
    //   height: "150px",
    //   width: "100%",
    // }
  },
  ProductDetailColorway: {
    lineHeight: 1.75,
    display: "block",
  },
  ProductDetail: {
    lineHeight: 1.75,
    display: "block",
  },
  ProductColorway: {
    display: "none",
  },
  ProductColorwayImage: {
    width: 36,
    height: 36,
  },
  Message: {
    paddingTop: 12,
    color: "#fa5400",
  },
  ProductType: {
    color: "#757575",
  },
  Price: {
    paddingTop: 10,
  },
}));

const ListProductMain = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [imgURL, setImgURL] = React.useState({
    URL: "",
    index: null,
  });
  return <div>ListProductMain</div>;
};

export default ListProductMain;
