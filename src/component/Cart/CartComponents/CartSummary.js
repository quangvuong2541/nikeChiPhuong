import React from 'react'
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from 'react-redux';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import { Hidden } from '@mui/material';

import * as action from "../module/Actions/Action"
import { Navigate, useNavigate } from 'react-router-dom';
import Paypal from '../../Paypal/paypal';
import NavSub from '../../NavBar/NavSub';

const useStyles = makeStyles(theme => ({
  Summary: {
    padding: "0 20px",
   
  },
  Title: {
    fontSize: 22,
    marginBottom: 12
  },
  PriceDetail: {
    marginBottom: 8,

    lineHeight: 1.75
  },
  HelpIcon: {
    width: 16,
    height: 16,
    marginLeft: 8,
    cursor: "pointer"
  },
  Price: {
    float: "right"
  },
  TotalPrice: {
    margin: "12px 0",
    borderTop: "1px #cccccc solid",
    borderBottom: "1px #cccccc solid",
    padding: "14px 0",
    
  },
  Checkout: {
    padding: "20px 16px"
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
    marginBottom: 12
  },
  CheckoutMobileContainer: {
    width: "100%",
    padding: "16px 12px",
    position: "fixed",
    bottom: 0
  },
  HelpTooltip: {
    fontSize: 14,
    padding: "0 5px",
    width: 220,
    borderRadius: 2,
    lineHeight: 1.3,
    cursor: "pointer"
  }
}));

export default function CartSummary() {
  const classes = useStyles();

  const [openHelp, setOpenHelp] = React.useState(false);
  const handleHelpClose = () => {
    setOpenHelp(false);
  };
  const [checkout, setCheckOut] = React.useState(false);
  const dispatch = useDispatch()
  const products = useSelector(state => state.reducerCart.products);
  // cal sum
  const history = useNavigate();
  // console.log(history);
  
  const sumMoney = products.reduce((sum, item) => {
    return sum + item.quantity * item.price;
  }, 0);
  // when user click checkout
  const checkOut = () => {
    if (!JSON.parse(localStorage.getItem("user"))) { // kiểm login 
      alert("please sign in before checkout");
    } else {
      if (products.length > 0) {
        setCheckOut(true)
        // setOpen(true)
      }else{
        alert("please buy product before checkout");
      }
    }
  };
  const transactionSuccess = (data) => {
    console.log("success", data);
  //  handle data before send BE
      alert("Payment success");
      for (const item of products) {
        console.log(item.sizes);
         delete item.sizes 
         delete item.message
      }
      const  userLocal = JSON.parse(localStorage.getItem("user"));
      const {token} = userLocal
      const object = {
        products: products,
        isPayed: data.paid,
        description: "paypal"
      }
      dispatch(action.postAPICart(object,token,history))
  }
  const transactionLive = () => {
    for (const item of products) {
      delete item.sizes 
      delete item.message
   }
   const  userLocal = JSON.parse(localStorage.getItem("user"));
   const {token} = userLocal
   const object = {
     products: products,
     isPayed: false,
     description: "Payment on delivery"
   }
   dispatch(action.postAPICart(object,token,history))

  }

  const transactionError = (data) => {
    console.log("errror", data);
    setTimeout(() => {
      alert("Payment fail");
    }, 2000);
  }

  const transactionCancel = (data) => {
    console.log("errror", data);
  }

  const covertVNDtoUSD = () => {
    console.log(sumMoney);
    return (sumMoney / 23000).toFixed(2)
  }
  return (
    <div className={classes.Summary}>
      <div className={classes.Title}>Summary</div>
      <div className={classes.PriceDetail}>
        Subtotal
        <ClickAwayListener onClickAway={handleHelpClose}>
          <Tooltip
            arrow
            placement="bottom-end"
            onClose={handleHelpClose}
            open={openHelp}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title={
              <div className={classes.HelpTooltip}>
                The subtotal reflects the total price of your order, including
                taxes, before any applicable discounts. It does not include
                delivery costs and international transaction fees.
              </div>
            }
          >
            <HelpIcon
              className={classes.HelpIcon}
              onClick={() => setOpenHelp(!openHelp)}
            />
          </Tooltip>
        </ClickAwayListener>
        <div className={classes.Price}>{sumMoney.toLocaleString()}đ</div>
      </div>
      <div className={classes.PriceDetail}>
        Estimated Delivery & Handling
        <div className={classes.Price}>0₫</div>
      </div>
      <div className={classes.TotalPrice}>
        Total
        <div className={classes.Price}>
          <b>{sumMoney.toLocaleString()}</b>₫
        </div>
      </div>
      {!checkout && (
         <Hidden smDown>
         <div className={classes.Checkout}>
           <button
             className={classes.CheckoutButton}
             onClick={() => {
               checkOut();
              
             }}
           >
             Guess Checkout
           </button>
           <button className={classes.CheckoutButton}>Member Checkout</button>
         </div>
       </Hidden>
      )}
      <Hidden smDown>
      {
        checkout && (
          <Paypal 
          sum={covertVNDtoUSD()}
          transactionSuccess={transactionSuccess}
          transactionCancel={transactionCancel}
          transactionError={transactionError}
          />
        )
      }
       {
        checkout && (
          <button onClick = {transactionLive} className={classes.CheckoutButton}>Payment on delivery</button>
        )
      }
      </Hidden>
     

    </div>
  );
}