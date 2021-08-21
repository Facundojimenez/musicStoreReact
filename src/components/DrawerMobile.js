import { SwipeableDrawer, makeStyles, IconButton, List, ListItem, ListItemIcon, ListItemText, Hidden } from "@material-ui/core";
import { useState } from "react";
import MenuIcon from '@material-ui/icons/Menu';
import StoreIcon from '@material-ui/icons/Store';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    links:{
        textDecoration: 'none',
        color: "inherit"
    }
})

function DrawerMobile(){
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    return(
        <>
            <Hidden mdUp>
                <IconButton onClick={() => setOpen(true)} aria-label="menu" color="inherit">
                    <MenuIcon />
                </IconButton>
            </Hidden>
            <SwipeableDrawer
                anchor="top"
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
            >
                <List component="nav" aria-label="main mailbox folders">
                    <Link to="/musicStoreReact" className={classes.links}>
                        <ListItem button>
                            <ListItemIcon>
                                <StoreIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </Link>
                    <Link to="/musicStoreReact/productos" className={classes.links}>
                        <ListItem button>
                            <ListItemIcon>
                                <LocalMallIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Productos" />
                        </ListItem>
                    </Link>
                    <Link  to="/musicStoreReact/contacto" className={classes.links}>
                        <ListItem button>
                            <ListItemIcon>
                                <ContactMailIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Contacto" />
                        </ListItem>
                    </Link>
                </List>
            </SwipeableDrawer>
        </>
    )
}

export default DrawerMobile;