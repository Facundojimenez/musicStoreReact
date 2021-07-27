import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {
    Navigation,
    Pagination,
    Autoplay
  } from 'swiper/core';
import { Typography } from '@material-ui/core';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import './bannerSlider.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const arrBanners = [
    {
        id: 1,
        titulo: "Music Store",
        descripcion: "TU LUGAR IDEAL",
        urlImagen: require('../media/banners/bannerBienvenida1.jpeg').default
    },
    {
        id: 2,
        titulo: "Las mejores marcas",
        descripcion: "DE GUITARRAS Y EQUIPOS",
        urlImagen: require('../media/banners/bannerBienvenida2.jpeg').default
    },
    {
        id: 3,
        titulo: "Hasta 12 cuotas",
        descripcion: "SIN INTERÉS",
        urlImagen: require('../media/banners/bannerBienvenida3.jpeg').default
    }
]

function BannerSlider(){
    return (
        <Swiper pagination={{
                    "dynamicBullets": true
                }}
                navigation={true}
                speed={1000}
                centeredSlides={true}
                centeredSlidesBounds={true}
                autoplay={{
                    "delay": 6000,
                    "disableOnInteraction": true
                  }}
                // autoHeight={true}
                // spaceBetween={0}
                // slidesPerView={1}
        >
        {
            arrBanners.map(banner => {
                return  <SwiperSlide key={banner.id}>
                            <div className="container-img-banner" style={{'backgroundImage': `url(${banner.urlImagen})`}}>
                                <Typography variant="h2" component="h2">
                                    {banner.titulo}
                                </Typography>
                                <Typography variant="h4" component="h4">
                                    {banner.descripcion}
                                </Typography>
                            </div>
                        </SwiperSlide>  
            })
        }
        </Swiper>
    )
}

export default BannerSlider;