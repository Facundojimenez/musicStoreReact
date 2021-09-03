import { makeStyles, Typography, IconButton, Grid } from "@material-ui/core";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles({
    lineaContainer:{
        position: "relative",
        padding: "10px",
        margin: "10px auto",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "2px 2px 5px rgba(0,0,0,0.25)"
    },
    lineaImg: {
        maxWidth: "150px"
    },
    botonQuitar: {
        position: "absolute",
        right: "0%",
        top: "0%"
    }
})

function LineaProducto({linea}){
    const {eliminarLineaProducto} = useContext(CartContext);
    const classes = useStyles();
    return (
        <Grid container  className={classes.lineaContainer} alignItems="center">
            <Grid item xs={6} md={3}>
                <img className={classes.lineaImg} src={linea.producto.urlImagen} alt={`${linea.producto.marca} ${linea.producto.modelo}`}/>
            </Grid>
            <Grid item xs={6} md={3}>
                <Typography variant="h5" color="initial">
                    {linea.producto.marca} {linea.producto.modelo}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                    x{linea.cantidad} unidades
                </Typography>
            </Grid>
            <Grid item xs={6} md={3} align="center">
                <ItemCount producto={linea.producto}/>
            </Grid>
            <Grid item xs={6} md={3}>
                <Typography variant="h5" color="primary" align="center">
                    ${linea.producto.precio * linea.cantidad}
                </Typography>
            </Grid>
            <IconButton className={classes.botonQuitar} onClick={() => eliminarLineaProducto(linea)}>
                <ClearIcon fontSize="large" color="error"/>
            </IconButton>
        </Grid>
    )
}

export default LineaProducto;