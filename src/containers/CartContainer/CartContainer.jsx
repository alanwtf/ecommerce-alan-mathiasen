import Container from "@mui/material/Container";
import { useState } from "react";
import Cart from "../../components/Cart/Cart";
import FormDialog from "../../components/FormDialog/FormDialog";
import { useCartContext } from "../../context/CartContext";
import {
    collection,
    addDoc,
    getFirestore,
    writeBatch,
    getDocs,
    query,
    where,
    documentId,
} from "firebase/firestore";

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

    const handleSubmit = async (e) => {
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

        const queryCollection = collection(db, "products");

        const queryUpdateStock = query(
            queryCollection,
            where(
                documentId(),
                "in",
                cartList.map((it) => it.id)
            )
        );

        const batch = writeBatch(db);

        await getDocs(queryUpdateStock)
            .then((resp) =>
                resp.docs.forEach((response) =>
                    batch.update(response.ref, {
                        stock:
                            response.data().stock -
                            cartList.find((item) => item.id === response.id)
                                .cant,
                    })
                )
            )
            .catch((err) => {
                throw new Error(err);
            });

        batch.commit();
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
