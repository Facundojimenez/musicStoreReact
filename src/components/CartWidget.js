import { IconButton } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function CartWidget(){
    return (
         <IconButton aria-label="carrito" color="inherit">
            <ShoppingCartIcon/>
        </IconButton>
    )
}

export default CartWidget; 