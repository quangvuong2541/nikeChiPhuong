import React from 'react';
import { makeStyles } from "@mui/styles";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import * as Action from "./Redux/Modules/actions/Action"
const useStyles = makeStyles((theme) => ({
    nike:{
        width: 50,
        hegiht: 17,
    },
    formHeader:{
        padding: '30px 0',
        margin: '0 auto',
        fontSize: '20px',
        maxWidth: '25ch',
        lineHeight: '26px',
        textAlign: 'center',
        fontWeight: 700,
    },
    SignUpMessage:{
        fontSize: 14,
        textAlign: 'center',
        color: '#8d8d8d',
        paddingBottom: 15,
        lineHeight: '22px',
    },
    inputContainer:{
        margin: '15px 0',
    },
    input:{
        width: '100%',
        border: '1px solid #e5e5e5',
        borderRadius: 3,
        color: '#8d8d8d',
        height: 40,
        lineHeight: 17,
        padding: '0 16px',
        outline: 0,
    },
    inputDate:{
        width: '100%',
        border: '1px solid #e5e5e5',
        outline: 0,
        borderRadius: 3,
        color: '#8d8d8d',
        height: 40,
        fontFamily: 'PT Sans, sans-serif',
        lineHeight: 17,
        paddingLeft: 16,
    },
    inputValid:{
        color: '#fe0000',
        fontSize: 12,
    },
    NikeBirthday:{
        fontSize: 12,
        color: '#8d8d8d',
        textAlign: 'center',
    },
    formSupport:{
        margin: '18px 0',
        color: '#8D8D8D',
        fontSize: 12,
        display: 'flex',
    },
    formSupportGrow:{
        flexGrow: 1,
        verticalAlign: 'baseline',
    },
    formTerm:{
        fontSize: 12,
        textAlign: 'center',
        color: '#8d8d8d',
        maxWidth: 285,
        margin: '3px auto 24px',
    },
    buttonSignIn:{
        width: '100%',
        borderRadius: 3,
        border: 'none',
        color: '#fff',
        fontSize: 15,
        backgroundColor: 'black',
        height: 40,
        fontWeight: 500,
        margin: '5px 0',
        cursor: 'pointer',
    },
    radio:{
        visibility: 'hidden',
        width: 0,
        padding: 0,
    },
    RadioGroup:{
        flexDirection: 'row',
    },
    checked: {
        '& ~ $label': {
            border: '1px black solid',
        },
    },
    root:{
        color: 'red',
    },
    label: {
        color: '#8d8d8d',
        fontSize: 14,
        padding: '10px 16px',
        border: '1px #e5e5e5 solid',
        borderRadius: 3,
        width: '100%',
        textAlign: 'center',
    },
    FormLabelRadio:{
        margin: 0,
        flex: 1,
    },
}));

function SignUp(props) {
    const classes = useStyles();

    const age = [];
    for ( var i = 0; i< 100; i++ ){
        age.push(i+1);
    }
    const listAge = age.map((item) =>
        <option value={item} >{item}</option>
    );


    /*Validate form */
    const { register, handleSubmit, errors} = useForm({
        mode: "onBlur"
    });
    const onSubmit = (data) => {
        let form = document.getElementById('formSignUp');
        form.reset();
        // spread operator
        const dataCopy = {...data,userType: "user"}
        // console.log(dataCopy);
        props.dispatch(Action.fetchAiSignUpUser(dataCopy))
    };
    // console.log(props);
    

    return(
        <div>

            {/*Header*/}
            <div>
                <center><img alt="" src="https://www.logomaker.com/wp-content/uploads/2018/05/2000px-Logo_NIKE.png" className={classes.nike} /></center>
            </div>
            <div className={classes.formHeader}>
                BECOME A NIKE MEMBER
            </div>
            <div className={classes.SignUpMessage}>
                Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.
            </div>

            {/*Form*/}
            <form id="formSignUp" onSubmit={handleSubmit(onSubmit)} method="POST">
                {/*Input*/}
                <div className={classes.inputContainer}>
                    <input 
                        type="text" 
                        placeholder="Email address" 
                        className={classes.input} 
                        name="email"
                        // style={{ borderColor: errors.email && "red" }}
                        // ref={register({
                        //     required: true,
                        //     pattern: {
                        //         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        //     }
                        // })}
                    />
                    {/* {errors.email && 
                        <p className={classes.inputValid}>Please enter a valid email address.</p>
                    } */}
                </div>
                <div className={classes.inputContainer}>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className={classes.input}
                        name="password"
                        // style={{ borderColor: errors.password && "red" }}
                        // ref={register({
                        //     required: true,
                        //     pattern: {
                        //         value: /^.{8,}$/i,
                        //     }
                        // })}
                    />
                    {/* {errors.password && 
                        <p className={classes.inputValid}>Password does not meet minimum requirements.</p>
                    } */}
                </div>
                <div className={classes.inputContainer}>
                    <input 
                        type="text" 
                        placeholder="Name" 
                        className={classes.input}
                        name="name"
                        style={{ borderColor: errors.name && "red" }}
                        ref={register({
                            required: true,
                        })}
                    />
                    {errors.name && 
                        <p className={classes.inputValid}>Please enter a valid name.</p>
                    }
                </div>
                <div className={classes.inputContainer}>
                    <select 
                        className={classes.input} 
                        name="age"
                        style={{ borderColor: errors.age && "red" }}
                        ref={register({
                            required: true,
                        })}
                    >
                        <option value="">Age</option>
                        {listAge}
                    </select>
                    {errors.age && 
                        <p className={classes.inputValid}>Please choose a valid age.</p>
                    }
                </div>

                <div className={classes.NikeBirthday}>Get a Nike Member Reward every year on your Birthday.</div>


                
                {/*Support*/}
                <div className={classes.formSupport}>
                    <input type="checkbox" style={{margin:'0 15px 0 0'}}/> 
                    <span className={classes.formSupportGrow}>
                        Sign up for emails to get updates from Nike on products, offers and your Member benefits
                    </span>
                </div>
                {/*Term*/}
                <div className={classes.formTerm}>
                    By logging in, you agree to Nike's <a href="#a" style={{color:'#8d8d8d'}}>Privary Policy</a> and <a href="#a" style={{color:'#8d8d8d'}}>Term of Use</a>
                </div>
                {/*Sign In*/}
                <button className={classes.buttonSignIn}>JOIN US</button>

                
            </form>
        </div>
    )
}
export default connect()(SignUp)