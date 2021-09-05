import {AppBar, Toolbar, Typography, Button, Box, makeStyles, Hidden} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Tema from './tema';
import CartWidget from './CartWidget';
import DrawerMobile from './DrawerMobile';
import { Link } from 'react-router-dom';
import "../styles/links.css"
import { useContext } from 'react';
import CartContext from '../context/CartContext';

const useStyle = makeStyles({
    espacioAppBar: Tema.mixins.toolbar,
    cartIcon: {
        display: "inline-block",
        position: "relative"
    },
    cartQuantity: {
        position: "absolute",
        display: "flex",
        fontWeight: 600,
        fontSize: "1.2rem",
        alignItems: "center",
        justifyContent: "center",
        color: Tema.palette.primary.main,
        backgroundColor: Tema.palette.common.white,
        top: "50%",
        left: "75%",
        minWidth: "1.2rem",
        padding: "0.1rem",
        height: "1.2rem",
        borderRadius: "50%"
    }
})

function NavBar(){
    const classes = useStyle();
    const {unidadesTotales} = useContext(CartContext);
    return (
        <ThemeProvider theme={Tema}>
            <AppBar position="fixed">
                <Toolbar>
                    <DrawerMobile/>
                    <Box display="flex" flexGrow={1}>
                        <Link to="/musicStoreReact" className="links">
                            <Typography variant="h6" element="h6">
                                Music Store
                            </Typography>
                        </Link>
                    </Box>
                    <Hidden smDown>
                        <Link to="/musicStoreReact" className="links">
                            <Button color="inherit">
                                Home
                            </Button>
                        </Link>
                        <Link to="/musicStoreReact/categoria/0" className="links">
                            <Button color="inherit">
                                Productos
                            </Button>
                        </Link>
                        <Link to="/musicStoreReact/contacto" className="links">
                            <Button color="inherit">
                                Contacto
                            </Button>
                        </Link>
                    </Hidden>
                    <Link to="/musicStoreReact/cart" className="links" style={unidadesTotales <= 0 ? {display: "none"} : {}}>
                        <Box className={classes.cartIcon}>
                            <CartWidget/>
                            <Typography variant="h6" display="inline" className={classes.cartQuantity}>
                                {unidadesTotales}
                            </Typography>
                        </Box>
                    </Link>
                </Toolbar>
            </AppBar>
            <div className={classes.espacioAppBar}></div>
        </ThemeProvider>
    )
}

export default NavBar;