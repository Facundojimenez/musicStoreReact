import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Container, makeStyles, Grid, Typography, Hidden, Button } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Tema from "../components/tema";
import Separador from "../components/Separador";
import ItemCount from "../components/ItemCount";

const useStyle = makeStyles({
    productoContainer: {
        // padding: "16px",
    },
    imgProducto: {
        // minWidth: "100%",
        maxHeight: "500px",
        maxWidth: "100%",
        boxShadow: "4px 2px 8px rgba(0,0,0,0.25)"
    },
    panelCompra:{
        [Tema.breakpoints.up('md')]: {
            borderLeft: "2px solid #aaa", 
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
    const {id} = useParams();
    const [producto, setProducto] = useState({});
    const getProducto = async () => {
        const arrProductos = await (await fetch("https://raw.githubusercontent.com/Facundojimenez/musicStoreReact/main/src/data/dataProductos.json")).json();
        setProducto(arrProductos[id - 1]);
    };
    useEffect(() =>{
        getProducto();
    }, [])
    return(
        <Container>
            <Link to="/musicStoreReact/productos" style={{"textDecoration": "none", "color": "inherit", "margin": "16px"}}>
                <Box display="flex" alignItems="center">
                    <ArrowBackIcon/> 
                    <Typography variant="h5" color="initial">
                        Volver a Productos
                    </Typography>
                </Box>
            </Link>
            <Separador/>
            <Box marginTop={5}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box textAlign="center" className={classes.productoContainer}>
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
                                <Typography variant="h3" color="initial">
                                    ${producto.precio}
                                </Typography>
                                <Typography variant="h5" color="initial">
                                    Precio en efectivo o transferencia
                                </Typography>
                            </Box>
                            <Box className={classes.pagoContainer} style={{"borderColor": "grey"}}>
                                <Typography variant="h3" color="initial">
                                    ${producto.precio * 1.30}
                                </Typography>
                                <Typography variant="h5" color="initial">
                                    Precio en 12 Cuotas
                                </Typography>
                            </Box>
                            <Separador/>
                            <Box display="flex" alignItems="center">
                                <ItemCount stock={producto.stock}/>
                                <Button variant="contained" color="primary">
                                    <Typography variant="h6" component="h6">
                                        Comprar
                                    </Typography>
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Separador/>
            <Box my={5}>
                <Typography variant="h4" color="initial">
                    Descripción
                </Typography>
                <Typography variant="body1" color="initial">
                    {producto.descripcion}
                </Typography>
            </Box>
        </Container>
    )
}

export default DetalleProducto;