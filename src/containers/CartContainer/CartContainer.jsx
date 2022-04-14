import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [userData, setUserData] = useState({
        name: "",
        lastName: "",
        email: "",
        confirmEmail: "",
        phone: "",
    });
    const [validate, setValidate] = useState({});
    const [successMessage, setSuccesMessage] = useState("");

    const { clearCart, cartList, totalPrice } = useCartContext();

    const navigate = useNavigate();

    const handleOpen = () => setOpenDialog(true);
    const handleClose = () => setOpenDialog(false);
    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        if (
            userData.name !== "" &&
            userData.lastName !== "" &&
            userData.email !== "" &&
            userData.confirmEmail !== "" &&
            userData.phone !== ""
        ) {
            if (userData.email !== userData.confirmEmail) {
                setValidate({ error: "Los e-mails deben coincidir" });
            } else {
                setValidate({ value: true, error: "" });
            }
        } else {
            setValidate(false);
        }
    }, [userData]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const items = cartList.map((prod) => ({
            id: prod.id,
            item: prod.title,
            cant: prod.cant,
            price: prod.price,
            description: prod.description,
        }));

        const db = getFirestore();
        const newUser = { ...userData };
        delete newUser.confirmEmail;
        addDoc(collection(db, "orders"), {
            buyer: { ...newUser },
            items: [...items],
            timestamp: Date.now(),
            total: totalPrice(),
            estado: "generada",
        })
            .then((resp) =>
                setSuccesMessage(
                    `Compra finalizada! Su Id de compra es: ${resp.id}.`
                )
            )
            .finally(() => {
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
                validate={validate}
                successMessage={successMessage}
                total={totalPrice()}
            />
        </Container>
    );
};

export default CartContainer;
