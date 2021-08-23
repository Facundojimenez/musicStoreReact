import CardProducto from './CardProducto';
import { Box } from '@material-ui/core';
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {
    Navigation
  } from 'swiper/core';

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import '../styles/bannerSlider.css';
import Typography from '@material-ui/core/Typography'

SwiperCore.use([Navigation]);


function BannerRecomendaciones(props){
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        getProductos(); 
    }, []);
    const getProductos = async () => {
        const response = await (await fetch("https://raw.githubusercontent.com/Facundojimenez/musicStoreReact/main/src/data/dataProductos.json")).json();
        setProductos(response);
    }
    return(
        <>
            <Typography align="center" variant="h3" element="h4">
                También podría interesarte
            </Typography>
            <Box my={3}>
                <Swiper
                    navigation={true}
                    speed={1000}
                    spaceBetween={16}
                    slidesPerView={2}
                    freeMode={true}
                    threshold={8}
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                    breakpoints={{
                        "100": {
                            "slidesPerView": 1
                        },
                        "640": {
                            "slidesPerView": 2
                        },
                        "768": {
                            "slidesPerView": 3
                        },
                        "1024": {
                            "slidesPerView": 4
                        }
                    }}
                >
                {
                    productos.map(producto =>{
                        return (
                            <SwiperSlide key={producto.id} >
                                <CardProducto
                                        id={producto.id}
                                        marca={producto.marca}
                                        modelo={producto.modelo}
                                        precio={producto.precio}
                                        stock={producto.stock}
                                        categoria={producto.categoria}
                                        calificacion={producto.calificacion}
                                        urlLink={producto.id}
                                        urlImagen={producto.urlImagen}/>
                            </SwiperSlide>
                        )
                    })
                }
                </Swiper>
            </Box>
        </>
    )
}

export default BannerRecomendaciones;