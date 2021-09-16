import { Box, IconButton, makeStyles, Typography } from '@material-ui/core';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../context/CartContext';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import useLocalStorage from '../localStorage/useLocalStorage';

const useStyle = makeStyles({
    cantidadOutput: {
        textAlign: "center",
        minWidth: "48px"
    }
})

function ItemCount({producto}){
    console.log(producto)
    const classes = useStyle();
    const { calcularStockDisponible, arrLineaProductos, unidadesTotales, setUnidadesTotales, setArrLineaProductos } = useContext(CartContext);
    const [cantidadElegida, setCantidadElegida] = useLocalStorage("cantidadElegida", 0);
    const [snackBarStatusWarning, setSnackBarStatusWarning] = useState(false);
    const [stockDisponible, setStockDisponible] = useState(1);
    
    useEffect(() =>{
        const indiceLinea = arrLineaProductos.findIndex(lineaProducto => lineaProducto.producto.id === producto.id);
        setStockDisponible(calcularStockDisponible(producto))
        setCantidadElegida(indiceLinea !== -1 ? arrLineaProductos[indiceLinea].cantidad : 0);       ///Si el producto está en el carrito, muestro la cantidad de unidades seleccionadas, si no está, muestro 0. 
    }, [producto, arrLineaProductos, calcularStockDisponible, setCantidadElegida])

    //funcion que cierra el warning
    const handleCloseWarning = (reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setSnackBarStatusWarning(false);
    };
    ///funciones de agregado o quitado de cantidad de unidades al contador
    ///Busco si el producto está en el carrito, en caso de ser asi, le aumento la cantidad de unidades, en caso contrario lo agrego
    const sumarCantidad = () => {
        const indiceLinea = arrLineaProductos.findIndex(lineaProducto => lineaProducto.producto.id === producto.id);
        if(stockDisponible > 0){
            if(indiceLinea !== -1){
                arrLineaProductos[indiceLinea].cantidad++;
            }
            else{
                arrLineaProductos.push({producto: producto, cantidad: 1});
            }
            setArrLineaProductos(arrLineaProductos);
            setCantidadElegida(cantidadElegida + 1);
            setStockDisponible(stockDisponible - 1);
            setUnidadesTotales(unidadesTotales + 1);
        }
        else{
            setSnackBarStatusWarning(true);
        }
    }
    ///La funcion le resta unidades a la linea del producto en el carrito, y cuando ya no hay unidades, elimina la linea del carrito.
    const restarCantidad = () => {
        const indiceLinea = arrLineaProductos.findIndex(lineaProducto => lineaProducto.producto.id === producto.id);
        if(cantidadElegida >= 1){
            if(cantidadElegida === 1){
                arrLineaProductos.splice(indiceLinea, 1);
            }
            else{
                arrLineaProductos[indiceLinea].cantidad--;
            }
            setArrLineaProductos(arrLineaProductos);
            setCantidadElegida(cantidadElegida - 1);
            setUnidadesTotales(unidadesTotales - 1);
            setStockDisponible(stockDisponible + 1);
        }
    }
    return (
        <>
            <Box display="inline-flex" justifyContent="center" alignItems="center">
                <IconButton onClick={restarCantidad}>
                    <RemoveIcon/>
                </IconButton>
                <Box className={classes.cantidadOutput}>
                    <Typography variant="body1" element="span">
                        {cantidadElegida}
                    </Typography>
                </Box>
                <IconButton onClick={sumarCantidad}>
                    <AddIcon/>
                </IconButton>
            </Box>
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
                    {`El stock disponible  del artículo es: ${producto.stock} unidades` }
                </MuiAlert>
            </Snackbar>
        </>
    )
}

export default ItemCount;