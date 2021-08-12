import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Box, IconButton, makeStyles, Typography } from '@material-ui/core';
import { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyle = makeStyles({
    contenedor: {
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        height: "30px",
        width: "60%"
    },
    cantidadOutput: {
        textAlign: "center",
        minWidth: "48px"
    }
})

function ItemCount(props){
    const classes = useStyle();
    const [cantidadElegida, setCantidad] = useState(1);
    const [snackBarStatus, setSnackBarStatus] = useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setSnackBarStatus(false);
    };
    ///funciones de agregado o quitado de cantidad de unidades
    const sumarCantidad = () => {
        if(cantidadElegida < props.stock){
            setCantidad(cantidadElegida + 1);
        }
        else{
            setSnackBarStatus(true)
        }
    }
    const restarCantidad = () =>{
        if(cantidadElegida > 1){
            setCantidad(cantidadElegida - 1);
        }
    }
    return (
        <Box className={classes.contenedor}>
            <IconButton onClick={() => restarCantidad()}>
                <RemoveIcon/>
            </IconButton>
            <Box className={classes.cantidadOutput}>
                <Typography variant="body1" element="span">
                    {cantidadElegida}
                </Typography>
            </Box>
            <IconButton onClick={() => sumarCantidad()}>
                <AddIcon/>
            </IconButton>
            <Snackbar
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                open={snackBarStatus}
                autoHideDuration={5000}
                onClose={handleClose}
            >
                <MuiAlert variant="filled" onClose={handleClose} severity="info">
                    {`El stock disponible  del artículo es: ${props.stock} unidades` }
                </MuiAlert>
            </Snackbar>
        </Box>
    )
}

export default ItemCount;