import {AppBar, Toolbar, Typography, Button, makeStyles, Hidden} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Tema from './tema';
import CartWidget from './CartWidget';
import DrawerMobile from './DrawerMobile';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    espacioAppBar: Tema.mixins.toolbar,
    logoBrand: {
        flexGrow: 1
    },
    links:{
        textDecoration: 'none',
        color: "inherit"
    }
})

function NavBar(){
    const classes = useStyle();
    return (
        <ThemeProvider theme={Tema}>
            <AppBar position="fixed">
<                Toolbar>
                    <DrawerMobile/>
                    <Typography className={classes.logoBrand} variant="h6" element="h6">
                        Music Store
                    </Typography>
                    <Hidden smDown>
                        <Link to="/" className={classes.links}>
                            <Button color="inherit">
                                Home
                            </Button>
                        </Link>
                        <Link to="/productos" className={classes.links}>
                            <Button color="inherit">
                                Productos
                            </Button>
                        </Link>
                        <Link to="/contacto" className={classes.links}>
                            <Button color="inherit">
                                Contacto
                            </Button>
                        </Link>
                    </Hidden>
                    <CartWidget/>
                </Toolbar>
            </AppBar>
            <div className={classes.espacioAppBar}></div>
        </ThemeProvider>
    )
}

export default NavBar;