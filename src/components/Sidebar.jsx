import React, {useEffect, useState} from 'react';
import {
    Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme
} from "@mui/material";
import {
    SettingsOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    Groups2Outlined,
    ReceiptOutlined,
    PublicOutlined,
    PointOfSaleOutlined,
    TodayOutlined,
    CalendarMonthOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    PieChartOutlined
} from "@mui/icons-material";
import {useLocation, useNavigate} from "react-router-dom";
import FlexBetween from "./FlexBetween";
import profileImage from "assets/profile.jpeg";

function Sidebar({
                     drawerWidth,
                     isSidebarOpen,
                     setIsSidebarOpen,
                     isNonMobile
                 }) {
    const {pathname} = useLocation();
    const [active, setActive] = useState("");
    const navigate = useNavigate();
    const theme = useTheme();

    useEffect(() => {
        setActive(pathname.substring(1));
    }, [pathname])

    return (
        <div>

        </div>
    );
}

export default Sidebar;
