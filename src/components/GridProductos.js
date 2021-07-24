import CardProducto from "./CardProducto";
import {Grid} from "@material-ui/core"


const arrProductos = [
    {
        id: 1,
        marca: "Orange",
        modelo: "Dual Terror",
        categoria: "Amplificador",
        calificacion: 4.5,
        precio: 100000,
        urlImagen: '../media/dual-terror.jpg'
    },
    {
        id: 2,
        marca: "Suhr",
        modelo: "Stratocaster",
        categoria: "Guitarra Eléctrica",
        calificacion: 5,
        precio: 250000,
        urlImagen: '../media/strato.jpg'
    },
    {
        id: 3,
        marca: "Orange",
        modelo: "Dual Terror",
        categoria: "Amplificador",
        calificacion: 4.5,
        precio: 100000,
        urlImagen: '../media/dual-terror.jpg'
    }
]

function GridProductos(){
    return (
        <Grid container spacing={2}>
            {
                arrProductos.map(producto => {
                    return  <Grid item xs={12} sm={6} md={4} lg={3} key={producto.id}>
                                <h1>marca: {producto.marca}</h1>
                                <CardProducto   marca={producto.marca}
                                                modelo={producto.modelo}
                                                precio={producto.precio}
                                                calificacion={producto.calificacion}
                                                urlFoto={producto.urlFoto}/>
                            </Grid>
                })
            }
        </Grid>
    );
}

export default GridProductos;
