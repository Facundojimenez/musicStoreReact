import '@fontsource/roboto';
import {AppBar, Toolbar, Typography, Button, makeStyles} from '@material-ui/core/';
import { ThemeProvider } from '@material-ui/styles';
import tema from './tema';

console.log(tema);
console.log(tema.mixins.toolbar);

const useStyle = makeStyles({
    espacioAppBar: tema.mixins.toolbar,
    logoBrand: {
        flexGrow: 1
    }
})

function NavBar(){
    const classes = useStyle(); ///este es un hook
    return (
        <ThemeProvider theme={tema}>
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