import CardProducto from "./CardProducto";
import {Grid, Box} from "@material-ui/core"
import { useEffect, useState } from "react";

function GridProductos(props){
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        getProductos(); 
    }, []);
    const getProductos = async () => {
        const response = await (await fetch("https://raw.githubusercontent.com/Facundojimenez/musicStoreReact/main/src/data/dataProductos.json")).json();
        if(props.idCategoria === undefined){
            const arrProductos = response.filter(producto => producto.idCategoria === props.idCategoria)
            setProductos(arrProductos);
        }
       else{
           setProductos(response);
       }
       console.log(props.idCategoria)
    }
    return (
        <Box my={2}>
            <Grid container spacing={2}>
            {
                productos.map(producto => {
                    return  (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={producto.id}>
                            <CardProducto  
                                id={producto.id}
                                marca={producto.marca}
                                modelo={producto.modelo}
                                precio={producto.precio}
                                stock={producto.stock}
                                categoria={producto.categoria}
                                calificacion={producto.calificacion}
                                habilitarBotones={true}
                                urlLink={`productos/${producto.id}`}
                                urlImagen={producto.urlImagen}/>
                        </Grid>
                    )
                })
            }
            </Grid>
        </Box>
    );
    
}

export default GridProductos;
