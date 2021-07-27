import CardProducto from "./CardProducto";
import {Grid, Box} from "@material-ui/core"


const arrProductos = [
    {
        id: 1,
        marca: "Gibson",
        modelo: "Les Paul R9",
        categoria: "Guitarra eléctrica",
        calificacion: 5,
        precio: 280000,
        urlImagen: require('../media/guitarras/lespaul.jpg').default
    },
    {
        id: 2,
        marca: "Suhr",
        modelo: "Stratocaster",
        categoria: "Guitarra Eléctrica",
        calificacion: 5,
        precio: 250000,
        urlImagen: require('../media/guitarras/suhr.jpg').default
    },
    {
        id: 3,
        marca: "Fender",
        modelo: "Telecaster",
        categoria: "Guitarra eléctrica",
        calificacion: 4.5,
        precio: 100000,
        urlImagen: require('../media/guitarras/tele.jpg').default
    },
    {
        id: 4,
        marca: "ESP",
        modelo: "Horizon II",
        categoria: "Guitarra eléctrica",
        calificacion: 5,
        precio: 220000,
        urlImagen: require('../media/guitarras/horizon.jpg').default
    },
    {
        id: 5,
        marca: "Fender",
        modelo: "Stratocaster",
        categoria: "Guitarra eléctrica",
        calificacion: 4.5,
        precio: 190000,
        urlImagen: require('../media/guitarras/strato.jpg').default
    },
    {
        id: 6,
        marca: "Orange",
        modelo: "Dual Terror",
        categoria: "Amplificador",
        calificacion: 4,
        precio: 120000,
        urlImagen: require('../media/amplificadores/dual-terror.jpg').default
    },
    {
        id: 7,
        marca: "Marshall",
        modelo: "JCM900",
        categoria: "Amplificador",
        calificacion: 4,
        precio: 390000,
        urlImagen: require('../media/amplificadores/jcm-900.jpg').default
    },
    {
        id: 8,
        marca: "Vox",
        modelo: "AC30",
        categoria: "Amplificador",
        calificacion: 4.5,
        precio: 150000,
        urlImagen: require('../media/amplificadores/ac30.jpg').default
    },
    {
        id: 9,
        marca: "Fender",
        modelo: "Deluxe reverb",
        categoria: "Amplificador",
        calificacion: 5,
        precio: 300000,
        urlImagen: require('../media/amplificadores/deluxe-reverb.jpg').default
    }
]

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
