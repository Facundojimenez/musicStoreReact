import {AppBar, Toolbar, Typography, Button, Box, makeStyles, Hidden} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Tema from './tema';
import CartWidget from './CartWidget';
import DrawerMobile from './DrawerMobile';
import { Link } from 'react-router-dom';
import "../styles/links.css"

const useStyle = makeStyles({
    espacioAppBar: Tema.mixins.toolbar,
})

function NavBar(){
    const classes = useStyle();
    return (
        <ThemeProvider theme={Tema}>
            <AppBar position="fixed">
                <Toolbar>
                    <DrawerMobile/>
                    <Box display="flex" flexGrow={1}>
                        <Link to="/" className="links">
                            <Typography variant="h6" element="h6">
                                Music Store
                            </Typography>
                        </Link>
                    </Box>
                    <Hidden smDown>
                        <Link to="/" className="links">
                            <Button color="inherit">
                                Home
                            </Button>
                        </Link>
                        <Link to="/categoria/0" className="links">
                            <Button color="inherit">
                                Productos
                            </Button>
                        </Link>
                        <Link to="/contacto" className="links">
                            <Button color="inherit">
                                Contacto
                            </Button>
                        </Link>
                    </Hidden>
                    <Link to="/cart" className="links">
                        <CartWidget/>
                    </Link>
                </Toolbar>
            </AppBar>
            <div className={classes.espacioAppBar}></div>
        </ThemeProvider>
    )
}

export default NavBar;