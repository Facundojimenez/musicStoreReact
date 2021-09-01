import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Box, IconButton, makeStyles, Typography } from '@material-ui/core';
import { useContext, useEffect, useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import CartContext from '../context/CartContext';

const useStyle = makeStyles({
    cantidadOutput: {
        textAlign: "center",
        minWidth: "48px"
    }
})

function ItemCount(props){
    const classes = useStyle();
    const { carritoVacio, calcularStockDisponible, arrLineaProductos } = useContext(CartContext);
    const [cantidadElegida, setCantidad] = useState(0);
    const [snackBarStatusWarning, setSnackBarStatusWarning] = useState(false);
    const [stockDisponible, setStockDisponible] = useState(1);
    useEffect(() =>{
        const indiceLinea = arrLineaProductos.findIndex(lineaProducto => lineaProducto.producto.id === props.producto.id);
        setStockDisponible(calcularStockDisponible(props.producto));
        setCantidad(indiceLinea !== -1 ? arrLineaProductos[indiceLinea].cantidad : 0)
        if(arrLineaProductos){
            console.log("arrLineaProductos[indiceLinea]: ", arrLineaProductos[indiceLinea]);
        }
    }, [props.producto])
    const handleCloseWarning = (reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setSnackBarStatusWarning(false);
    };
    ///funciones de agregado o quitado de cantidad de unidades al contador
    const sumarCantidad = () => {
        const indiceLinea = arrLineaProductos.findIndex(lineaProducto => lineaProducto.producto.id === props.producto.id);
        if(stockDisponible > 0){
            if(indiceLinea !== -1){
                arrLineaProductos[indiceLinea].cantidad++;
                console.log(arrLineaProductos[indiceLinea].cantidad)
            }
            else{
                arrLineaProductos.push({producto: props.producto, cantidad: 1})
            }
            if(props.actualizarPadre){
                props.actualizarPadre(cantidadElegida + 1)
            }
            setCantidad(cantidadElegida + 1);
            setStockDisponible(stockDisponible - 1)
        }
        else{
            setSnackBarStatusWarning(true)
        }
    }
    const restarCantidad = () => {
        const indiceLinea = arrLineaProductos.findIndex(lineaProducto => lineaProducto.producto.id === props.producto.id);
        if(cantidadElegida >= 1){
            if(cantidadElegida === 1){
                arrLineaProductos.splice(indiceLinea, 1);
            }
            else{
                arrLineaProductos[indiceLinea].cantidad--;
            }
            if(props.actualizarPadre){
                props.actualizarPadre(cantidadElegida - 1)
            }
            setCantidad(cantidadElegida - 1);
            setStockDisponible(stockDisponible + 1);
        }
        console.log(arrLineaProductos)
    }
    return (
        <>
            <Box display="inline-flex" justifyContent="center" alignItems="center">
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
            </Box>
            {/* <Typography variant="h5" component="h5">
                stock disponible: {stockDisponible} (a modo de desarrollo)
            </Typography> */}
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
                    {`El stock disponible  del artículo es: ${props.producto.stock} unidades` }
                </MuiAlert>
            </Snackbar>
        </>
    )
}

export default ItemCount;