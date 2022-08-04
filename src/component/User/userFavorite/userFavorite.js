import React from "react";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import * as action from "../../Cart/module/Actions/Action";
import * as ActionType from "../../Cart/module/Contants/Contants";
import { Grid, Hidden } from "@mui/material";
import { Action } from "history";

const useStyles = makeStyles((theme) => ({
  Container: {
    padding: "50px 50px 12px",
    fontSize: 16,
  },
  Header: {
    fontSize: 24,
    padding: "15px 0",
    backgroundColor: "white",
    display: "block",
    boxShadow: "none",
    zIndex: 2,
  },
  Button: {
    fontSize: 16,
    padding: "8px 24px",
    backgroundColor: "white",
    borderRadius: 20,
    border: "1px #ccccccc solid",
    outline: "none",
    cursor: "pointer",
    lineHeight: 1.75,
  },
  FavoriteContainer: {
    padding: "40px 0",
  },
  ProductImg: {
    width: "100%",
    display: "block",
  },
  ProductDetail: {
    margin: "12px 0 40px",
    lineHeight: 1.5,
  },
  ProductPrice: {
    float: "right",
  },
  ProductType: {
    color: "#757575",
  },
  SelectSizeContainer: {
    padding: "20px 0 40px",
  },
}));

const UserFavoriteComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userFavorite = JSON.parse(localStorage.getItem("userFavor"));
  const [edit, setEdit] = React.useState(userFavorite);

  const nullArray = [];
  const handleNull = () => {
    if (edit === null) {
      return <h1> Item added to your Favorite will be saved here</h1>;
    } else if (edit.length == nullArray.length) {
      return <h1>Item added to your Favorite will be saved here</h1>;
    }
  };

  return (
    <div className={classes.Container}>
      <div>
        <Grid container spacing={4}>
          {handleNull()}
          {edit &&
            edit.map((item, index) => {
              return (
                <Grid item xs={6} lg={4} key={index}>
                  <img className={classes.ProductImg} src={item?.img} />
                  <div className={classes.ProductDetail}>
                    <div>
                      {item?.name}
                      <Hidden>
                        <span className={classes.ProductDetail}>
                          {item?.price.toLocaleString()} Đ
                        </span>
                      </Hidden>
                    </div>
                    <div className={classes.ProductType}>
                      Size: {item?.size}
                    </div>
                    <div className={classes.SelectSizeContainer}>
                      {/* Add to cart Button */}
                      <button
                        className={classes.Button}
                        onClick={() => {
                          dispatch(
                            action.createAction({
                              type: ActionType.ADD_TO_CARD,
                              payload: item,
                            })
                          );
                          alert("Add to cart successfully");
                        }}
                      >
                        Add to Cart
                      </button>

                      {/* Remove from Fav button */}
                      <button
                        className={classes.Button}
                        onClick={() => {
                          dispatch(
                            action.createAction({
                              type: ActionType.DELETE_FAVOR,
                              payload: item,
                            })
                          );
                          dispatch(action.postFavoriteCart());
                          const userFavor = JSON.parse(
                            localStorage.getItem("userFavor")
                          );
                          setEdit(userFavor);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </Grid>
              );
            })}
        </Grid>
      </div>
    </div>
  );
};

export default UserFavoriteComponent;
