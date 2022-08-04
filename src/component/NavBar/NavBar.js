import React from 'react';
import NavSub from "./NavSub";
import Hidden from '@mui/material/Hidden';
import Container from '@mui/material/Container';
import { Outlet } from "react-router-dom";
import NavMain from './NavMain';

export default function NavBar() {
    return (
        <div>
            <Hidden lgDown>
                <Container maxWidth="xl">
                    <NavSub />
                    <NavMain />
                </Container>
            </Hidden>
            <Hidden xlUp>
                <NavSub />

            </Hidden>
            <Outlet />
        </div>
    )
}