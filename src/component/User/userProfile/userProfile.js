import React from "react";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import * as action from "../userOrder/module/action/action";

const useStyles = makeStyles((theme) => ({}));

const UserProfileComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userLocal = useSelector((state) => state.reducerSignInSignUp.user);

  const age = [];
  for (var i = 0; i < 100; i++) {
    age.push(i + 1);
  }
  const listAge = age.map((item, index) => {
    return <option key={index}>{item}</option>;
  });

  const [ageSelect, setAgeSelect] = React.useState(
    userLocal ? userLocal.user.age : null
  );
  const HandleAgeSelect = (event) => {
    setAgeSelect(event.target.value);
  };

  //validation form
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    const token = JSON.parse(localStorage.getItem("user")).token;
    dispatch(action.updateProfileAPI(data, token));
  };

  return (
    <div>
      <form id="formSignIn" onSubmit={handleSubmit(onSubmit)}>
        {/* email */}
        <div className={classes.inputContainer}>
          <input
            type="text"
            placeholder="Email"
            className={classes.input}
            name="email"
            defaultValue={userLocal.user.email}
            {...register("email", {
              required: "This input is required",
              pattern: {
                value: "",
                message: "This input is number only",
              },
              minLength: {
                value: "",
                message: "This input must exceed 10 characters",
              },
            })}
          />
        </div>
        {/* password */}
        <div className={classes.inputContainer}>
          <input
            type="password"
            placeholder="Password"
            className={classes.input}
            name="password"
            {...register("password", { required: true })}
          />
        </div>
        {/* name */}
        <div className={classes.inputContainer}>
          <input
            type="text"
            placeholder="name"
            className={classes.input}
            name="name"
            defaultValue={userLocal.user.name}
            {...register("name", { required: true })}
          />
        </div>
        {/* age */}
        <div className={classes.inputContainer}>
          <div>Age:</div>
          <select
            className={classes.Detail}
            name="age"
            {...register("age", { required: true })}
          >
            {listAge}
          </select>
        </div>

        <input className={classes.buttonSignIn} type="submit" value="UPDATE" />
      </form>
    </div>
  );
};

export default UserProfileComponent;
