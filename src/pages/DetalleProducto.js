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
        maxWidth: "100%"
    },
    panelCompra:{
        [Tema.breakpoints.up('md')]: {
            borderLeft: "2px solid grey", 
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
        const arrProductos = await (await fetch("https://raw.githubusercontent.com/Facundojimenez/musicStoreReact/main/src/data/jsonProductos.json")).json();
        setProducto(arrProductos[id - 1]);
    };
    useEffect(() =>{
        getProducto();
    }, [])
    return(
        <Container>
            <Box marginTop={3}>
                <Link to="/productos" style={{"textDecoration": "none", "color": "inherit"}}>
                    <Typography variant="h5" color="initial">
                        <ArrowBackIcon/> 
                        Volver
                    </Typography>
                </Link>
            </Box>
            <Separador/>
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
        </Container>
    )
}

export default DetalleProducto;