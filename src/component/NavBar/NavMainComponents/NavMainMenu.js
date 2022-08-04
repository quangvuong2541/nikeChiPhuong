import React from 'react';
import MenMenu from './MenMenu';
import WomenMenu from './WomenMenu';
import KidsMenu from './KidsMenu';
import CustomiseMenu from './CustomiseMenu';
import SaleMenu from './SaleMenu';
import SNKRSMenu from './SNKRSMenu';
import { makeStyles } from '@mui/styles';
import { Hidden } from '@mui/material';
import { Container } from '@mui/material';
import SignIn from './SignIn';


const useStyles = makeStyles((theme) => ({
    mainMenuContainer: {
        flexGrow: 1,
        textAlign:'center',
        
    },
    mainMenu:{
        backgroundColor: 'transparent',
        position: 'absolute',
        width: '100%',
        height: 64,
        top: 0,
        left: 0,
    },
    mainMenuChoice:{
        margin: '0 auto',
        marginTop: 20,
    }, 
}));

export default function NavMainMenu(){
    const classes = useStyles();

    return (
        <div className={classes.mainMenuContainer}>
            <div className={classes.mainMenu}>
            <div className={classes.mainMenuChoice}>
                <Hidden lgDown>
                    <Container maxWidth="xl">
                        <MenMenu />
                        <WomenMenu />
                        <KidsMenu />
                        <CustomiseMenu />
                        <SaleMenu />
                        <SNKRSMenu /> 
                        <SignIn />
                    </Container>
                </Hidden>
                <Hidden xlUp>
                    <MenMenu />
                    <WomenMenu />
                    <KidsMenu />
                    <CustomiseMenu />
                    <SaleMenu />
                    <SNKRSMenu /> 
                    <SignIn />
                </Hidden>
                
    
            </div>  
            </div>
        </div>
    )
}