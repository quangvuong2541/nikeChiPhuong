import React from 'react';
import NavMain from "./NavMain";
import NavSub from "./NavSub";
import { Hidden } from '@mui/material';
import { Container } from '@mui/system';
import { Outlet } from 'react-router-dom';
import { AppBar } from '@mui/material';

export default function NavBar() {
    return (
        <React.Fragment>

            <Hidden lgDown>
                <Container maxWidth="xl">
                    {/* <NavSub /> */}

                    <NavMain />
                 
                </Container>
            </Hidden>
            <Hidden xlUp>
                {/* <NavSub /> */}
                
                <NavMain />

            </Hidden>
            <Outlet />
        </React.Fragment>
    )
}