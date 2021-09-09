import { IconButton, Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useContext } from 'react';
import CartContext from '../context/CartContext';

function CartWidget(){
    const {unidadesTotales} = useContext(CartContext);
    return (
        <IconButton aria-label="carrito" color="inherit">
            <Badge badgeContent={unidadesTotales} color="error">
                <ShoppingCartIcon fontSize="large"/>
            </Badge>
        </IconButton>
    )
}

export default CartWidget; 