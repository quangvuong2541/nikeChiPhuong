import React from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";
import  CreateUser from "../../component/admin/User/createUser"
import  ListUser from "../../component/admin/User/listUser"


const useStyles = makeStyles((theme) => ({
    paper: {
        // padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

export default function Dashboard() {
    const classes = useStyles();

    return (
        <div>
            <CreateUser/>
            <ListUser/>
        </div>
    );
}