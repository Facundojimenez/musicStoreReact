import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Box, IconButton, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyle = makeStyles({
    contenedor: {
        margin: "auto",
        display: "flex",
        height: "30px",
        width: "60%"
    },
    cantidadInput: {
        flexGrow: 1,
        textAlign: "center"
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

    return (
        <Box className={classes.contenedor}>
            <IconButton onClick={() => {
                if(cantidadElegida > 1){
                    setCantidad(cantidadElegida - 1);
                }
            }}>
                <RemoveIcon/>
            </IconButton>
            <input  className={classes.cantidadInput}
                    type="number"
                    value={cantidadElegida}
                    min="1"
                    max={props.stock}
                    readOnly={true}
            />
            <IconButton onClick={() => {
                if(cantidadElegida < props.stock){
                    setCantidad(cantidadElegida + 1);
                }
                else{
                    setSnackBarStatus(true)
                }
            }}>
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