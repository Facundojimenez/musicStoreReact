import {Card, CardMedia,CardContent, Typography, makeStyles, Button, Box, Divider, CardActions} from '@material-ui/core';
import {Rating} from '@material-ui/lab';
import {ShoppingCart} from '@material-ui/icons'
import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    cardContent: {
        padding: "0"
    },
    cardBoxContent:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        minHeight: "100px"
    },
    overlay:{
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        top: "50%",
        left: "50%",
        opacity: "0",
        transform: "translate(-50%,-50%)",
        color: "white",
        textDecoration: "none",
        transition: "all 250ms",
        "&:hover":{
            opacity: "1",
            backgroundColor: "rgba(0,0,0,0.5)"
        }
    },
    linkContainer:{
        position: "relative"
    },
    cardFoto: {
        height: "300px",
        minWidth: "200px",
        objectFit: "contain"
    },
    itemCountContainer:{
        textAlign: "center"
    }
})

function CardProducto(props){
    const classes = useStyles();
    return(
        <Card className={classes.card}>
            <Link to={`productos/${props.id}`}>
                <Box className={classes.linkContainer}>
                    <CardMedia className={classes.cardFoto} component="img" image={props.urlImagen} title={` ${props.categoria} ${props.marca} ${props.modelo}`}/>
                    <Typography variant="h5" component="h5" className={classes.overlay}>
                        Ver más detalles
                    </Typography>
                </Box>
            </Link>
            <CardContent className={classes.cardContent}>
                <Box className={classes.cardBoxContent} py={1}>
                    <Typography variant="h5" component="h5">
                        {props.marca} {props.modelo}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="h6">
                        {props.categoria}
                    </Typography>
                    <Rating name="half-rating-read" defaultValue={props.calificacion} precision={0.5} readOnly />
                </Box>
                <Divider variant="middle" />
                <Box display="flex" flexDirection="column" alignItems="center" py={1}>
                    <Typography variant="h5" component="h6">
                        ${props.precio}
                    </Typography>
                </Box>
            </CardContent>
            <Box className={classes.itemCountContainer}>
                <ItemCount stock={props.stock}/>
            </Box>
            <CardActions>
                <Button variant="contained" color="primary" fullWidth startIcon={<ShoppingCart />}>
                    <Typography variant="body1" component="h6">
                        Agregar al carrito
                    </Typography>
                </Button>
            </CardActions>
        </Card>
    );
}

export default CardProducto;