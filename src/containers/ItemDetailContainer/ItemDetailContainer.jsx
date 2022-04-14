import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import ItemDetail from "../../components/ItemDetail/ItemDetail";
import Loading from "../../components/Loading/Loading";

import { getFirestore, doc, getDoc } from "firebase/firestore";
import Container from "@mui/material/Container";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();

        const queryDoc = doc(db, "products", id);

        getDoc(queryDoc)
            .then((resp) => {
                if (resp.data() === undefined) setItem(undefined);
                else setItem({ id: resp.id, ...resp.data() });
            })
            .finally(() => {
                setLoading(false);
            })
            .catch((err) => {
                throw new Error(err);
            });
    }, [id]);

    return (
        <Container maxWidth="lg" sx={{ p: 4 }}>
            {loading ? (
                <Loading />
            ) : item ? (
                <ItemDetail item={item} />
            ) : (
                <div>No se encontró el producto.</div>
            )}
        </Container>
    );
};

export default ItemDetailContainer;
