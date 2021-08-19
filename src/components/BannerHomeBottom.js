import { makeStyles, Box } from "@material-ui/core";


const useStyles = makeStyles({
    banner:{
        backgroundColor: "red"
    }
})


function BannerHomeBottom(){
    const classes = useStyles();
    return (
        <Box className={classes.banner}>Este es mi banner xd</Box>
    )
}

export default BannerHomeBottom;