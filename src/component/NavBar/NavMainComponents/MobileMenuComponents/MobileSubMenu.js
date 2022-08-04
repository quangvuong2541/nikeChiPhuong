import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { connect } from "react-redux";
import * as action from "../Redux/Modules/actions/Action";


const useStyles = makeStyles((theme) => ({
    mobileSubMenu: {
        paddingTop: 16,
    },
    jordanMobile:{
        height: 24,
        width: 24,
        marginRight: 12,
    },
    boxImage:{
        height: 24,
        width: 24,
    },
    linkJordanMobile:{
        padding: '16px 0 8px',
        height: 34,
        display: 'flex',
        alignItems: 'center',
        color: 'black',
        textDecoration: 'none',
        fontSize: 16,
    },
    nikeMember:{
        paddingTop: 48,
        margin: '50px 12px 0 0',
    },
    nikeMemberIntroduce:{
        color: '#757575',
        paddingBottom: 16,
        fontSize: 20,
    },
    nikeMemberButton:{
        padding: '8px 24px',
        fontSize: 16,
        textDecoration: 'none',
        border: '1px #757575 solid',
        borderRadius: 30,
        margin: '8px 8px 0 0',
    },
    mainNavButton:{
        marginRight: 12,
    },
    mainNavButtonLink:{
        color: 'black',
        height: 45,
        display: 'flex',
        alignItems: 'top',
        fontSize: 16,
        textDecoration: 'none',
        paddingTop: 12,
    },
}));

function MobileSubMenu(props){
    const classes = useStyles();
    

    return (
        <div className={classes.mobileSubMenu}>
            <a href="#a" className={classes.linkJordanMobile} ><img alt="" src="https://www.nike.com/assets/experience/ciclp/static/v2/1386-2a258a5a815/static/icons/jordan.svg" className={classes.jordanMobile} /> Jordan</a>

            <div className={classes.nikeMember}>
                <div className={classes.nikeMemberIntroduce}>
                    Become a Nike Member for the best products, inspiration and stories in sport. <a href="#a" style={{color:'black', textDecoration:'none'}}>Learn more</a>
                </div>
                <div style={{marginTop:'8px'}}>
                    <a href="#a" className={classes.nikeMemberButton} style={{color:'white', backgroundColor:'black'}}>Join Us</a>
                    <a href="#a" className={classes.nikeMemberButton} style={{color:'black', backgroundColor:'white'}} onClick={()=>{props.emitOpen(!props.open)}} >Sign In</a>
                </div>
                <div style={{marginTop:'50px'}}>
                    
                    <a href="#a" className={classes.mainNavButtonLink}>
                        <span className={classes.mainNavButton}>
                            <WorkOutlineIcon />
                        </span>
                        Bag
                    </a>
                    <a href="#a" className={classes.mainNavButtonLink}>
                        <span className={classes.mainNavButton}>
                        <img src="https://www.flaticon.com/svg/static/icons/svg/3037/3037005.svg" className={classes.boxImage} alt=""/> 
                        </span>
                        Orders
                    </a>
                    <a href="#a" className={classes.mainNavButtonLink}>
                        <span className={classes.mainNavButton}>
                            <HelpOutlineIcon />
                        </span>
                        Help
                    </a>
                    
                </div>
            </div>
        </div>
    )
};
const mapStateToProps = state => {
    return {
        open: state.reducerSigninSignUp.open
    };
};
const mapDispatchToProps = dispatch => {
    return {
       emitOpen: (valueOpen) =>{
          // console.log(valueOpen)
           dispatch(action.emitOpenAction(valueOpen))
       }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileSubMenu);