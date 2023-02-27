import React, {useState} from "react";
import {Box, useMediaQuery} from "@mui/material";
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import Navbar from "components/Navbar"
import Sidebar from "components/Sidebar";

const Layout = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const drawerWidth = "250px"

    return (
        <Box display={isNonMobile ? "flex" : "block"} width="100%" height={"100%"}>
            <Sidebar
                isNonMobile={isNonMobile}
                drawerWidth={drawerWidth}
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />
        <Box marginLeft={isSidebarOpen ? drawerWidth : "0"}>
            <Navbar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}/>
            <Outlet/>
        </Box>

    </Box>);
};

export default Layout;