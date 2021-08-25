import BannerBienvenida from "../components/BannerBienvenida";
import BannerHomeBottom from "../components/BannerHomeBottom";
import {Typography, Box, Container} from '@material-ui/core'
import BannerRecomendaciones from "../components/BannerRecomendaciones";

function Homepage(){
    return (
        <>
            <BannerBienvenida/>
            <Container>
                <Box my={5}>
                    <Typography variant="h3" component="h3" color="initial" align="center">
                        Homepage
                    </Typography>
                </Box>
                <BannerRecomendaciones urlBase={`MusicStoreReact/productos`}/>
            </Container>
            <BannerHomeBottom/>
        </>
    )
}

export default Homepage;