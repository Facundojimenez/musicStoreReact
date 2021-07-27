
import { makeStyles, Typography } from "@material-ui/core"
import Tema from "./tema";

const useStyles = makeStyles({
    footer: {
        minHeight: "10vh",
        maxHeight: "300px",
        padding: "1rem",
        backgroundColor: Tema.palette.primary.main
    }
})

function Footer(){
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <Typography variant="h1" color="initial">
                footer
            </Typography>
        </div>
     )
}

export default Footer