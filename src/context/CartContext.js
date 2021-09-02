import { createContext, useState } from "react";

const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
	const [arrLineaProductos] = useState([])
    const [unidadesTotales, setUnidadesTotales] = useState(0);
	const calcularStockDisponible = (producto) => {
		const indiceLinea = arrLineaProductos.findIndex(lineaProducto => lineaProducto.producto.id === producto.id);
		if(indiceLinea !== -1){
			return producto.stock - arrLineaProductos[indiceLinea].cantidad;
		}
		else{
			return producto.stock;
		}
	};
	const carritoVacio = () =>{ ///sin usar todavia
		return arrLineaProductos.length === 0;
	};
	const existeProducto = (id) => { ///sin usar todavia
		return arrLineaProductos.some(linea => linea.producto.id === id)
	};

	const vaciarCarrito = () =>{ ///sin usar todavia
		arrLineaProductos.splice(0, arrLineaProductos.length)
	};
	const calcularTotal = () =>{
		let suma = 0;
		arrLineaProductos.forEach( linea => suma += linea.producto.precio * linea.cantidad)
		return suma;
	};
	const eliminarLineaProducto = (linea) =>{
		const indiceLinea = arrLineaProductos.findIndex(lineaProducto => lineaProducto.producto.id === linea.producto.id);
		arrLineaProductos.splice(indiceLinea, 1);
		setUnidadesTotales(unidadesTotales - linea.cantidad)
	}
    return (
    <CartContext.Provider value={{arrLineaProductos, calcularTotal ,existeProducto, carritoVacio, vaciarCarrito, unidadesTotales, setUnidadesTotales, eliminarLineaProducto, calcularStockDisponible}}>
        {children}
    </CartContext.Provider>
    );
};

export default CartContext;