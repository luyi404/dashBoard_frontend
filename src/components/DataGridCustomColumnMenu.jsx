import {
    GridColumnMenuContainer,
    GridFilterMenuItem,
    HideGridColMenuItem
} from "@mui/x-data-grid";

const CustomColumnMenu = (props) => {
    const {hideMenu, currentColumn, open} = props;
    return (
        <GridColumnMenuContainer hideMenu={hideMenu} currentColumn={currentColumn} open={open}>
            <GridFilterMenuItem column={currentColumn} onClick={hideMenu}/>
            <HideGridColMenuItem column={currentColumn} onClick={hideMenu}/>
        </GridColumnMenuContainer>
    )
}

export default CustomColumnMenu;