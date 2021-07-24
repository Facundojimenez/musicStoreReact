import '@fontsource/roboto';
import {AppBar, Toolbar, Typography, Button, makeStyles} from '@material-ui/core/';
import { ThemeProvider } from '@material-ui/styles';
import Tema from './Tema';

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
                <Toolbar>
                    <Typography className={classes.logoBrand} variant="h6">
                        Music Store
                    </Typography>
                    <div>
                        <Button color="inherit">
                            Home
                        </Button>
                        <Button color="inherit">
                            Productos
                        </Button>
                        <Button color="inherit">
                            Contacto
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.espacioAppBar}></div>
        </ThemeProvider>
    )
}

export default NavBar;