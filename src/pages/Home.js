import BannerSlider from "../components/BannerSlider";
import BannerHomeBottom from "../components/BannerHomeBottom";
import {Typography, Box} from '@material-ui/core'


function Homepage(){
    return (
        <>
            <BannerSlider/>
            <Box my={5}>
                <Typography variant="h3" component="h3" color="initial" align="center">
                    Homepage
                </Typography>
            </Box>
            <BannerHomeBottom/>
        </>
    )
}

export default Homepage;