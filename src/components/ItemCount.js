import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Box, IconButton, makeStyles } from '@material-ui/core';
import { useState } from 'react';

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
    return (
        <Box className={classes.contenedor}>
            <IconButton onClick={() => {
                if(cantidadElegida > 0){
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
                    alert(`El stock máximo de este articulo es: ${props.stock} unidades`)
                }
            }}>
                <AddIcon/>
            </IconButton>
        </Box>
    )
}

export default ItemCount;