import {Card, CardMedia,CardContent, Typography, makeStyles, Button, Box, Divider, CardActions} from '@material-ui/core';
import {Rating} from '@material-ui/lab';
import {ShoppingCart} from '@material-ui/icons'
import imagen from '../media/dual-terror.jpg';

const useStyles = makeStyles({
    card: {
        padding: "0.5rem",
    },
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
    cardFoto: {
        minHeight: "300px",
        minWidth: "200px"
    }
})

function CardProducto(){
    const classes = useStyles();
    return(
        <Card className={classes.card}>
            <CardMedia className={classes.cardFoto} image={imagen} title="Amplificador"/>
            <CardContent className={classes.cardContent}>
                <Box className={classes.cardBoxContent} py={1}>
                    <Typography gutterBottom variant="h5" component="h5">
                        Orange Dual Terror
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="h6">
                        AMPLIFICADOR DE GUITARRA
                    </Typography>
                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                </Box>
                <Divider variant="middle" />
                <Box display="flex" flexDirection="column" alignItems="center" py={1}>
                    <Typography variant="h5" component="h6">
                        $100.000
                    </Typography>
                </Box>
            </CardContent>
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