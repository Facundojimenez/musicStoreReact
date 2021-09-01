import { Container, Typography } from "@material-ui/core";
import { useContext } from "react";
import LineaProducto from "../components/LineaProducto";
import CartContext from "../context/CartContext";

function Carrito(){
    const {arrLineaProductos} = useContext(CartContext);
    console.log(arrLineaProductos)
    return (
        <Container maxWidth="md">
            <Typography align="center" variant="h2" component="h2">
                Este es mi carrito
            </Typography>
            {
                arrLineaProductos.map(linea => {
                    return (
                        <LineaProducto key={linea.producto.id} linea={linea}/>
                    )
                })
            }
        </Container>
    )
}

export default Carrito;