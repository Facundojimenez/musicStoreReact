import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js'
import { makeStyles } from '@material-ui/core';
import Tema from './components/tema.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contacto from './pages/Contacto.js';
import Homepage from './pages/Home.js'
import DetalleProducto from './pages/DetalleProducto.js';
import CategoriasProductos from './pages/CategoriasProductos.js';
import { CartContext } from './context/CartContext.js';

const useStyles = makeStyles({
	body: {
		backgroundColor: Tema.palette.background.default
	}
})

function App() {
	const classes = useStyles();
	let arrLineaProductos = [];
	const calcularStockDisponible = (producto) => {
		const indiceLinea = arrLineaProductos.findIndex(lineaProducto => lineaProducto.producto.id === producto.id);
		if(indiceLinea !== -1){
			return producto.stock - arrLineaProductos[indiceLinea].cantidad;
		}
		else{
			return producto.stock;
		}
	};
	const carritoVacio = () =>{
		return arrLineaProductos.length === 0;
	};
	const existeProducto = (id) => {
		return arrLineaProductos.some(linea => linea.producto.id === id)
	};
	const agregarAlCarrito = (nuevaLinea) => {
        const indiceLinea = arrLineaProductos.findIndex(lineaProducto => lineaProducto.producto.id === nuevaLinea.producto.id);
        if(indiceLinea !== -1){ ///Si existe en el carrito sumo la cantidad
            if(nuevaLinea.cantidad + arrLineaProductos[indiceLinea].cantidad <= nuevaLinea.producto.stock){
                arrLineaProductos[indiceLinea].cantidad += nuevaLinea.cantidad;
                return true;
            }
        }
        else{   ///si no existe en el carrito lo agrego como nuevo
            if(nuevaLinea.cantidad <= nuevaLinea.producto.stock){
                arrLineaProductos.push(nuevaLinea);
                return true;
            }
        }
		return false;
	};
	const vaciarCarrito = () =>{
		arrLineaProductos.splice(0, arrLineaProductos.length)
	}
  	return (
	  	<CartContext.Provider value={{arrLineaProductos, existeProducto, agregarAlCarrito, carritoVacio, calcularStockDisponible, vaciarCarrito}}>
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
					</Switch>
					<Footer/>
				</div>
			</BrowserRouter>
		</CartContext.Provider>
  );
}

export default App;
