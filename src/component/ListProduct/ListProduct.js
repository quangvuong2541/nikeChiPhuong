import React from "react";
import { makeStyles } from "@mui/styles";
import { AppBar, Grid, Hidden } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import API from "../../axios/API";
import * as ActionType from "./Module/Constants/constants";
import * as action from "./Module/Actions/action";
import ListProductMain from "./ListProductComponent/ListProductMain";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 44,
    marginBottom: 44,
    padding: "0 20px",
    // [theme.breakpoints.down("sm")]: {
    //   padding: 0,
    // },
  },
  Head: {
    padding: "15px 0 12px",
    backgroundColor: "white",
    display: "block",
    color: "black",
    boxShadow: "none",
    zIndex: 1,
  },
  FilterButton: {
    float: "right",
    display: "flex",
    alignItems: "center",
  },
  SearchName: {
    fontSize: 24,
    display: "inline-block",
  },
  HideFilter: {
    fontSize: 16,
    paddingRight: 25,
    display: "flex",
    alignItems: "center",
    border: "none",
    outline: "none",
    cursor: "pointer",
    backgroundColor: "white",
  },
  IconFilter: {
    marginLeft: 8,
    width: 16,
    height: 16,
  },
  SortBy: {
    fontSize: 16,
    padding: "0 6px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    border: "none",
    outline: "none",
    backgroundColor: "white",
  },
  SortByItemContainer: {
    padding: "24px 28px 15px 0",
    textAlign: "right",
    position: "absolute",
    right: 0,
    zIndex: 2,
    width: 160,
    backgroundColor: "white",
  },
  SortByItem: {
    lineHeight: 1.75,
  },
  SortByLink: {
    color: "black",
    textDecoration: "none",
    "&:hover": {
      color: "#757575",
    },
    FilterButton: {
      float: "right",
      display: "flex",
      alignItems: "center",
    },
    SearchName: {
      fontSize: 24,
      display: "inline-block",
    },
    HideFilter: {
      fontSize: 16,
      paddingRight: 25,
      display: "flex",
      alignItems: "center",
      border: "none",
      outline: "none",
      cursor: "pointer",
      backgroundColor: "white",
    },
    IconFilter: {
      marginLeft: 8,
      width: 16,
      height: 16,
    },
    SortBy: {
      fontSize: 16,
      padding: "0 6px",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      border: "none",
      outline: "none",
      backgroundColor: "white",
    },
    SortByItemContainer: {
      padding: "24px 28px 15px 0",
      textAlign: "right",
      position: "absolute",
      right: 0,
      zIndex: 2,
      width: 160,
      backgroundColor: "white",
    },
    SortByItem: {
      lineHeight: 1.75,
    },
    SortByLink: {
      color: "black",
      textDecoration: "none",
      "&:hover": {
        color: "#757575",
      },
      fontSize: 16,
    },
    ListProductContainer: {
      paddingTop: 32,
    },
    fontSize: 16,
  },
  ListProductContainer: {
    paddingTop: 32,
  },
}));

const ListProduct = () => {
  const classes = useStyles();
  const [hiddenFilter, setHiddenFilter] = React.useState(false);
  const [sortBy, setSortBy] = React.useState(false);
  const gender = useSelector((state) => state.reducerURL.gender);
  const typeProduct = useSelector((state) => state.reducerURL.typeProduct);

  const GenderAndTypeProduct = {
    gender: gender,
    typeProduct: typeProduct,
  };
  const dispatch = useDispatch();
  const data = useSelector((state) => state.reducerURL.data);
  const dataSearchList = useSelector(
    (state) => state.reducerURL.dataSearchList
  );
  const dataSearchInput = useSelector(
    (state) => state.reducerURL.dataSearchInput
  );

  React.useEffect(() => {
    const callAPI = async () => {
      try {
        if (gender === "search" && typeProduct === "search") {
          const res = await API("product", "GET");
          const dataAll = res.data;
          console.log(dataAll);
          const dataSearch = dataAll.filter((item, index) => {
            return (
              item.name.toLowerCase().indexOf(dataSearchInput.toLowerCase()) >
              -1
            );
          });
          dispatch(
            action.createAction({
              type: ActionType.FETCH_API_LISTPRODUCT,
              payload: dataSearch,
            })
          );
        } else {
          dispatch(
            action.createAction({
              type: ActionType.IS_LOADING_lIST_PRODUCT,
              payload: true,
            })
          );
          const res = await API(
            `product/?gender=${gender}&typeProduct=${typeProduct}`,
            "GET"
          );
          dispatch(
            action.createAction({
              type: ActionType.FETCH_API_LISTPRODUCT,
              payload: res.data,
            })
          );
          dispatch(
            action.createAction({
              type: ActionType.IS_LOADING_lIST_PRODUCT,
              payload: false,
            })
          );
        }
        localStorage.setItem(
          "GenderAndTypeProduct",
          JSON.stringify(GenderAndTypeProduct)
        );
      } catch (error) {
        console.log({ ...error });
      }
      return () => {
        dispatch(
          action.createAction({
            type: ActionType.CHANGE_GENDER_TYPEPRODUCT,
            payload: {
              gender: null,
              typeProduct: null,
            },
          })
        );
      };
    };
    callAPI();
  }, [gender, typeProduct, dataSearchInput]);

  //call data from redux
  const dataFilter = useSelector((state) => state.reducerURL.dataFilter);
  //console.log(dataFilter);

  return (
    <div className={classes.container}>
      <AppBar position="sticky" className={classes.Head}>
        {gender == "search" && typeProduct == "search" ? (
          <div className={classes.SearchName}>
            {dataSearchInput}
            {/* data sort */}
          </div>
        ) : (
          <div className={classes.SearchName}></div>
        )}
      </AppBar>

      {/* List Product */}
      <div className={classes.ListProductContainer}>
        <Grid container spacing={2}>
          <Hidden smDown>{/* Hidden Filter */}</Hidden>

          {/* List Product */}
          <Grid item sm={12} md={10}>
            <ListProductMain dataFilter={dataFilter} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ListProduct;
