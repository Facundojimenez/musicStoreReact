import { createContext, useState } from "react";

const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    let arrLineaProductos = [];
    const [unidades, setUnidades] = useState(0)
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
    const onAdd = (nuevaLinea, setStockDisponible, setSnackBarStatusError) =>{ //Agrega un producto y actualiza el stock. Si no hay stock dispara un aviso
        if(!agregarAlCarrito(nuevaLinea)){
            setSnackBarStatusError(true)
        }
        else{
            setStockDisponible(calcularStockDisponible(nuevaLinea.producto))
        }
    };
    const contarUnidades = () =>{
        let unidades = 0;
        arrLineaProductos.forEach(linea => {
            unidades += linea.cantidad;
        })
        setUnidades(unidades);
        // console.log(unidades)
    }
    return (
    <CartContext.Provider value={{arrLineaProductos, existeProducto, agregarAlCarrito, carritoVacio, calcularStockDisponible, vaciarCarrito, onAdd, contarUnidades, unidades}}>
        {children}
    </CartContext.Provider>
    );
};

export default CartContext;