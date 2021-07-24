import NavBar from './components/NavBar.js';
import GridProductos from './components/GridProductos.js';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	body: {
		backgroundColor: "#eee"
	}
})

function App() {
	const classes = useStyles();
  return (
    <Container className={classes.body}>
    	<NavBar/>
		<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore quis nesciunt quas! Dicta earum temporibus quae harum delectus, mollitia nam ipsam perspiciatis corrupti esse sint officiis. Culpa laborum fugiat eaque.</p>  
		<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore quis nesciunt quas! Dicta earum temporibus quae harum delectus, mollitia nam ipsam perspiciatis corrupti esse sint officiis. Culpa laborum fugiat eaque.</p>  
		<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore quis nesciunt quas! Dicta earum temporibus quae harum delectus, mollitia nam ipsam perspiciatis corrupti esse sint officiis. Culpa laborum fugiat eaque.</p>  
		<GridProductos/>
    </Container>
  );
}

export default App;
