import React from "react";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { Alert, Grid, Modal, Backdrop, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";

import CloseIcon from "@mui/icons-material/Close";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 99,
  },
  paper: {
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: "none",
    // padding: theme.spacing(2, 4, 3),
    height: 400,
    width: 500,
  },
  img: {
    width: 200,
    height: 200,
  },
  alert: {
    margin: "10px 0px",
  },
  iconClose: {
    cursor: "pointer",
  },
  Checkout: {
    padding: "20px 16px",
  },
  CheckoutButton: {
    width: "100%",
    color: "white",
    backgroundColor: "black",
    padding: "18px 24px",
    outline: 0,
    borderRadius: 30,
    border: "none",
    cursor: "pointer",
    fontSize: 16,
    marginBottom: 12,
  },
}));
const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });
  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});
Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

const Modaltransition = ({
  open,
  handleOpen,
  handleClose,
  productDispatch,
}) => {
  const classes = useStyles();
  //điều hướng trang
  const navigate = useNavigate();

  //time to closse popup
  setTimeout(() => {
    handleClose();
  }, 10000);

  const products = useSelector((state) => state.reducerCart.products);
  //console.log(products);
  const sumQuantity = products.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  return (
    <Modal
      open={open}
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      className={classes.modal}
      closeAfterTransition
      BackdropProps={{ timeout: 500 }}
    >
      {/* <Fade in={open}> */}
      <div className={classes.paper}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={11}>
            <Alert severity="success" className={classes.alert}>
              Added to Bag
            </Alert>
          </Grid>
          <Grid item xs={1}>
            <CloseIcon className={classes.iconClose} onClick={handleClose} />
          </Grid>
          <Grid item xs={6}>
            <img src={productDispatch.img} className={classes.img} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="h6">
              {productDispatch.name}
            </Typography>
            <Typography variant="p" component="p">
              {productDispatch.message}
            </Typography>
            <Typography variant="p" component="p">
              Size {productDispatch.name}
            </Typography>
            <Typography variant="inherit" component="span">
              {productDispatch.price.toLocaleString()}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.Checkout}>
              {/* to={{pathname: `/cart/${item._id}`}} */}
              <Link to="/cart">
                <button className={classes.CheckoutButton}>
                  View Bag({sumQuantity})
                </button>
              </Link>
            </div>
          </Grid>
          <Grid item xs={6}>
            <Link to="/cart">
              <button
                className={classes.CheckoutButton}
                //   onClick={() => {
                //     history.push("/cart");
                //   }}
              >
                Checkout
              </button>
            </Link>
          </Grid>
        </Grid>
      </div>
      {/* </Fade> */}
    </Modal>
  );
};

export default Modaltransition;
