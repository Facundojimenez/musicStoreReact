import {AppBar, Toolbar, Typography, Button, Box, makeStyles, Hidden} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Tema from './tema';
import CartWidget from './CartWidget';
import DrawerMobile from './DrawerMobile';
import { Link } from 'react-router-dom';
import "../styles/links.css"
import { useContext, useEffect } from 'react';
import CartContext from '../context/CartContext';
import { useState } from 'react';

const useStyle = makeStyles({
    espacioAppBar: Tema.mixins.toolbar,
})

function NavBar(){
    const classes = useStyle();
    // const {contarUnidades} = useContext(CartContext);
    const {unidades} = useContext(CartContext);
    // useEffect(() => {
    //     console.log(unidades);
    // }, [unidades])
    // useEffect()
    // const [unidades, setUnidades] = useState(0);
    // useEffect(() => {
    //     contarUnidades(setUnidades);
    // }, [unidades])
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
                    <Link to="/musicStoreReact/cart" className="links">
                        <CartWidget/>
                        {unidades}
                    </Link>
                </Toolbar>
            </AppBar>
            <div className={classes.espacioAppBar}></div>
        </ThemeProvider>
    )
}

export default NavBar;