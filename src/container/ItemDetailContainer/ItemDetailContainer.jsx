import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import ItemDetail from "../../components/ItemDetail/ItemDetail";
import Loading from "../../components/Loading/Loading";

import { getItemById } from "../../helpers/getFetch";

import Container from "@mui/material/Container";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getItemById(id)
            .then((res) => {
                setItem(res);
            })
            .catch((err) => {
                throw new Error(err);
            })
            .finally(() => setLoading(false));
    }, [id]);

    useEffect(() => {
        console.log(loading);
    }, [loading]);

    return (
        <Container maxWidth="lg" sx={{ p: 4 }}>
            {loading ? <Loading /> : <ItemDetail item={item} />}
        </Container>
    );
};

export default ItemDetailContainer;