import React from 'react';
import IconButton from '@mui/material/IconButton';
import {Link} from "react-router-dom"
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
    nike:{
        width: 59.62,
        hegiht: 20.87,
        "&:hover": {
          opacity: 0.7,
        },
        position: "relative"
    },
    linkNike:{
        padding: '0 12px',
        height: 60,
        width: 84,
        position:"absolute",
        left: 36,
        top:20
        
      
    },
}));

export default function LogoNike(){
    const classes = useStyles();
    return (
        <div className={classes.linkNike}>
            <Link to="/"  ><img src="https://www.logomaker.com/wp-content/uploads/2018/05/2000px-Logo_NIKE.png" alt="" className={classes.nike} /></Link>
        </div>
    )
}