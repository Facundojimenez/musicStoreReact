import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Container, makeStyles, Grid, Typography, Hidden, Button } from "@material-ui/core";
import Tema from "../components/tema";
import Separador from "../components/Separador";
import ItemCount from "../components/ItemCount";
import "../styles/links.css"
import BannerRecomendaciones from "../components/BannerRecomendaciones";
import Breadcrumbs from "../components/Breadcrumbs";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";
import {doc, getDoc} from '@firebase/firestore'
import { getData } from "../firebase";

const useStyle = makeStyles({
    imgProducto: {
        maxHeight: "500px",
        maxWidth: "100%",
        boxShadow: "1px 1px 6px rgba(0,0,0,0.25)"
    },
    panelCompra:{
        [Tema.breakpoints.up('md')]: {
            borderLeft: "1px solid #aaa", 
        },
        padding: "16px"
    },
    pagoContainer:{
        borderLeft: `8px solid ${Tema.palette.primary.main}`,
        padding: "4px",
        paddingLeft: "28px",
        marginBottom: "1rem"
    }
})

function DetalleProducto(){
    const classes = useStyle();
    const {idproducto} = useParams();
    const [producto, setProducto] = useState({});
    const {unidadesTotales} = useContext(CartContext);
    useEffect(() =>{
        const getProducto = async (idProd) => {
            const productoRef = doc(getData(), 'productos', idproducto.toString()); ///busco el producto por el ID (debe ser una string)
            const productoSnap = await getDoc(productoRef);
            setProducto({id: parseInt(idProd), ...productoSnap.data()});
        };
        getProducto(idproducto);
    }, [idproducto]) ///Al poner ID lo que hace es mirar cada vez que reciba nuevas props para volver a hacer el fetch del producto
    return(
        <Container>
            <Breadcrumbs urlBack="/musicStoreReact/categoria/0" texto="Volver a Productos"/>
            <Separador/>
            <Box marginTop={5}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box textAlign="center">
                            <Typography variant="h4" color="initial">
                                {producto.marca} {producto.modelo} 
                            </Typography>
                            <img src={producto.urlImagen} className={classes.imgProducto} alt={`${producto.marca} ${producto.modelo}`}/>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Hidden mdUp>
                            <Separador/>
                        </Hidden>
                        <Box className={classes.panelCompra}>
                            <Box className={classes.pagoContainer}>
                                <Typography variant="h3">
                                    ${producto.precio}
                                </Typography>
                                <Typography variant="h5">
                                    Precio en efectivo o transferencia
                                </Typography>
                            </Box>
                            <Box className={classes.pagoContainer} style={{"borderColor": "grey"}}>
                                <Typography variant="h3">
                                    ${producto.precio * 1.30}
                                </Typography>
                                <Typography variant="h5">
                                    Precio en 12 Cuotas
                                </Typography>
                            </Box>
                            <Separador margenY="1rem"/>
                            <Box display="flex" alignItems="center">
                                <ItemCount producto={producto}/>
                                <Button disabled={unidadesTotales === 0 ? true : false} variant="contained" color="primary" startIcon={<ShoppingCart />}>
                                    <Link to="/musicStoreReact/cart" className="links">
                                        <Typography variant="h6" component="h6">
                                            Ir al carrito
                                        </Typography>
                                    </Link>
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Separador margenY="32px"/>
            <Box mb={5}>
                <Typography variant="h4" color="initial">
                    Descripción
                </Typography>
                <Typography variant="body1" color="initial">
                    {producto.descripcion}
                </Typography>
            </Box>
            <BannerRecomendaciones idProdActual={idproducto}/>
        </Container>
    )
}

export default DetalleProducto;