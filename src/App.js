import { makeStyles } from '@material-ui/core';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js'
import Tema from './components/tema.js';
import { CartProvider } from './context/CartContext.js';
import Contacto from './pages/Contacto.js';
import Homepage from './pages/Home.js'
import DetalleProducto from './pages/DetalleProducto.js';
import CategoriasProductos from './pages/CategoriasProductos.js';
import Cart from './pages/Cart.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
						<Route exact path="/">
							<Homepage/>
						</Route>
						<Route exact path="/categoria/:id">
							<CategoriasProductos/>
						</Route>
						<Route exact path="/contacto">
							<Contacto/>
						</Route>
						<Route exact path="/categoria/producto/:idproducto">
							<DetalleProducto/>
						</Route>
						<Route exact path="/cart">
							<Cart/>
						</Route>
					</Switch>
					<Footer/>
				</div>
			</BrowserRouter>
		</CartProvider>
  );
}

export default App;
