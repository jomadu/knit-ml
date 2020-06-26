import React, { useState } from "react";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { APP_NAME } from "../constants";
import DropdownMenu from "../../common/components/DropdownMenu";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemText from "@material-ui/core/ListItemText";

import HistoryRoundedIcon from "@material-ui/icons/HistoryRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import TrendingUpRoundedIcon from "@material-ui/icons/TrendingUpRounded";
import DirectionsRunRoundedIcon from "@material-ui/icons/DirectionsRunRounded";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";

const useStyles = makeStyles((theme) => ({
    appBar: {
        flexGrow: 1,
    },
    drawerButton: {
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    rightLinks: {
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    centerLinks: {
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    drawer: {
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    drawerTitle: {
        padding: theme.spacing(1),
    },
}));

const NavContainer = (props) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const classes = useStyles();

    const handleToggleDrawer = (event) => {
        setDrawerOpen(!drawerOpen);
    };

    const drawerUserItems =
        props.isAuthenticated && props.user ? (
            <div>
                <List
                    subheader={
                        <ListSubheader>{props.user.username}</ListSubheader>
                    }
                >
                    <ListItem button>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>

                        <ListItemText primary="Account" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <TrendingUpRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Progression" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <HistoryRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="History" />
                    </ListItem>
                    <Divider variant="middle" />
                    <ListItem button>
                        <ListItemIcon>
                            <ExitToAppRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sign Out" />
                    </ListItem>
                </List>
            </div>
        ) : (
            <div>
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <ExitToAppRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sign In" />
                    </ListItem>
                </List>
            </div>
        );

    const drawer = (
        <Drawer
            anchor={"left"}
            open={drawerOpen}
            onClose={handleToggleDrawer}
            className={classes.drawer}
        >
            <Typography variant="h4" className={classes.drawerTitle}>
                {APP_NAME}
            </Typography>
            <Divider />
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <DirectionsRunRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Analyze" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <InfoRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="About" />
                </ListItem>
            </List>
            <Divider />
            {drawerUserItems}
        </Drawer>
    );

    const rightLinks = props.isAuthenticated ? (
        <DropdownMenu icon={<ArrowDropDownIcon />} title={props.user.username}>
            <MenuItem>
                <ListItemIcon>
                    <AccountCircleIcon />
                </ListItemIcon>
                <Typography variant="inherit">Account</Typography>
            </MenuItem>
            <MenuItem>
                <ListItemIcon>
                    <TrendingUpRoundedIcon />
                </ListItemIcon>
                <Typography variant="inherit">Progression</Typography>
            </MenuItem>
            <MenuItem>
                <ListItemIcon>
                    <HistoryRoundedIcon />
                </ListItemIcon>
                <Typography variant="inherit">History</Typography>
            </MenuItem>
            <Divider variant="middle" />
            <MenuItem>
                <ListItemIcon>
                    <ExitToAppRoundedIcon />
                </ListItemIcon>
                <Typography variant="inherit">Sign Out</Typography>
            </MenuItem>
        </DropdownMenu>
    ) : (
        <Button color="inherit" startIcon={<ExitToAppRoundedIcon />}>
            Sign In
        </Button>
    );

    return (
        <div>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Grid
                        container
                        justify="space-between"
                        alignItems="center"
                        wrap="nowrap"
                    >
                        <Grid item>
                            <Grid container alignItems="center">
                                <Grid
                                    item
                                    className={classes.drawerButton}
                                >
                                    <IconButton
                                        color="inherit"
                                        aria-label="open drawer"
                                        edge="start"
                                        className={classes.drawerButton}
                                        onClick={handleToggleDrawer}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6">
                                        {APP_NAME}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item className={classes.centerLinks}>
                            <Grid container>
                                <Grid item>
                                    <Button color="inherit">Analyze</Button>
                                </Grid>
                                <Grid item>
                                    <Button color="inherit">About</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item className={classes.rightLinks}>
                            {rightLinks}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            {drawer}
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: true,
    user: { email: "maxdunn123@gmail.com", username: "maxdunn" },
});
const mapDispatchToProps = (dispatch) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);