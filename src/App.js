import NavBar from './components/NavBar.js';
import GridProductos from './components/GridProductos.js';
import Footer from './components/Footer.js'
import { Container, Box, makeStyles, Typography } from '@material-ui/core';
import BannerSlider from './components/BannerSlider.js';

const useStyles = makeStyles({
	body: {
		backgroundColor: "#eee"
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
			<Footer/>
		</div>
  );
}

export default App;
