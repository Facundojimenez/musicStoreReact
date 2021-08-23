import { makeStyles, Box, Grid, Typography } from "@material-ui/core";
import fotoBanner from "../media/banners/bannerHomeBottom.jpg"
import Tema from "./tema";
import arrOpiniones from "../data/dataOpiniones";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {
    Navigation,
    Autoplay
  } from 'swiper/core';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import '../styles/bannerSlider.css';


SwiperCore.use([Navigation, Autoplay]);

const useStyles = makeStyles({
    bannerEstatico:{
        minHeight: "20vh",
        padding: "3rem",
        color: Tema.palette.primary.contrastText,
        backgroundImage: `url(${fotoBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat"
    },
    iconoComillas:{
        backgroundColor: Tema.palette.primary.main,
        color: Tema.palette.primary.contrastText,
        borderRadius: "50%",
        padding: "0.5rem",
        marginBottom: "8px"
    },
    sliderOpiniones:{
        padding: "1rem 2.5rem",
        backgroundColor: Tema.palette.common.white,
        minHeight: "190px",
        maxHeight: "50%",
        color: Tema.palette.common.black,
        borderRadius: "0.25rem"
    }
})

function BannerHomeBottom(){
    const classes = useStyles();
    return (
        <Box className={classes.bannerEstatico}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={7}>
                    <Box ml={5}>
                        <Typography variant="h4" color="initial">
                            LA MÚSICA
                        </Typography>
                        <Typography variant="h4" color="initial">
                            ESTÁ CERCA
                        </Typography>
                        <Typography variant="h4" color="initial">
                            DE TU CASA
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Swiper 
                        slidesPerView={1}
                        spaceBetween={16}
                        navigation={true}
                        speed={1000}
                        centeredSlides={true}
                        centeredSlidesBounds={true}
                        autoplay={{
                            "delay": 5000,
                            "disableOnInteraction": true
                        }}
                    >      
                    {
                        arrOpiniones.map(banner => {
                            return  (
                                <SwiperSlide key={banner.id}>
                                    <Box className={`banner-contenido ${classes.sliderOpiniones}`}>
                                        <Box className={classes.iconoComillas}> 
                                            <FormatQuoteIcon fontSize="large"/>
                                        </Box>
                                        <Box mb={3}>
                                            <Typography variant="h6" component="p">
                                                {banner.mensaje}
                                            </Typography>
                                        </Box>
                                        <Typography variant="h6" component="h6">
                                            {banner.nombrePersona}
                                        </Typography>
                                        <Typography variant="body1" component="h6">
                                            {banner.plataformaOrigen}
                                        </Typography>
                                    </Box>
                                </SwiperSlide>  
                            )
                        })
                    }
                    </Swiper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default BannerHomeBottom;