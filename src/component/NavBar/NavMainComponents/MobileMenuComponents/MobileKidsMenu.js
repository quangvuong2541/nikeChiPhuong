import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {Link} from "react-router-dom"
import * as action from "../../../ListProduct/Module/Actions/action"
import *  as ActionType from "../../../ListProduct/Module/Constants/constants"
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom";
import { useLocation } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { Drawer } from '@mui/material';


const useStyles = makeStyles((theme) => ({
    MobileKidsMenuContainer:{
        padding: '10px 0',
    },
    MobileKidsMenu:{
        fontSize: 24,
        display: 'flex',
        alignItems: 'center',
        color: 'black',
        textDecoration: 'none',
    },
    ChevronRightIcon:{
        position: 'absolute',
        right: 35,
    },
    drawerPaper: {
        width: 320,
        [theme.breakpoints.down('xs')]: {
            width: 300,
        },
    },
    MobileMenuBack:{
        fontSize: 16,
        display: 'flex',
        alignItems: 'center',
        color: 'black',
        textDecoration: 'none',
        padding: '4px 0',
        marginBottom: 28,
    },
    mobileMenu: {
        marginTop: 26,
        padding: '0 36px 150px',
    },
    MobileMenuHeadline:{
        padding: '7px 0 7px 7px',
        marginBottom: 16,
        fontSize: 24,
    },
    MobileMenuChoiceContainer:{
        paddingLeft: 7,
    },
    MobileMenuChoice:{
        fontSize: 16,
        display: 'flex',
        alignItems: 'center',
        color: '#757575',
        textDecoration: 'none',
        padding: '5px 0',
    },
}));

