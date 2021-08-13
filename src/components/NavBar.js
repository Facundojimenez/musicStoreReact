import '@fontsource/roboto';
import {AppBar, Toolbar, Typography, Button, makeStyles, Hidden} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Tema from './tema';
import CartWidget from './CartWidget';
import DrawerMobile from './DrawerMobile';

const useStyle = makeStyles({
    espacioAppBar: Tema.mixins.toolbar,
    logoBrand: {
        flexGrow: 1
    }
})

function NavBar(){
    const classes = useStyle(); ///este es un hook
    return (
        <ThemeProvider theme={Tema}>
            <AppBar position="fixed">
<                Toolbar>
                    <DrawerMobile/>
                    <Typography className={classes.logoBrand} variant="h6" element="h6">
                        Music Store
                    </Typography>
                    <Hidden smDown>
                        <Button color="inherit">
                            Home
                        </Button>
                        <Button color="inherit">
                            Productos
                        </Button>
                        <Button color="inherit">
                            Contacto
                        </Button>
                    </Hidden>
                    <CartWidget/>
                </Toolbar>
            </AppBar>
            <div className={classes.espacioAppBar}></div>
        </ThemeProvider>
    )
}

export default NavBar;