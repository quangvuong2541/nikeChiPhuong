import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Drawer from '@material-ui/core/Drawer';

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

    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;
    
    const [menu, setMenu] = React.useState(0);
    const [menuCategory, setMenuCategory] = React.useState(0);

    return (
        <div className={classes.MobileSaleMenuContainer}>
            <div className={classes.MobileSaleMenu} onClick={ () => {setMenu(1)} }>
                Sale
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
                        Sale
                    </div>
                    <div className={classes.MobileMenuChoiceContainer}>
                        <div className={classes.MobileMenuChoice} onClick={ () => {setMenuCategory(1)} }>
                            Featured
                            <ChevronRightIcon className={classes.ChevronRightIcon}/>
                        </div>
                        <div className={classes.MobileMenuChoice} onClick={ () => {setMenuCategory(2)} }>
                            Men's Sale
                            <ChevronRightIcon className={classes.ChevronRightIcon}/>
                        </div>
                        <div className={classes.MobileMenuChoice} onClick={ () => {setMenuCategory(3)} }>
                            Women's Sale
                            <ChevronRightIcon className={classes.ChevronRightIcon}/>
                        </div>
                        <div className={classes.MobileMenuChoice} onClick={ () => {setMenuCategory(4)} }>
                            Kids's Sale
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
                        Sale
                    </div>
                    <div className={classes.MobileMenuHeadline}>Featured</div>
                    <div className={classes.MobileMenuChoiceContainer}>
                        <a href="#a" className={classes.MobileMenuChoice}>Shop All Sale</a>
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
                        Sale
                    </div>
                    <div className={classes.MobileMenuHeadline}>Men's Sale</div>
                    <div className={classes.MobileMenuChoiceContainer}>
                        <a href="#a" className={classes.MobileMenuChoice}>Shoes</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Clothing</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Accessories and Equipment</a>
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
                        Sale
                    </div>
                    <div className={classes.MobileMenuHeadline}>Women's Sale</div>
                    <div className={classes.MobileMenuChoiceContainer}>
                        <a href="#a" className={classes.MobileMenuChoice}>Shoes</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Clothing</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Accessories and Equipment</a>
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
                        Sale
                    </div>
                    <div className={classes.MobileMenuHeadline}>Kids' Sale</div>
                    <div className={classes.MobileMenuChoiceContainer}>
                        <a href="#a" className={classes.MobileMenuChoice}>Shoes</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Clothing</a>
                        <a href="#a" className={classes.MobileMenuChoice}>Accessories and Equipment</a>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}