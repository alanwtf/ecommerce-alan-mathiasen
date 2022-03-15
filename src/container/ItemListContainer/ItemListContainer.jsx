import React, { useState, useEffect } from "react";

import ItemList from "../../components/ItemList/ItemList";
import Loading from "../../components/Loading/Loading";

import { useParams } from "react-router-dom";

import { getFetch } from "../../helpers/getFetch";

import Container from "@mui/material/Container";
import "./ItemListContainer.scss";

const ItemListContainer = () => {
    const [prods, setProds] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getFetch
                .then((resp) =>
                    setProds(resp.filter((prod) => prod.category === id))
                )
                .catch((err) => console.log(err))
                .finally(() => setLoading(false));
        } else {
            getFetch
                .then((resp) => setProds(resp))
                .catch((err) => console.log(err))
                .finally(() => setLoading(false));
        }
    }, [id]);

    return (
        <Container maxWidth="lg" sx={{ p: 4 }}>
            {loading ? <Loading /> : <ItemList items={prods} />}
        </Container>
    );
};

export default ItemListContainer;
