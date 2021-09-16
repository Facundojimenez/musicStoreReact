import CardProducto from './CardProducto';
import { Box, Typography } from '@material-ui/core';
import {getDatabase} from '../firebase';
import {collection, getDocs} from '@firebase/firestore';
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import '../styles/bannerSlider.css';

SwiperCore.use([Navigation]);


function BannerRecomendaciones(props){
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const getProductos = async (idProdActual) => {
            const productosCollection = collection(getDatabase(), 'productos');
            const productosSnapshot = await getDocs(productosCollection);
            const arrProductos = productosSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()})).filter(producto => producto.id !== idProdActual.toString())
            setProductos(arrProductos);
        };
        getProductos(parseInt(props.idProdActual)); 
    }, [props.idProdActual]);
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
                                <CardProducto producto={producto}/>
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