export default function MobileMenMenu(props){
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useNavigate();

    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;
    
    const [menu, setMenu] = React.useState(0);
    const [menuCategory, setMenuCategory] = React.useState(0);

    const location = useLocation();

    return (
        <div className={classes.MobileKidsMenuContainer}>
            <div className={classes.MobileKidsMenu} onClick={ () => {setMenu(1)} }>
                Kids
                <ChevronRightIcon className={classes.ChevronRightIcon}/>
            </div>
            <Drawer
                container={container}
                variant="temporary"
                anchor="right"
                open={menu === 1 ? true : false}
                onClose={ () => {setMenu(0)} }
                classes={{
                    paper: classes.drawerPaper,
                }}
                ModalProps={{
                    keepMounted: true,
                }}
            >  
                <div className={classes.mobileMenu}>
                    <div className={classes.MobileMenuBack} onClick={ () => {setMenu(0)} }>
                        <ChevronLeftIcon style={{marginRight:'16px'}}/>
                        All
                    </div>
                    <div className={classes.MobileMenuHeadline}>
                        Kids
                    </div>
                    <div className={classes.MobileMenuChoiceContainer}>
                        <div className={classes.MobileMenuChoice} onClick={ () => {setMenuCategory(1)} }>
                            Boy's Shoes
                            <ChevronRightIcon className={classes.ChevronRightIcon}/>
                        </div>
                        <div className={classes.MobileMenuChoice} onClick={ () => {setMenuCategory(2)} }>
                            Boy's Clothing
                            <ChevronRightIcon className={classes.ChevronRightIcon}/>
                        </div>
                        <div className={classes.MobileMenuChoice} onClick={ () => {setMenuCategory(3)} }>
                            Girl's Shoes
                            <ChevronRightIcon className={classes.ChevronRightIcon}/>
                        </div>
                        <div className={classes.MobileMenuChoice} onClick={ () => {setMenuCategory(4)} }>
                            Girl's Clothing
                            <ChevronRightIcon className={classes.ChevronRightIcon}/>
                        </div>
                        <div className={classes.MobileMenuChoice} onClick={ () => {setMenuCategory(5)} }>
                            Accessories and Equipment
                            <ChevronRightIcon className={classes.ChevronRightIcon}/>
                        </div>
                        <div className={classes.MobileMenuChoice} onClick={ () => {setMenuCategory(6)} }>
                            Shop By Sport
                            <ChevronRightIcon className={classes.ChevronRightIcon}/>
                        </div>
                    </div>
                </div>
            </Drawer>

            <Drawer
                container={container}
                variant="temporary"
                anchor="right"
                open={menuCategory === 1 ? true : false}
                onClose={ () => {setMenuCategory(0)} }
                classes={{
                    paper: classes.drawerPaper,
                }}
                ModalProps={{
                    keepMounted: true,
                }}
            >  
                <div className={classes.mobileMenu}>
                    <div className={classes.MobileMenuBack} onClick={ () => {setMenuCategory(0)} }>
                        <ChevronLeftIcon style={{marginRight:'16px'}}/>
                        Kids
                    </div>
                    <div className={classes.MobileMenuHeadline}>Boys' Shoes</div>
                    <div className={classes.MobileMenuChoiceContainer}>
                        <a href="#a" className={classes.MobileMenuChoice}>Older Kids (3-6.5)</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Younger Kids (10-2.5)</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Baby and Toddler (1.5-9.5)</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Lifestyle</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Running</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Basketball</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Jordan</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Football</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Sandals and Slides</a>
                        <Link to="/listProduct" className={classes.MobileMenuChoice} 
                            onClick={()=>{ 
                                dispatch(action.createAction({type: ActionType.CHANGE_GENDER_TYPEPRODUCT,payload: {gender: "kid", typeProduct: "shoes"} }));
                                if(location.pathname === "/listProduct"){history.go(0)}
                            }}
                        >
                            All shoes
                        </Link>
                    </div>
                </div>
            </Drawer>

            <Drawer
                container={container}
                variant="temporary"
                anchor="right"
                open={menuCategory === 2 ? true : false}
                onClose={ () => {setMenuCategory(0)} }
                classes={{
                    paper: classes.drawerPaper,
                }}
                ModalProps={{
                    keepMounted: true,
                }}
            >  
                <div className={classes.mobileMenu}>
                    <div className={classes.MobileMenuBack} onClick={ () => {setMenuCategory(0)} }>
                        <ChevronLeftIcon style={{marginRight:'16px'}}/>
                        Kids
                    </div>
                    <div className={classes.MobileMenuHeadline}>Boys' Clothing</div>
                    <div className={classes.MobileMenuChoiceContainer}>
                        <a href="#a" className={classes.MobileMenuChoice}>Tops and T-Shirts</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Hoodies and Sweatshirts</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Pants and Leggings</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Shorts</a>
                        <Link to="/listProduct" className={classes.MobileMenuChoice} 
                            onClick={()=>{ 
                                dispatch(action.createAction({type: ActionType.CHANGE_GENDER_TYPEPRODUCT,payload: {gender: "kid", typeProduct: "clothing"} }));
                                if(location.pathname === "/listProduct"){history.go(0)}
                            }}
                        >
                            All Boy's Clothing
                        </Link>
                    </div>
                </div>
            </Drawer>

            <Drawer
                container={container}
                variant="temporary"
                anchor="right"
                open={menuCategory === 3 ? true : false}
                onClose={ () => {setMenuCategory(0)} }
                classes={{
                    paper: classes.drawerPaper,
                }}
                ModalProps={{
                    keepMounted: true,
                }}
            >  
                <div className={classes.mobileMenu}>
                    <div className={classes.MobileMenuBack} onClick={ () => {setMenuCategory(0)} }>
                        <ChevronLeftIcon style={{marginRight:'16px'}}/>
                        Kids
                    </div>
                    <div className={classes.MobileMenuHeadline}>Girls' Shoes</div>
                    <div className={classes.MobileMenuChoiceContainer}>
                        <a href="#a" className={classes.MobileMenuChoice}>Older Kids (3-6.5)</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Younger Kids (10-2.5)</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Baby and Toddler (1.5-9.5)</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Lifestyle</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Running</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Basketball</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Football</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Sandals and Slides</a>
                        <Link to="/listProduct" className={classes.MobileMenuChoice} 
                            onClick={()=>{ 
                                dispatch(action.createAction({type: ActionType.CHANGE_GENDER_TYPEPRODUCT,payload: {gender: "kid", typeProduct: "shoes"} }));
                                if(location.pathname === "/listProduct"){history.go(0)}
                            }}
                        >
                            All shoes
                        </Link>
                    </div>
                </div>
            </Drawer>

            <Drawer
                container={container}
                variant="temporary"
                anchor="right"
                open={menuCategory === 4 ? true : false}
                onClose={ () => {setMenuCategory(0)} }
                classes={{
                    paper: classes.drawerPaper,
                }}
                ModalProps={{
                    keepMounted: true,
                }}
            >  
                <div className={classes.mobileMenu}>
                <div className={classes.MobileMenuBack} onClick={ () => {setMenuCategory(0)} }>
                        <ChevronLeftIcon style={{marginRight:'16px'}}/>
                        Kids
                    </div>
                    <div className={classes.MobileMenuHeadline}>Girls' Clothing</div>
                    <div className={classes.MobileMenuChoiceContainer}>
                        <a href="#a" className={classes.MobileMenuChoice}>Tops and T-Shirts</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Sports Bras</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Hoodies and Sweatshirts</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Pants and Leggings</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Shorts</a>
                        <Link to="/listProduct" className={classes.MobileMenuChoice} 
                            onClick={()=>{ 
                                dispatch(action.createAction({type: ActionType.CHANGE_GENDER_TYPEPRODUCT,payload: {gender: "kid", typeProduct: "clothing"} }));
                                if(location.pathname === "/listProduct"){history.go(0)}
                            }}
                        >
                            All Girl's Clothing
                        </Link>
                    </div>
                </div>
            </Drawer>

            <Drawer
                container={container}
                variant="temporary"
                anchor="right"
                open={menuCategory === 5 ? true : false}
                onClose={ () => {setMenuCategory(0)} }
                classes={{
                    paper: classes.drawerPaper,
                }}
                ModalProps={{
                    keepMounted: true,
                }}
            >  
                <div className={classes.mobileMenu}>
                    <div className={classes.MobileMenuBack} onClick={ () => {setMenuCategory(0)} }>
                        <ChevronLeftIcon style={{marginRight:'16px'}}/>
                        Kids
                    </div>
                    <div className={classes.MobileMenuHeadline}>
                        Accessories and Equipment
                    </div>
                    <div className={classes.MobileMenuChoiceContainer}>
                        <a href="#a" className={classes.MobileMenuChoice}>Balls</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Bags and Backpacks</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Socks</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Hats and Headwear</a>
                    </div>
                </div>
            </Drawer>

            <Drawer
                container={container}
                variant="temporary"
                anchor="right"
                open={menuCategory === 6 ? true : false}
                onClose={ () => {setMenuCategory(0)} }
                classes={{
                    paper: classes.drawerPaper,
                }}
                ModalProps={{
                    keepMounted: true,
                }}
            >  
                <div className={classes.mobileMenu}>
                <div className={classes.MobileMenuBack} onClick={ () => {setMenuCategory(0)} }>
                        <ChevronLeftIcon style={{marginRight:'16px'}}/>
                        Kids
                    </div>
                    <div className={classes.MobileMenuHeadline}>
                        Shop By Sport
                    </div>
                    <div className={classes.MobileMenuChoiceContainer}>
                        <a href="#a" className={classes.MobileMenuChoice}>Running</a>
                        <a href="#a" className={classes.MobileMenuChoice}>American Football</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Basketball</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Gym and Training</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Tennis</a>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}