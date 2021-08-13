import { makeStyles, Typography, IconButton, Container, Box } from "@material-ui/core"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import Tema from "./tema";

const useStyles = makeStyles({
    letrasBlancas: {
        color: Tema.palette.common.white
    },
    footer: {
        minHeight: "10vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        maxHeight: "300px",
        padding: "1rem",
        color: Tema.palette.common.white,
        backgroundColor: Tema.palette.primary.dark
    }
})

function Footer(){
    const classes = useStyles();
    return (
        <Container maxWidth={false} className={classes.footer}>
            <Typography textalign="center" variant="h5" element="h4" color="initial">
                ¡Seguime en mis redes!
            </Typography>
            <Box display="flex">
                <IconButton href="https://github.com/Facundojimenez" target="_blank" className={classes.letrasBlancas}>
                    <GitHubIcon fontSize="large"/>
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/facundo-jimenez-980a831ba/" target="_blank" className={classes.letrasBlancas}>
                    <LinkedInIcon fontSize="large"/>
                </IconButton>
            </Box>
        </Container>
     )
}

export default Footer