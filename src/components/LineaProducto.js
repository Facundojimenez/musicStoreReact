import { Box, Grid } from "@material-ui/core";
import { makeStyles, Typography } from "@material-ui/core";
import ItemCount from "./ItemCount";
import { useContext, useEffect, useState } from "react";
import CartContext from "../context/CartContext";

const useStyles = makeStyles({
    lineaImg: {
        width: "100%"
    }
})

function LineaProducto({linea}){
    const [cantidadItem, setCantidadItem] = useState(linea.cantidad);

    const classes = useStyles();
    if(cantidadItem > 0){
        return (
            <Grid container spacing={2} style={{padding: "10px", margin: "10px auto", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "2px 2px 5px rgba(0,0,0,0.25)"}} alignItems="center">
                <Grid item xs={6} md={3}>
                    <img className={classes.lineaImg} src={linea.producto.urlImagen} alt={`${linea.producto.marca} ${linea.producto.modelo}`}/>
                </Grid>
                <Grid item xs={6} md={3}>
                   <Typography variant="h5" color="initial">
                    {linea.producto.marca} {linea.producto.modelo}
                   </Typography>
                </Grid>
                <Grid item xs={6} md={3} align="center">
                    <ItemCount producto={linea.producto} actualizarPadre={setCantidadItem}/>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Typography variant="h5" color="primary" align="center">
                        ${linea.producto.precio * linea.cantidad}
                    </Typography>
                </Grid>
            </Grid>
        )
    }
    else{
        return <> </>
    }
}

export default LineaProducto;