import Container from "@mui/material/Container";
import { useState } from "react";
import Cart from "../../components/Cart/Cart";
import FormDialog from "../../components/FormDialog/FormDialog";
import { useCartContext } from "../../context/CartContext";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const CartContainer = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [userData, setUserData] = useState({});

    const { clearCart, cartList, totalPrice } = useCartContext();

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
        const items = cartList.map((prod) => ({
            item: prod.title,
            cant: prod.cant,
            id: prod.id,
            price: prod.price,
        }));
        const db = getFirestore();
        addDoc(collection(db, "orders"), {
            buyer: { ...userData },
            items: { items, timestamp: Date.now(), total: totalPrice() },
        })
            .then((resp) =>
                alert("Compra finalizada! Su Id de compra es: " + resp.id)
            )
            .finally(() => {
                handleClose();
                clearCart();
            });
    };

    return (
        <Container>
            <Cart handleOpen={handleOpen} />
            <FormDialog
                open={openDialog}
                data={userData}
                handleClose={handleClose}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
        </Container>
    );
};

export default CartContainer;
