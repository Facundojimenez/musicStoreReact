import { createContext } from "react";
import useLocalStorage from "../localStorage/useLocalStorage";

const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
	const [arrLineaProductos, setArrLineaProductos] = useLocalStorage("arrLineaProductos", []);
	const [unidadesTotales, setUnidadesTotales] = useLocalStorage("unidadesTotales", 0);
	const calcularStockDisponible = (producto) => {
		const indiceLinea = arrLineaProductos.findIndex(lineaProducto => lineaProducto.producto.id === producto.id);
		if(indiceLinea !== -1){
			return producto.stock - arrLineaProductos[indiceLinea].cantidad;
		}
		else{
			return producto.stock;
		}
	};
	const vaciarCarrito = () =>{
		arrLineaProductos.splice(0, arrLineaProductos.length)
		setArrLineaProductos(arrLineaProductos);
		setUnidadesTotales(0);
	};
	const calcularTotal = () =>{
		let suma = 0;
		arrLineaProductos.forEach( linea => suma += linea.producto.precio * linea.cantidad)
		return suma;
	};
	const eliminarLineaProducto = (linea) =>{
		arrLineaProductos.filter(lineaProducto => lineaProducto.producto.id !== linea.producto.id)
		setArrLineaProductos(arrLineaProductos);
		setUnidadesTotales(unidadesTotales - linea.cantidad);
	}
    return (
    <CartContext.Provider value={{arrLineaProductos, unidadesTotales, calcularTotal , vaciarCarrito, setUnidadesTotales, eliminarLineaProducto, setArrLineaProductos, calcularStockDisponible}}>
        {children}
    </CartContext.Provider>
    );
};

export default CartContext;