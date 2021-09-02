import { Box, Container, Typography, makeStyles } from "@material-ui/core";
import { useContext } from "react";
import LineaProducto from "../components/LineaProducto";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles/links.css"
import Tema from "../components/tema";

const useStyles = makeStyles({
    carritoVacioContainer:{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    },
    detalleCompra: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        padding: " 16px 48px",
        backgroundColor: Tema.palette.common.white,
        borderRadius: "10px",
        boxShadow: "2px 2px 5px rgba(0,0,0,0.25)",
        minHeight: "25vh"
    }
})

function Cart(){
    const classes = useStyles();
    const {arrLineaProductos, calcularTotal, unidadesTotales} = useContext(CartContext);
    if(arrLineaProductos.length > 0){
        return (
            <Container maxWidth="md">
                <Box my={2}>
                    <Typography align="center" variant="h2" component="h2">
                        Carrito
                    </Typography>
                </Box>
                <Box my={5}>
                {
                    arrLineaProductos.map(linea => {
                        return (
                            <LineaProducto key={linea.producto.id} linea={linea}/>
                        )
                    })
                }
                    <Box className={classes.detalleCompra}>
                        <Typography variant="h3" align="center">
                            Detalle de la compra
                        </Typography>
                        <Typography variant="h5">
                            Cantidad de artículos: {unidadesTotales}
                        </Typography>
                        <Typography variant="h5">
                            Importe total: ${calcularTotal()}
                        </Typography>
                    </Box>
                </Box>
            </Container>
        )
    }
    else{
        return (
            <Container className={classes.carritoVacioContainer} maxWidth="md">
                <Box>
                    <Typography align="center" variant="h2" component="h2">
                        No hay productos en el carrito
                    </Typography>
                    <Link to="categoria/0" className="links">
                        <Typography variant="h4" align="center" color="primary">
                            IR A PRODUCTOS
                        </Typography>
                    </Link>
                </Box>
            </Container>
        )
    }
}

export default Cart;