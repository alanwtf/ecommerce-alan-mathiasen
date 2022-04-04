import Container from "@mui/material/Container";
import { useState } from "react";
import Cart from "../../components/Cart/Cart";
import FormDialog from "../../components/FormDialog/FormDialog";
import { useCartContext } from "../../context/CartContext";

const CartContainer = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [userData, setUserData] = useState({});

    const { clearCart } = useCartContext();

    const handleOpen = () => setOpenDialog(true);
    const handleClose = () => setOpenDialog(false);
    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Compra realizada con éxito!");
        handleClose();
        clearCart();
    };

    return (
        <Container>
            <Cart handleOpen={handleOpen} />
            <FormDialog
                open={openDialog}
                setUserData={setUserData}
                handleClose={handleClose}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
        </Container>
    );
};

export default CartContainer;
