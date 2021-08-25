import { useParams } from "react-router-dom";
import GridProductos from "../components/GridProductos";
import { Container, Box, Typography } from "@material-ui/core";

function CategoriasProductos(){
    const {id} = useParams();
    return (
        <>
            <Container>
                <Box my={5}>
                    <Typography variant="h3" element="h3"color="initial" align="center">
                        Nuestro Catálogo
                    </Typography>
                </Box>
            <GridProductos idCategoria={id}/>
		    </Container>
        </>
    )
}

export default CategoriasProductos;