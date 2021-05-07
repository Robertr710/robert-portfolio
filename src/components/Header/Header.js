import React from "react";
import AppBar from "@material-ui/core/AppBar";
// import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
toolbarMargin: {
    marginTop: "4rem",
}
}));

const Header = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
        <AppBar position = "fixed" >
            <Toolbar>
                <Tabs>
                    <Tab component={Link} to="/about" label="About Me"/>
                    <Tab component={Link} to="/projects"label="Projects"/>
                    <Tab component={Link} to="awards"label="Awards"/>
                    <Tab component={Link} to="/skills" label="Skills"/>
                    <Tab component={Link} to="/skills" label="Skills"/>
                </Tabs>
            </Toolbar>
        </AppBar>
        <div className={classes.toolbarMargin}></div>
        </React.Fragment>
       
    )
}
export default Header;

