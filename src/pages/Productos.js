import { Container, Box, Typography } from '@material-ui/core';
import GridProductos from '../components/GridProductos';

function Productos(){
    return(
        <Container>
            <Box my={5}>
                <Typography variant="h3" element="h3"color="initial" align="center">
                    Nuestro Catálogo
                </Typography>
            </Box>
            <GridProductos/>
		</Container>
    )
}

export default Productos;