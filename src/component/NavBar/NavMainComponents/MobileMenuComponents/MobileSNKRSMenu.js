import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    MobileSaleMenuContainer:{
        padding: '10px 0',
    },
    MobileSaleMenu:{
        fontSize: 24,
        display: 'flex',
        alignItems: 'center',
        color: 'black',
        textDecoration: 'none',
    },
}));

export default function MobileSNKRSMenu(props){
    const classes = useStyles();

    return (
        <div className={classes.MobileSaleMenuContainer}>
            <a href="#a" className={classes.MobileSaleMenu}>
                SNKRS
            </a>
        </div>
    )
}