import arrBanners from '../data/dataBanners';
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay} from 'swiper/core';
import { Typography } from '@material-ui/core';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import '../styles/bannerSlider.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

function BannerBienvenida(){
    return (
        <Swiper
            navigation={true}
            speed={1000}
            centeredSlides={true}
            centeredSlidesBounds={true}
            pagination={{
                "dynamicBullets": true
            }}
            autoplay={{
                "delay": 6000,
                "disableOnInteraction": true
            }}
        >
        {
            arrBanners.map(banner => {
                return  (
                    <SwiperSlide key={banner.id} >
                            <div className="banner-contenido"
                             style={{'backgroundImage': `url(${banner.urlImagen})`,
                                     "color": "#fff", 
                                     "height": "50vh"}}>
                                <Typography variant="h2" component="h2">
                                    {banner.titulo}
                                </Typography>
                                <Typography variant="h4" component="h4">
                                    {banner.descripcion}
                                </Typography>
                            </div>
                    </SwiperSlide>
                ) 
            })
        }
        </Swiper>
    )
}

export default BannerBienvenida;