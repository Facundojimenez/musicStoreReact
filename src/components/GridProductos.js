import CardProducto from "./CardProducto";
import {Grid, Box} from "@material-ui/core"
import arrProductos from "../data/dataProductos";

function GridProductos(){
    return (
        <Box my={2}>
            <Grid container spacing={2}>
            {
                arrProductos.map(producto => {
                    return  <Grid item xs={12} sm={6} md={4} lg={3} key={producto.id}>
                                <CardProducto   marca={producto.marca}
                                                modelo={producto.modelo}
                                                precio={producto.precio}
                                                stock={producto.stock}
                                                categoria={producto.categoria}
                                                calificacion={producto.calificacion}
                                                urlImagen={producto.urlImagen}/>
                            </Grid>
                })
            }
            </Grid>
        </Box>
    );
}

export default GridProductos;
