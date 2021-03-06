import {Typography, Box, Container} from '@material-ui/core'
import BannerBienvenida from "../components/BannerBienvenida";
import BannerHomeBottom from "../components/BannerHomeBottom";
import BannerRecomendaciones from "../components/BannerRecomendaciones";
import GridCategorias from "../components/GridCategorias";
import Separador from "../components/Separador";

function Homepage(){
    return (
        <>
            <BannerBienvenida/>
            <Container>
                <Box my={5}>
                    <Typography variant="h3" component="h3" color="initial" align="center">
                        Descubrí nuestros productos
                    </Typography>
                </Box>
                <GridCategorias/>
                <Separador margenY="32px"/>
                <BannerRecomendaciones/>
            </Container>
            <BannerHomeBottom/>
        </>
    )
}

export default Homepage;