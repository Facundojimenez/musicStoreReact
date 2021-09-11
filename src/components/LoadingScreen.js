import { CircularProgress, makeStyles, Typography, Box } from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }
})

function LoadingScreen(props){
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <Box my={4}>
                <Typography variant="h4" component="h4" color="primary">
                    {props.mensajeCarga}
                </Typography>
            </Box>
            <CircularProgress/>
        </Box>
    )

}

export default LoadingScreen;