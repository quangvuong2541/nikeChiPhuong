import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Drawer from '@material-ui/core/Drawer';
import {Link} from "react-router-dom"
import * as action from "../../../List Product/module/Actions/action"
import *  as ActionType from "../../../List Product/module/Constants/contants"
import {useDispatch} from "react-redux"
import {useHistory} from "react-router-dom";
import { useLocation } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    MobileWomenMenuContainer:{
        padding: '10px 0',
    },
    MobileWomenMenu:{
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

export default function MobileWomenMenu(props){
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;

    const [menu, setMenu] = React.useState(0);
    const [menuCategory, setMenuCategory] = React.useState(0);

    const location = useLocation();

    return (
        <div className={classes.MobileWomenMenuContainer}>
            <div className={classes.MobileWomenMenu} onClick={ () => {setMenu(1)} }>
                Women
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
                        Women
                    </div>
                    <div className={classes.MobileMenuChoiceContainer}>
                        <div className={classes.MobileMenuChoice} onClick={ () => {setMenuCategory(1)} }>
                            Featured
                            <ChevronRightIcon className={classes.ChevronRightIcon}/>
                        </div>
                        <div className={classes.MobileMenuChoice} onClick={ () => {setMenuCategory(2)} }>
                            Shoes
                            <ChevronRightIcon className={classes.ChevronRightIcon}/>
                        </div>
                        <div className={classes.MobileMenuChoice} onClick={ () => {setMenuCategory(3)} }>
                            Clothing
                            <ChevronRightIcon className={classes.ChevronRightIcon}/>
                        </div>
                        <div className={classes.MobileMenuChoice} onClick={ () => {setMenuCategory(4)} }>
                            Shop By Sport
                            <ChevronRightIcon className={classes.ChevronRightIcon}/>
                        </div>
                        <div className={classes.MobileMenuChoice} onClick={ () => {setMenuCategory(5)} }>
                            Shop By Hand
                            <ChevronRightIcon className={classes.ChevronRightIcon}/>
                        </div>
                        <div className={classes.MobileMenuChoice} onClick={ () => {setMenuCategory(6)} }>
                            Icons
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
                        Women
                    </div>
                    <div className={classes.MobileMenuHeadline}>Featured</div>
                    <div className={classes.MobileMenuChoiceContainer}>
                        <a href="#a" className={classes.MobileMenuChoice}>New Release</a>
                        <a href="#a" className={classes.MobileMenuChoice}>SNKRS Launch Calendar</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Member Access</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Neutrals</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Air Force 1</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Nike Icon Clash</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Sustainable Materials</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Top Picks Under 2,300,000đ</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Sale</a>
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
                        Women
                    </div>
                    <div className={classes.MobileMenuHeadline}>Shoes</div>
                    <div className={classes.MobileMenuChoiceContainer}>
                        <Link to="/listProduct" className={classes.MobileMenuChoice} 
                            onClick={()=>{ 
                                dispatch(action.createAction({type: ActionType.CHANGE_GENDER_TYPEPRODUCT,payload: {gender: "female", typeProduct: "shoes"} }));
                                if(location.pathname === "/listProduct"){history.go(0)}
                            }}
                        >
                            All shoes
                        </Link>
                        <a href="#a" className={classes.MobileMenuChoice}>Lifestyle</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Running</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Gym and Training</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Jordan</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Football</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Basketball</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Skateboarding</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Tennis</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Sandals and Slides</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Customise Nike By You</a>
                        <a href="#a" className={classes.MobileMenuChoice}>All Sale Shoes</a>
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
                        Women
                    </div>
                    <div className={classes.MobileMenuHeadline}>Clothing</div>
                    <div className={classes.MobileMenuChoiceContainer}>
                        <Link to="/listProduct" className={classes.MobileMenuChoice} 
                            onClick={()=>{ 
                                dispatch(action.createAction({type: ActionType.CHANGE_GENDER_TYPEPRODUCT,payload: {gender: "female", typeProduct: "clothing"} }));
                                if(location.pathname === "/listProduct"){history.go(0)}
                            }}
                        >
                            All Clothing
                        </Link>
                        <a href="#a" className={classes.MobileMenuChoice}>Sports Bras</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Tops and T-Shirts</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Hoodies and Sweatshirts</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Jackets and Gilets</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Pants and Leggings</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Tracksuits</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Compression and Base Layer</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Shorts</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Skirts and Dresses</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Jerseys and Kits</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Modest Wear</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Plus size</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Caps</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Shocks</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Bags and Backpacks</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Accessories and Equipment</a>
                        <a href="#a" className={classes.MobileMenuChoice}>All Sale Clothing</a>
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
                        Women
                    </div>
                    <div className={classes.MobileMenuHeadline}>Shop By Sport</div>
                    <div className={classes.MobileMenuChoiceContainer}>
                        <a href="#a" className={classes.MobileMenuChoice}>Running</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Gym and Training</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Yoga</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Football</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Basketball</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Skateboarding</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Tennis</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Golf</a>
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
                        Women
                    </div>
                    <div className={classes.MobileMenuHeadline}>Shop By Hand</div>
                    <div className={classes.MobileMenuChoiceContainer}>
                        <a href="#a" className={classes.MobileMenuChoice}>Nike Sportwear</a>
                        <a href="#a" className={classes.MobileMenuChoice}>NikeLab</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Nike By You</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Jordan</a>
                        <a href="#a" className={classes.MobileMenuChoice}>ACG</a>
                        <a href="#a" className={classes.MobileMenuChoice}>NBA</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Nike SB</a>
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
                        Women
                    </div>
                    <div className={classes.MobileMenuHeadline}>Icons</div>
                    <div className={classes.MobileMenuChoiceContainer}>
                        <a href="#a" className={classes.MobileMenuChoice}>Air Force 1</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Pegasus</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Blazer</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Air Jordan 1</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Air Max</a>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}