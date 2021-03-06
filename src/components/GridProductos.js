import CardProducto from "./CardProducto";
import {Grid, Box} from "@material-ui/core"
import { useEffect, useState } from "react";
import { getDocs,  collection, query, where} from '@firebase/firestore';
import { getDatabase } from "../firebase";
import LoadingScreen from "./LoadingScreen";

function GridProductos(props){
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getProductos = async (idCategoria) => {
             const productosCollection = collection(getDatabase(), 'productos');
             let arrProductos = [];
             if(idCategoria === 1 || idCategoria === 2){ ///si el ID es de una categoria existente (1 o 2) se filtran los productos, sino se muestran todos
                 const queryCategoria = query(productosCollection, where("idCategoria", "==", idCategoria));
                 const productosCategoriaSnapshot = await getDocs(queryCategoria);
                 arrProductos = productosCategoriaSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
             }
             else{
                 const productosSnapshot = await getDocs(productosCollection);
                 arrProductos = productosSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
             }
             setProductos(arrProductos);
             setLoading(false);
        };
        getProductos(parseInt(props.idCategoria)); 
    }, [props.idCategoria]);
    if(loading){
        return <LoadingScreen mensajeCarga="Cargando productos"/>
    }
    return (
        <Box my={2}>
            <Grid container spacing={2}>
            {
                productos.map(producto => {
                    return  (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={producto.id}>
                            <CardProducto producto={producto}/>
                        </Grid>
                    )
                })
            }
            </Grid>
        </Box>
    );
    
}

export default GridProductos;
