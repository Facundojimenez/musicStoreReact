import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Box, Typography} from '@material-ui/core'
import { Link } from 'react-router-dom';
import "../styles/links.css"

function Breadcrumbs(props){
    return (
        <Box mt={2}>
            <Link to={props.urlBack} className="links">
                <Box display="flex" alignItems="center">
                    <ArrowBackIcon/> 
                    <Typography variant="h5" color="initial">
                       {props.texto}
                    </Typography>
                </Box>
            </Link>
        </Box>
    )
}

export default Breadcrumbs;