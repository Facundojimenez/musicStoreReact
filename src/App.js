import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js'
import { makeStyles } from '@material-ui/core';
import Tema from './components/tema.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Productos from './pages/Productos.js';
import Contacto from './pages/Contacto.js';
import Homepage from './pages/Home.js'
import DetalleProducto from './pages/DetalleProducto.js';
import CategoriasProductos from './pages/CategoriasProductos.js';

const useStyles = makeStyles({
	body: {
		backgroundColor: Tema.palette.background.default
	}
})

function App() {
	const classes = useStyles();
  return (
	  	<BrowserRouter>
			<div className={classes.body} >
				<NavBar/>
				<Switch>
					<Route exact path="/musicStoreReact">
						<Homepage/>
					</Route>
					<Route exact path="/musicStoreReact/productos">
						<Productos/>
					</Route>
					<Route exact path="/musicStoreReact/categoria/:id">
						<CategoriasProductos/>
					</Route>
					<Route exact path="/musicStoreReact/contacto">
						<Contacto/>
					</Route>
					<Route exact path="/musicStoreReact/productos/:id">
						<DetalleProducto/>
					</Route>
				</Switch>
				<Footer/>
			</div>
		</BrowserRouter>
  );
}

export default App;
