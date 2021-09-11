import { addDoc, collection, Timestamp } from "@firebase/firestore";
import { Button, Typography, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText, TextField, Backdrop, CircularProgress, makeStyles } from "@material-ui/core";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import { getDatabase } from "../firebase";

const useStyles = makeStyles({
    backdrop:{
        zIndex: 99,
        color: "#fff"
    },
    numeroPedido: {
        fontSize: "20px",
        fontWeight: 600
    }
})

function OrderFormButtom(){
    const classes = useStyles();
    const {arrLineaProductos, vaciarCarrito, calcularTotal} = useContext(CartContext);
    const [numeroPedido, setNumeroPedido] = useState("");
    const [openAlerta, setOpenAlerta] = useState(false);
    const [openForm, setOpenForm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [buyerData, setBuyerData] = useState({
        name: "",
        phone: "",
        email: ""
    });
    const handleCloseForm = () =>{
        setBuyerData({
            name: "",
            phone: "",
            email: ""
        })
        setOpenForm(false);
    };
    const handleInputChange = (event) =>{
        setBuyerData({...buyerData, [event.target.id]: event.target.value});
    };
    const handleCompra = async () => {
        handleCloseForm();
        setLoading(true);
        const orderNueva = {
            buyer: buyerData,
            items: arrLineaProductos,
            date: Timestamp.fromDate(new Date()),
            total: calcularTotal()
        }
        const ordersCollection = collection(getDatabase(), "orders");
        const orderRef = await addDoc(ordersCollection, orderNueva);
        setNumeroPedido(orderRef.id)
        setLoading(false);
        setOpenAlerta(true);
    };
    return (
        <>
            <Button onClick={() => setOpenForm(true)} variant="contained" color="primary" startIcon={<ShoppingCart />}>
                <Typography variant="h6" component="h6">
                    Finalizar compra
                </Typography>
            </Button>
            <Dialog open={openForm} onClose={handleCloseForm} aria-labelledby="form-finalizar-compra">
                <DialogTitle>Finalizar la compra</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Para finalizar la compra, por favor ingresa tus datos. Una vez confirmada la compra, te mostraremos el número de pedido para que realices el seguimiento. Es importante que lo conserves.
                    </DialogContentText>
                    <form>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Nombre completo"
                            fullWidth
                            required
                            onChange={handleInputChange}
                        />
                        <TextField
                            margin="dense"
                            id="email"
                            label="Email"
                            type="email"
                            fullWidth
                            required
                            onChange={handleInputChange}
                        />
                        <TextField
                            margin="dense"
                            id="phone"
                            label="Teléfono"
                            fullWidth
                            required
                            onChange={handleInputChange}
                    />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseForm} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleCompra} color="primary" variant="contained">
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog open={openAlerta}>
                <DialogTitle id="alert-dialog-title">Compra finalizada con éxito</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Muchas gracias por tu compra, tu numero de pedido es: <span className={classes.numeroPedido}> {numeroPedido}</span>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" variant="contained" onClick={() => {
                        setOpenAlerta(false);
                        vaciarCarrito();
                        }
                    }>
                        Aceptar
                    </Button>
                </DialogActions>
            </Dialog>
            <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    )
}

export default OrderFormButtom;