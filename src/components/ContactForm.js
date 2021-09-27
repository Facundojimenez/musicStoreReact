import { Box, Grid, TextField, Button, Typography, makeStyles, Paper, Backdrop, CircularProgress,Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import Tema from "./tema";
import { useState } from "react";
import emailjs from 'emailjs-com'

const useStyles = makeStyles({
    formContainer:{
        display: "flex",
        justifyContent: "center",
        padding: "16px",
        minHeight: "500px",
        maxHeight: "600px",
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
    },
    backdrop:{
        zIndex: 99,
        color: "#fff"
    }
})

function ContactForm(){
    const classes = useStyles();
    const [emailInvalido, setEmailInvalido] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [dataMensaje, setDataMensaje] = useState({
        nombre: "",
        apellido: "",
        email: "",
        mensaje: "",
        date: "",
    });
    const handleEnvio = async (e) => {
        if(!dataMensaje.email){
            setEmailInvalido(true);
            alert("Debe ingresar un mail para poder contactarse con nosotros.");
            return;
        }
        setEmailInvalido(false);
        setLoading(true);
        const response = await emailjs.send('service_dmffzad', 'template_gqc7g2w', dataMensaje, 'user_bX6HwwY8Hx0muhKq3RVdJ')
        if(response.status !== 200){
            alert("No se pudo enviar el mensaje, intentelo nuevamente...");
        }
        else{
            setSuccess(true);
        }
        setLoading(false);
    };
    const handleInputChange = (evento) =>{
        setDataMensaje({...dataMensaje, [evento.target.id]: evento.target.value});
    };
     return (
        <>
            <Paper className={classes.formContainer}>
                <Box className={classes.formInnerContainer}>
                    <Box mb={3}>
                        <Typography variant="h4" element="h4" color="primary">
                            ¡Contactame!
                        </Typography>
                    </Box>
                    <form>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth id="nombre" label="Nombre" variant="outlined" onChange={handleInputChange}/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth id="apellido" label="Apellido" variant="outlined" onChange={handleInputChange}/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required fullWidth error={emailInvalido} helperText="El email es obligatorio" id="email" label="Email" variant="outlined" onChange={handleInputChange}/> 
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth multiline={true} minRows={6} maxRows={6} id="mensaje" label="Mensaje" variant="outlined" onChange={handleInputChange}/>
                            </Grid>
                        </Grid>
                        <Box textAlign="center">
                            <Button className={classes.botonEnviar} size="large" variant="contained" color="primary" endIcon={<SendIcon/>} onClick={handleEnvio}>
                                Enviar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Paper>
            <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <Dialog open={success}>
                <DialogTitle id="alert-dialog-title">Mensaje enviado con éxito</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Muchas gracias por contactarnos, te responderemos a la brevedad.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" variant="contained" onClick={() => setSuccess(false)}>
                        Aceptar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ContactForm;