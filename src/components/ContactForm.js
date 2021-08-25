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
                <Typography variant="h4" element="h4" color="primary">
                    ¡Contactanos!
                </Typography>
                <form>
                    <Grid container spacing={4}>
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
                            <TextField fullWidth multiline={true} minRows={6} maxRows={6} id="outlined-basic" label="Mensaje" variant="outlined" />
                        </Grid>
                    </Grid>
                    <Box textAlign="center">
                        <Button className={classes.botonEnviar} size="large" variant="contained" color="primary" endIcon={<SendIcon/>}>
                            Send
                        </Button>
                    </Box>
                </form>
            </Box>
        </Paper>
    )
}

export default ContactForm;