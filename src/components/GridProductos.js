import CardProducto from "./CardProducto";
import {Grid, Box} from "@material-ui/core"
import arrProductos from "../data/dataProductos";
import { useEffect, useState } from "react";

function GridProductos(){
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        // console.log("log prods", productos);
        getProductos();
        // console.log("log prods", productos);
    }, []);


    const getProductos = async () => {
        const response = await (await fetch("../data/jsonProductos.json")).json();
        setProductos(response);
    } 

    return (
        <Box my={2}>
            {
                productos.map(prod => {
                        return (
                            <div key={prod.id}>
                                prod {prod.urlImagen}
                                <img src={prod.urlImagen} alt={prod.modelo}></img>
                            </div>
                        )
                    }
                )
            }
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
