import { Grid, makeStyles, Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import Tema from "./tema";
import imgGuitarras from "../media/categoriasThumbnails/categoriaGuitarras.jpg"
import imgAmplificadores from "../media/categoriasThumbnails/categoriaAmplificadores.jpg"
import "../styles/links.css"

const useStyles = makeStyles({
    categoriaContainer:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: Tema.palette.common.white,
        minHeight: "450px",
        boxShadow: "1px 1px 3px rgba(0,0,0,0.25)"
    },
    imgContainer:{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        maxWidth: "700px",
        overflow: "hidden"
    },
    categoriaImg:{
        minWidth: "200px",
        maxWidth: "100%",
        '&:hover': {
            transform: "scale(1.1)"
        },
        transition: "500ms"
    }
})

function GridCategorias(){
    const classes = useStyles();
    return(
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Link to="/categoria/1" className={`links ${classes.categoriaContainer}`}>
                        <Box className={classes.imgContainer}>
                            <img className={classes.categoriaImg} alt="categoria guitarras" src={imgGuitarras}/>
                        </Box>
                        <Typography variant="h4" color="initial">
                            Guitarras
                        </Typography>
                        <Typography variant="h5" color="primary">
                            eléctricas
                        </Typography>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Link to="/categoria/2" className={`links ${classes.categoriaContainer}`}>
                        <Box className={classes.imgContainer}>
                            <img className={classes.categoriaImg} alt="categoria amplificadores" src={imgAmplificadores}/>
                        </Box>
                        <Typography variant="h4" color="initial">
                            Amplificadores
                        </Typography>
                        <Typography variant="h5" color="primary">
                            de guitarra
                        </Typography>
                    </Link>
                </Grid>
            </Grid>
        </>
    )
}

export default GridCategorias;