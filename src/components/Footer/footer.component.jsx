import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={true} direction="up" in={trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    background: "#141001",
    marginTop: 10,
  },
  grow: {
    flexGrow: 1,
  },
  text: {
    color: "white",
    marginRight: "0 auto",
  },
}));

export default function BottomAppBar(props) {
  const classes = useStyles();

  return (
    <div id="contact">
      <CssBaseline />
      <HideOnScroll {...props}>
        {/* <Paper square className={classes.paper}>
          <Typography className={classes.text} variant="h5" gutterBottom>
            Inbox
          </Typography>
          <List className={classes.list}>
            {messages.map(({ id, primary, secondary, person }) => (
              <React.Fragment key={id}>
                {id === 1 && <ListSubheader className={classes.subheader}>Today</ListSubheader>}
                {id === 3 && <ListSubheader className={classes.subheader}>Yesterday</ListSubheader>}
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar alt="Profile Picture" src={person} />
                  </ListItemAvatar>
                  <ListItemText primary={primary} secondary={secondary} />
                </ListItem>
              </React.Fragment>
            ))}
          </List>
        </Paper> */}
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            {/* <IconButton edge="start" color="inherit" aria-label="open drawer">
              <MenuIcon />
            </IconButton>
            <Fab color="secondary" aria-label="add" className={classes.fabButton}>
              <AddIcon />
            </Fab> */}
            <div className={classes.grow} />
            <a
              href="https://www.linkedin.com/in/prem-kulkarni-99a3451a1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                style={{
                  color: "white",
                  marginLeft: "37em",
                  marginRight: "1em",
                }}
              >
                <LinkedInIcon />
              </span>
            </a>
            <p className={classes.text}>Created with ♥ by Prem Kulkarni</p>
            <br />
            <a
              href="https://github.com/kulkarniprem04"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                style={{
                  color: "white",
                  marginRight: "40em",
                  marginLeft: "1em",
                }}
              >
                <GitHubIcon />
              </span>
            </a>

            {/* <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton edge="end" color="inherit">
              <MoreIcon />
            </IconButton> */}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}
