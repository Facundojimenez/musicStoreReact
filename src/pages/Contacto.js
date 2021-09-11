import { Box, makeStyles } from "@material-ui/core";
import ContactForm from "../components/ContactForm";

const useStyles = makeStyles({
	contactFormContainer:{
		minHeight: "80vh",
		display: "flex",
		justifyContent: "center",
		padding: "48px 16px",
	}
})

function Contacto(){
    const classes = useStyles();
    return(
        <Box className={classes.contactFormContainer}>
			<ContactForm id="contactForm" />
		</Box>
    )
}

export default Contacto;