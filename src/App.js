import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js'
import { makeStyles } from '@material-ui/core';
import Tema from './components/tema.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contacto from './pages/Contacto.js';
import Homepage from './pages/Home.js'
import DetalleProducto from './pages/DetalleProducto.js';
import CategoriasProductos from './pages/CategoriasProductos.js';
import { CartProvider } from './context/CartContext.js';
import Carrito from './pages/Cart.js';

const useStyles = makeStyles({
	body: {
		backgroundColor: Tema.palette.background.default
	}
})

function App() {
	const classes = useStyles();
  	return (
	  	<CartProvider>
			<BrowserRouter>
				<div className={classes.body} >
					<NavBar/>
					<Switch>
						<Route exact path="/musicStoreReact">
							<Homepage/>
						</Route>
						<Route exact path="/musicStoreReact/categoria/:id">
							<CategoriasProductos/>
						</Route>
						<Route exact path="/musicStoreReact/contacto">
							<Contacto/>
						</Route>
						<Route exact path="/musicStoreReact/categoria/producto/:idproducto">
							<DetalleProducto/>
						</Route>
						<Route exact path="/musicStoreReact/cart">
							<Carrito/>
						</Route>
					</Switch>
					<Footer/>
				</div>
			</BrowserRouter>
		</CartProvider>
  );
}

export default App;
