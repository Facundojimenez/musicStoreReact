import { Box, Grid, TextField, Button, Typography, makeStyles, Paper } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import Tema from "./tema";

const useStyles = makeStyles({
    formContainer:{
        display: "flex",
        justifyContent: "center",
        padding: "16px",
        minHeight: "500px",
        maxWidth: "600px"
    },
    formInnerContainer:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        [Tema.breakpoints.up('md')]: {
            width: "75%"
        }
    },
    botonEnviar:{
        marginTop: "32px"
    }
})

function ContactForm(){
    const classes = useStyles();
    return (
        <Paper className={classes.formContainer}>
            <Box className={classes.formInnerContainer}>
                <Typography  textalign="center" variant="h4" element="h4" color="initial">
                    ¡Contactanos!
                </Typography>
                <form>
                    <Grid container spacing={4}>
                        <Grid></Grid>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth id="outlined-basic" label="Nombre" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth id="outlined-basic" label="Apellido" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" /> 
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth id="outlined-basic" label="Mensaje" variant="outlined" />
                        </Grid>
                    </Grid>
                    <Box display="flex" justifyContent="center">
                        <Button
                            className={classes.botonEnviar}
                            size="large"
                            variant="contained"
                            color="primary"
                            endIcon={<SendIcon/>}
                        >
                            Send
                        </Button>
                    </Box>
                </form>
            </Box>
        </Paper>
    )
}

export default ContactForm;