import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Box, IconButton, makeStyles, Typography, Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { ShoppingCart } from '@material-ui/icons';

const useStyle = makeStyles({
    contenedor: {
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
    },
    cantidadOutput: {
        textAlign: "center",
        minWidth: "48px"
    }
})

function ItemCount(props){
    const classes = useStyle();
    const [cantidadElegida, setCantidad] = useState(1);
    const [snackBarStatusWarning, setSnackBarStatusWarning] = useState(false);
    const [snackBarStatusError, setSnackBarStatusError] = useState(false);
    useEffect(() =>{
        setCantidad(1);
    }, [props.idProducto])
    const handleCloseWarning = (reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setSnackBarStatusWarning(false);
    };
    const handleCloseError = (reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setSnackBarStatusError(false);
    };
    ///funciones de agregado o quitado de cantidad de unidades
    const sumarCantidad = () => {
        if(cantidadElegida < props.stock){
            setCantidad(cantidadElegida + 1);
        }
        else{
            setSnackBarStatusWarning(true)
        }
    }
    const restarCantidad = () =>{
        if(cantidadElegida > 1){
            setCantidad(cantidadElegida - 1);
        }
    }
    return (
        <>
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
                <Button onClick={() => props.onAdd(cantidadElegida, setSnackBarStatusError)} variant="contained" color="primary" startIcon={<ShoppingCart />}>
                    <Typography variant="h6" component="h6">
                        Agregar al carrito
                    </Typography>
                </Button>
            </Box>
            <Box my={3}>
                <Button variant="contained" fullWidth disabled={props.cantidadTotal === 0 ? true : false}>
                    Finalizar compra
                </Button>
            </Box>
            <Typography variant="h5" component="h5">
                unidades en el carrito: {props.cantidadTotal}
            </Typography>
            <Typography variant="h5" component="h5">
                stock disponible: {props.stock} (a modo de desarrollo)
            </Typography>
            <Snackbar
                open={snackBarStatusWarning}
                autoHideDuration={5000}
                onClose={handleCloseWarning}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <MuiAlert variant="filled" onClose={handleCloseWarning} severity="warning">
                    {`El stock disponible  del artículo es: ${props.stock} unidades` }
                </MuiAlert>
            </Snackbar>
            <Snackbar
                open={snackBarStatusError}
                autoHideDuration={5000}
                onClose={handleCloseError}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <MuiAlert variant="filled" onClose={handleCloseError} severity="error">
                    No hay stock suficiente para la cantidad seleccionada
                </MuiAlert>
            </Snackbar>
        </>
    )
}

export default ItemCount;