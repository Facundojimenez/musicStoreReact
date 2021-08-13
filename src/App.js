import NavBar from './components/NavBar.js';
import GridProductos from './components/GridProductos.js';
import Footer from './components/Footer.js'
import { Container, Box, makeStyles, Typography } from '@material-ui/core';
import BannerSlider from './components/BannerSlider.js';
import ContactForm from './components/ContactForm.js';
import Tema from './components/tema.js';

const useStyles = makeStyles({
	body: {
		backgroundColor: Tema.palette.background.default
	},
	contactFormContainer:{
		display: "flex",
		justifyContent: "center",
		padding: "48px 16px",
		backgroundColor: Tema.palette.primary.main
	}
})

function App() {
	const classes = useStyles();
  return (
		<div className={classes.body} >
			<NavBar/>
			<BannerSlider/>
			<Container>
				<Box my={5}>
					<Typography variant="h3" element="h3"color="initial" align="center">
						Nuestro Catálogo
					</Typography>
				</Box>
				<GridProductos/>
			</Container>
			<Box className={classes.contactFormContainer}>
				<ContactForm id="contactForm" />
			</Box>
			<Footer/>
		</div>
  );
}

export default App;
