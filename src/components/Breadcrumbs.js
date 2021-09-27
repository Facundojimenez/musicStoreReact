import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Box, makeStyles, Typography} from '@material-ui/core'
import { Link } from 'react-router-dom';
import "../styles/links.css"
import Tema from './tema';

const useStyles = makeStyles({
    letras: {
        color: Tema.palette.common.black,
        "&:hover": {
            color: Tema.palette.primary.main
        }
    }
})

function Breadcrumbs(props){
    const classes = useStyles();
    return (
        <Box mt={2}>
            <Link to={props.urlBack} className={`links ${classes.letras}`}>
                <Box display="flex" alignItems="center">
                    <ArrowBackIcon/> 
                    <Typography variant="h5">
                       {props.texto}
                    </Typography>
                </Box>
            </Link>
        </Box>
    )
}

export default Breadcrumbs;