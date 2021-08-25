import { Grid, makeStyles, Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../styles/links.css"
import Tema from "./tema";
import imgGuitarras from "../media/categoriasThumbnails/categoriaGuitarras.jpg"
import imgAmplificadores from "../media/categoriasThumbnails/categoriaAmplificadores.jpg"

const useStyles = makeStyles({
    categoriaContainer:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: Tema.palette.common.white,
        minHeight: "450px"
    },
    imgContainer:{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        maxWidth: "700px"
    },
    categoriaImg:{
        minWidth: "200px",
        maxWidth: "100%"
    }
})

function GridCategorias(){
    const classes = useStyles();
    return(
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Link to="MusicStoreReact/categoria/1" className={`links ${classes.categoriaContainer}`}>
                        <Box className={classes.imgContainer}>
                            <img className={classes.categoriaImg} alt="strat" src={imgGuitarras}/>
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
                    <Link to="MusicStoreReact/categoria/2" className={`links ${classes.categoriaContainer}`}>
                        <Box className={classes.imgContainer}>
                            <img className={classes.categoriaImg} alt="ac30" src={imgAmplificadores}/>
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